import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
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
        <div dangerouslySetInnerHTML={{ __html: data.content.text }} />
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
        content {
          text
        }
      }
    }
  }
`