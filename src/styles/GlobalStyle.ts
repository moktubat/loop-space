import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* keep using your existing fonts (globals.css still in place) */
  :root {
    --breakpoint-sm: 480px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1320px;
  }

  html, body, #__next {
    height: 100%;
  }

  /* small helpers used by styled-components */
  .sr-only { 
    position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0;
  }

  /* utility to keep old class-based highlight text working */
  .highlightTxt {
    background: #f9c551;
    padding: 1px 8px;
    color: #1d1f2c;
  }
`;
