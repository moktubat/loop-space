import { createGlobalStyle } from "styled-components";

/**
 * Minimal styled-components global style.
 *
 * All CSS variables, utility classes (.btn-pink, .card-lift,
 * .badge-pink, .highlightTxt, .sr-only) and resets live in
 * globals.css — this file is reserved for styled-components
 * runtime overrides that can't be expressed in static CSS.
 *
 * Render this component inside <StyledComponentsRegistry>
 * so it participates in SSR style collection.
 */
export const GlobalStyle = createGlobalStyle`
  /* intentionally empty — add styled-components
     runtime global overrides here when needed */
`;