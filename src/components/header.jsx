import React from 'react'
import SEO from './seo'

const Header = ({ pageDescription, pageTitle }) => {
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
      />
    </>
  )
}

export default Header;