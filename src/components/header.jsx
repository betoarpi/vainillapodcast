import React from 'react'
import SEO from './seo'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../images/vainillapodcast-logo.svg'

const Navigation = styled.nav`
  align-items: center;
`

/* const handleClick = (event) => {
  const navigation = document.querySelector('.header nav ul');
  const hamburger = document.querySelector('.header nav svg');
  hamburger.classList.toggle('active')
  navigation.classList.toggle('active')
  console.log(event)
} */

const handleScroll = () => {
  const header = document.getElementById('header')
  const body = document.getElementsByTagName('body')[0]

  if (window.pageYOffset >= 110) {
    header.classList.add('sticky')
    body.classList.add('header-sticky')
  } else {
    header.classList.remove('sticky')
    body.classList.remove('header-sticky')
  }
}

if (typeof window !== 'undefined') {
  window.onscroll = () => { handleScroll() }
}

const Header = ({ pageDescription, pageTitle, title }) => {
  return (
    <>
      <SEO
        title={title || pageTitle}
        description={pageDescription}
      />
      <header className='header' id='header'>
        <Navigation>
          <Link to='/'>
            <img src={Logo} alt='Vainilla Podcast Logo' />
          </Link>
          <ul>
            <li>
              <Link to='/'>Episodios</Link>
            </li>
            <li>
              <Link to='/acerca-de'>Acerca del Podcast</Link>
            </li>
          </ul>
        </Navigation>
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