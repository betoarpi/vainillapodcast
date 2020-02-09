import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { AiOutlinePlayCircle } from 'react-icons/ai'

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 960px;

  > h1 {
    display: block;
    margin: 0 auto 2rem;
    max-width: 100%;
    text-align: center;
    position: relative;
    width: 800px;
    &:before {
      background: var(--color-highlight);
      content: '';
      height:1rem;
      position:absolute;
      right:0;
      bottom:0;
      width: 100%;
      z-index:-1;
    }
  }

  article {
    align-items: center;
    border-radius: 1.5rem;
    background: #edf0e9;
    box-shadow:  -20px 20px 60px #c9ccc6, 
                20px -20px 60px #ffffff;
    display: grid;
    gap:2rem;
    grid-template-columns: 440px 1fr;
    padding: 1.5rem;

    .cover {
      transition: all 0.25s ease-in-out;
      &:hover {
        transform: translateY(-0.25rem);
      }
    }

    figure {
      border-radius:1rem;
      margin:0;
      overflow: hidden;
    }

    > div {
      padding:1rem 0;
      > h2 {
        margin-bottom:0.5rem;
      }
      > small {
        color: var(--color-secondary);
        display: block;
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    article {
      grid-template-columns: 300px 1fr;
    }
  }
  @media screen and (max-width: 767px) {
    article {
      grid-template-columns: 1fr;
    }
  }
`

const Latest = ({ LatestPost }) => {
  return (
    <StyledSection>
      <h1>Escucha el último episodio de NRDWARE</h1>
      {LatestPost.nodes.map(node => (
        <article key={node.uid}>
          <Link to={`/${node.slugs[0]}`} className='cover'>
            <figure>
              <Img fluid={node.data.cover.localFile.childImageSharp.fluid} alt={node.data.cover.alt} />
            </figure>
          </Link>
          <div>
            <h2>{node.data.title.text}</h2>
            <small>{node.tags}: Episodio {node.data.episode_number.text}</small>
            <div dangerouslySetInnerHTML={{ __html: node.data.show_description.html }} />
            <Link to={`/${node.slugs[0]}`} className='btn'>
              <span>Escúchalo ahora</span> <AiOutlinePlayCircle />
            </Link>
          </div>
        </article>
      ))}
    </StyledSection>
  )
}

export default Latest