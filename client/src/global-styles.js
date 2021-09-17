import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    -webkit-locale: "en";
    box-sizing: border-box;
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    --blue: #02646b;
    --indigo: #624f89;
    --purple: #624f89;
    --pink: #c6274d;
    --red: #c6274d;
    --orange: #ec6a47;
    --yellow: #ec6a47;
    --green: #687b6e;
    --teal: #02646b;
    --cyan: #02646b;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #624f89;
    --secondary: #dad0ef;
    --success: #687b6e;
    --info: #02646b;
    --warning: #ec6a47;
    --danger: #c6274d;
    --light: #f2f5f5;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: "Sofia Pro","Segoe UI",Roboto,Arial;
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --animate-duration: 1s;
    --animate-delay: 1s;
    --animate-repeat: 1;
  }

  body {
    margin: 0;
    font-family: Sofia Pro,Segoe UI,Roboto,Arial;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    background-color: #fff;
    word-break: break-word!important;
    overflow-wrap: break-word!important;
    overscroll-behavior-y: none;
    -webkit-user-drag: none!important;
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    color: #0d1718!important;
  }
`;
