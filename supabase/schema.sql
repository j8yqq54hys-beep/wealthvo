-- Wealthvo community schema.
-- Paste this whole file into: Supabase Dashboard → SQL Editor → New query → Run.
-- It creates the posts + comments tables with open read/write for anonymous
-- visitors (this is a public beta community), plus an atomic like counter.

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  author text not null,
  kind text not null check (kind in ('progress', 'win', 'fail', 'question')),
  path_id text not null default 'general',
  milestone_id text,
  text text not null,
  income numeric,
  likes int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references posts(id) on delete cascade,
  author text not null,
  text text not null,
  created_at timestamptz not null default now()
);

alter table posts enable row level security;
alter table comments enable row level security;

drop policy if exists "anyone can read posts" on posts;
create policy "anyone can read posts" on posts for select using (true);

drop policy if exists "anyone can post" on posts;
create policy "anyone can post" on posts for insert with check (true);

drop policy if exists "anyone can read comments" on comments;
create policy "anyone can read comments" on comments for select using (true);

drop policy if exists "anyone can comment" on comments;
create policy "anyone can comment" on comments for insert with check (true);

-- Atomic like counter: concurrent likes can't overwrite each other, and
-- anon visitors can only change the count through this function.
create or replace function like_post(p_post_id uuid, p_delta int)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update posts set likes = greatest(0, likes + p_delta) where id = p_post_id;
end;
$$;

grant execute on function like_post(uuid, int) to anon;

-- Realtime (live updates without refresh). Safe to re-run.
do $$
begin
  alter publication supabase_realtime add table posts;
exception when duplicate_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table comments;
exception when duplicate_object then null;
end $$;
