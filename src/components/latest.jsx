import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { AiFillPlayCircle } from 'react-icons/ai'

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 100%;
  > h1 {
    margin: 2rem auto 3rem;
    max-width: 100%;
    text-align: center;
    position: relative;
  }

  article {
    align-items: center;
    background: var(--color-primary-lighter);
    box-shadow:  -20px 20px 60px #c9ccc6, 
                20px -20px 60px #ffffff;
    display: grid;
    gap:2rem;
    grid-template-columns: 440px 1fr;
    padding: 0 1.5rem 0 0;

    .cover {
      align-self: start;
      transition: all 0.25s ease-in-out;
      &:hover {
        transform: scale(1.025);
      }
    }

    figure {
      margin:0;
      overflow: hidden;
    }

    > div {
      padding:1.5rem 0;
      > a {
        text-decoration: none;
      }
      > a > h2 {
        color: var(--color-default);
        font-family: 'silkablack';
        margin-bottom:0.5rem;
        text-transform: uppercase;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    article {
      grid-template-columns: 300px 1fr;
    }
  }
  @media screen and (max-width: 767px) {
    max-width: 480px;
    article {
      grid-template-columns: 1fr;
      padding:0;
      > div {
        padding: 1.5rem;
      }
    }
  }
`

const Latest = ({ LatestPost }) => {
  return (
    <StyledSection>
      <h1>Escucha el último episodio</h1>
      {LatestPost.nodes.map(node => (
        <article key={node.uid}>
          <Link to={`/${node.uid}`} className='cover'>
            <figure>
              <Img fluid={node.data.cover.localFile.childImageSharp.fluid} alt={node.data.cover.alt} />
            </figure>
          </Link>
          <div>
            <Link to={`/${node.uid}`}>
              <h2>{node.data.title.text}</h2>
            </Link>
            <small>#Episodio{node.data.episode_number.text}</small>
            <div dangerouslySetInnerHTML={{ __html: node.data.show_description.html }} />
            <Link to={`/${node.uid}`} className='btn'>
              <span>Escúchalo ahora</span> <AiFillPlayCircle />
            </Link>
          </div>
        </article>
      ))}
    </StyledSection>
  )
}

export default Latest