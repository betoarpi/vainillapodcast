import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import GlobalStyles from '../styles/GlobalStyles'
import Header from './header'
import Footer from './footer'

const Layout = ({ children, pageTitle, pageDescription }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)
  return (
    <>
      <GlobalStyles />
      <Header
        siteTitle={data.site.siteMetadata.title}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
