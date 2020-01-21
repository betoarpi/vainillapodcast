import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  html {
    font-size: 18px;
    --color-primary: #C52B4F;
    --color-dark:#540B1F;
  }
  body {
    background-image: linear-gradient(to right bottom, #c52b4f, #a72243, #8a1a37, #6f122b, #540b1f);
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    min-height: 100vh;
    margin:0;
  }
  header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    display: flex;
    padding:1rem 0;
    width: 100%;
    nav {
      display: grid;
      grid-template-columns: 100px 1fr;
      margin:0 auto;
      max-width:970px;
      width:100%;
      ul {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        margin:0;
        padding:0;
        width: 100%;
        li {
          display: inline-flex;
          font-size:0.85rem;
          list-style: none;
          margin:0 0.5rem;
          a {
            color: #ffffff;
            text-transform: uppercase;
          }
        }
      }
    }
  }
  main {
    margin: 0 auto;
  }
`

export default GlobalStyles
