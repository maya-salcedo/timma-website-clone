import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: Sofia Pro,Segoe UI,Roboto,Arial;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    background-color: #fff;
    word-break: break-word;
    overflow-wrap: break-word;
    overscroll-behavior-y: none;
    -webkit-user-drag: none;
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    color: #0d1718;
  }
`;
