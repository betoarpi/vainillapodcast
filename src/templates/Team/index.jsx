/* import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../../components/layout'

const MainTitle = styled.h1`
  margin-bottom:3rem;
  text-align: center;
`

const TeamGrid = styled.ul`
  display: grid;
  gap:3rem;
  grid-template-columns: repeat(2, 1fr);
  margin:0;
  padding:0;
  @media screen and (max-width: 579px){
    grid-template-columns: 1fr;
  }
`

const TeamMember = styled.li`
  list-style: none;
  figure {
    border-radius: 1.5rem;
    background: #edf0e9;
    box-shadow:  -20px 20px 60px #c9ccc6, 
                20px -20px 60px #ffffff;
    overflow: hidden;
    position: relative;
    transition: all 0.25s ease-in-out;
    z-index:0;
    &:hover {
      transform: translateY(-0.25rem);
    }
  }
  .title {
    margin: 1rem 0 0.5rem;
    position: relative;
    text-transform: uppercase;
    z-index:1;
  }
  article {
    padding: 0 1rem;
  }
`

const Team = ({ data: { prismicTeam } }) => {
  const { data } = prismicTeam
  return (
    <Layout
      pageDescription='some description here'
      pageTitle={data.page_title.text}
    >
      <section>
        <MainTitle>{data.page_title.text}</MainTitle>
        <TeamGrid>
          {data.team_nrdware.map(node => (
            <TeamMember>
              <figure>
                <Img
                  alt={node.name}
                  fluid={node.picture.localFile.childImageSharp.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </figure>
              <article>
                <h3 className='title'>{node.name}</h3>
                <a href={`https://twitter.com/${node.twitter}`} target='_blank' rel="noopener noreferrer">{node.twitter}</a>
                <div dangerouslySetInnerHTML={{ __html: node.bio.html }} />
              </article>
            </TeamMember>
          ))}
        </TeamGrid>
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
` */