import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const Homepage = ({ data }) => {
  return (
    <Layout>
      <ul>
        {data.posts.nodes.map(node => (
          <li>
            <Link to={`/${node.slugs}`}>
              {node.data.title.text}
            </Link>
          </li>
        ))}
      </ul>
    </Layout >
  )
}

export const homePageQuery = graphql`
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

export default Homepage
