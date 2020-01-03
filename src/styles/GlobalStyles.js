import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 18px;
  }
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  main {
    margin: 0 auto;
    max-width: 600px;
  }
`

export default GlobalStyles
