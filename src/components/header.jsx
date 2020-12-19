import React from 'react'
import SEO from './seo'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../images/vainillapodcast-logo.svg'

const Navigation = styled.nav`
  align-items: center;
`
const Ham = styled.svg`
  display: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  position: relative;
  user-select: none;
  transition: transform 400ms;
  z-index:1;
  
  &.active {
    transform: rotate(45deg);
  }
  .line {
    fill:none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: var(--color-default);
    stroke-width:5.5;
    stroke-linecap:round;
  }
  .top {
    stroke-dasharray: 40 160;
  }
  .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }
  .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition: transform 400ms, stroke-dashoffset 400ms;
  }
  &.active .top {
    stroke-dashoffset: -64px;
  }
  &.active .middle {
    //stroke-dashoffset: -20px;
    transform: rotate(90deg);
  }
  &.active .bottom {
    stroke-dashoffset: -64px;
  }
`

const handleClick = (event) => {
  const navigation = document.querySelector('.header nav ul');
  const hamburger = document.querySelector('.header nav svg');
  hamburger.classList.toggle('active')
  navigation.classList.toggle('active')
  console.log(event)
}

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
              <Link to='/acerca-del-podcast'>Acerca del Podcast</Link>
            </li>
          </ul>
          <Ham viewBox='0 0 100 100' width='60' onClick={handleClick}>
            <path
              className='line top'
              d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20' />
            <path
              className='line middle'
              d='m 30,50 h 40' />
            <path
              className='line bottom'
              d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20' />
          </Ham>
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