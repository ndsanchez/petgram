import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0 }

  ul { list-style: none }

  button { background-color: transparent; border: 0; outline: 0 }

  body {
    background-color: #FEFEFE;
    width: 100%;
    height: 100vh;
    scroll-behavior: none;
    margin: 0 auto;
    max-width: 1000px;
  }

  #app {
    width: 100%;
    min-height: 100vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: none;
    padding-bottom: 10px;
  }
`
