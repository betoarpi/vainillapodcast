import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Latest, PodcastItem } from '../components/index'
import Layout from '../components/layout'

const PodcastSection = styled.section`
  margin: 4rem auto;
  max-width: 960px;
  > h2 {
    text-align: center;
    display: block;
    margin: 0 auto 2rem;
    position: relative;
    z-index:1;
  }

  @media screen and (max-width: 767px) {
    max-width: 480px;
  }
`

const PodcastGrid = styled.div`
  position: relative;
  z-index:0;
  &:before {
    background: var(--color-default);
    border-radius:3px;
    content: '';
    height: calc(100% - 2rem);
    left:0;
    opacity:0.15;
    overflow: hidden;
    position: absolute;
    top:2rem;
    width: 3px;
  }
`


const Homepage = ({ data }) => {
  const { AllPosts } = data
  return (
    <Layout
      pageDescription="Vainilla es un Podcast de Front-end en Español. Acompaña a Rob Arroyo en estas cápsulas con tips sobre tecnologías web, carrera profesional y noticias de la industria."
      pageTitle="Un Podcast de Front-end en Español"
    >
      <Latest {...data} />
      <PodcastSection>
        {AllPosts.nodes.length > 0 && <h2>Todos los episodios</h2>}
        <PodcastGrid>
          {AllPosts.nodes.map(node => (
            <PodcastItem
              className='podcast-grid__item'
              key={node.uid}
              slug={node.slugs}
              {...node}
            />
          ))}
        </PodcastGrid>
      </PodcastSection>
    </Layout >
  )
}

export const homePageQuery = graphql`
  {
    LatestPost: allPrismicPodcast(limit: 1, sort: {fields: data___publication_date, order: DESC}) {
      nodes {
        uid
        data {
          title {
            text
          }
          episode_number {
            text
          }
          show_description {
            html
          }
          cover {
            alt
            localFile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_tracedSVG,
                }
              }
            }
          }
        }
        last_publication_date
        slugs
      }
    }
    AllPosts: allPrismicPodcast(skip:1, sort: {fields: data___publication_date, order: DESC}) {
      nodes {
        uid
        data {
          publication_date(formatString: "DD MMM YY", locale: "ES")
          title {
            text
          }
          episode_number {
            text
          }
          cover {
            alt
            localFile {
              childImageSharp {
                fluid(maxWidth: 120, grayscale: true) {
                  ...GatsbyImageSharpFluid_tracedSVG,
                }
              }
            }
          }
        }
        last_publication_date
        slugs
      }
    }
  }
`

export default Homepage
