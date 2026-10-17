/**
 * True when the page should render its final state with no entrance
 * animations — used by automated captures (?static=1 in the URL).
 */
export const isStaticRender =
  typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search).has('static')
