import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../../components/layout'

const Page = ({ data: { prismicPages } }) => {
  const { data } = prismicPages
  return (
    <Layout
      pageDescription={data.content.text}
      pageTitle={data.page_name.text}
      image={data.page_cover.localFile.childImageSharp.fluid.src}
    >
      <PageSection>
        <h1>{data.page_name.text}</h1>
        {data.page_cover.localFile &&
          <figure>
            <Img fluid={data.page_cover.localFile.childImageSharp.fluid} alt={data.page_name.text} />
          </figure>
        }
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </PageSection>
    </Layout>
  )
}

export const PageSection = styled.section`
  margin: 0 auto;
  max-width: 1024px;
  a {
    color: var(--color-secondary);
    &:hover {
      background: var(--color-highlight);
    }
  }
  @media screen and (max-width: 767px) {
    max-width: 480px;
  }
`

Page.propTypes = {
  pageDescription: PropTypes.string,
  pageTitle: PropTypes.string,
}

export default Page

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPages(uid: { eq: $uid }) {
      uid
      data {
        page_name {
          text
        }
        page_cover {
          alt
          localFile {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid_tracedSVG,
                src
              }
            }
          }
        }
        content {
          text
          html
        }
      }
    }
  }
`