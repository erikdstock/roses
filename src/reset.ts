import { createGlobalStyle } from "styled-components"
import { serif, sansSerif } from "./typography/fonts"
import { red } from './colors';

createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    height: 100vh;
  }
  
  body {
    min-height: 100vh;
    font-family: ${sansSerif};
  
    &.noScroll {
      overflow: hidden;
      position: fixed;
    }
  }
  
  #root {
    height: 100vh !important;
  }
  
  h1, h2, h3, h4, h5 {
    font-family: ${sansSerif};
    font-weight: 400;
    color: ${red};
    margin: 1em 0;
  }
  
  p {
    font-family: ${serif};
    font-weight: 400;
    margin: 0 0 1em 0;
  }
`;
