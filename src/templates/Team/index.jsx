import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'

const Team = ({ data: { prismicTeam } }) => {
  const { data } = prismicTeam
  return (
    <Layout
      pageDescription='some description here'
      pageTitle={data.page_title.text}
    >
      <section>
        <h1>{data.page_title.text}</h1>
        <ul>
          {data.team_nrdware.map(node => (
            <li>
              <Img
                alt={node.name}
                fluid={node.picture.localFile.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
              />
              <h3>{node.name}</h3>
              <a href={`https://twitter.com/${node.twitter}`} target='_blank' rel="noopener noreferrer">{node.twitter}</a>
              <div dangerouslySetInnerHTML={{ __html: node.bio.html }} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

Team.propTypes = {
  pageDescription: PropTypes.string,
  pageTitle: PropTypes.string,
}

export default Team

export const teamQuery = graphql`
  query TeamBySlug($uid: String!) {
    prismicTeam(uid: { eq: $uid }) {
      uid
      data {
        page_title {
          text
        }
        team_nrdware {
          name
          twitter
          bio {
            html
          }
          picture {
            localFile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_tracedSVG,
                }
              }
            }
          }
        }
      }
    }
  }
`