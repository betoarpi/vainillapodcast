import React from 'react'
import SEO from './seo'
import { Link } from 'gatsby'

import Logo from '../images/nrdware-logo.svg'

const Header = ({ pageDescription, pageTitle }) => {
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
      />
      <header>
        <nav>
          <Link to='/'>
            <img src={Logo} alt='NRDWARE Logo' />
          </Link>
          <ul>
            <li>
              <Link to='/'>Episodios</Link>
            </li>
            <li>
              <Link to='/acerca-de'>Acerca de</Link>
            </li>
            <li>
              <Link to='/los-nerdos'>Nerdos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export const headerQuery = graphql`
  {
    posts: allPrismicPodcast {
      nodes {
        uid
        data {
          title {
            text
          }
        }
        slugs
      }
    }
  }
`

export default Header;