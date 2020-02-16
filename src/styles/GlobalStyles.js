import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  html {
    font-size: 18px;
    --color-primary: #edf0e9;
    --color-primary_shade: #BFC9B1;
    --color-secondary: #691936;
    --color-highlight: #f7ca2a;
    --color-default: #303030;
  }
  body {
    background: var(--color-primary);
    color: var(--color-default);
    min-height: 100vh;
    margin:0;
    padding:0 2rem;
  }
  h1 {
    color: var(--color-secondary);
  }
  padding, ul, li, span {
    a {
      color: var(--color-secondary);

      &:hover {
        background: var(--color-highlight);
      }
    }
  }
  .header {
    display: flex;
    padding:1rem 0;
    margin-bottom: 2rem;
    width: 100%;
    nav {
      display: grid;
      grid-template-columns: 100px 1fr;
      margin:0 auto;
      max-width:1024px;
      width:100%;
      > a {
        img {
          margin:0;
        }
      }
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
            color: var(--color-default);
            font-weight: 300;
            position: relative;
            text-decoration: none;
            text-transform: uppercase;
            &:hover, &[aria-current='page'] {
              color: var(--color-secondary);
              &:before {
                background: var(--color-highlight);
                content: '';
                height:1rem;
                position:absolute;
                right:0;
                bottom:0;
                width: 100%;
                z-index:-1;
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 767px) {
      nav {
        ul {
          display: none;
        }
      }
    }
  }
  main {
    margin: 0 auto;
    min-height: calc(100vh - 224px);
    max-width: 960px;
  }
  .btn {
    align-items: center;
    background: var(--color-secondary);
    border-radius:2rem;
    color: white;
    display: grid;
    font-weight: 700;
    grid-template-columns: 1fr max-content;
    max-width:260px;
    padding:1rem 2rem;
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    width:100%;
    &:hover {
      background: var(--color-highlight);
      color: var(--color-secondary);
    }
    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
    @media screen and (max-width: 767px) {
      font-size:0.85rem;
      grid-template-columns:1fr;
      padding: 0.75rem 1.5rem;
      text-align: center;
      svg {
        display: none;
      }
    }
  }
  p {
    img {
      border-radius:1rem;
    }
  }
`

export default GlobalStyles
