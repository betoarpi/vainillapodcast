import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/layout'

const Page = ({ data: { prismicPages } }) => {
  const { data } = prismicPages
  return (
    <Layout
      pageDescription={data.content.text}
      pageTitle={data.page_name.text}
    >
      <section>
        <h1>{data.page_name.text}</h1>
        {data.page_cover.localFile &&
          <figure>
            <Img fluid={data.page_cover.localFile.childImageSharp.fluid} alt={data.page_name.text} />
          </figure>
        }
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </section>
    </Layout>
  )
}

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
          localFile {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid_tracedSVG,
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