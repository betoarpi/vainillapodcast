import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { AiFillPlayCircle } from 'react-icons/ai'

const StyledArticle = styled.article`
  border-radius: 1.5rem;
  background: var(--color-primary-lighter);
  box-shadow:  -20px 20px 60px #c9ccc6, 
               20px -20px 60px #ffffff;
  margin: 2rem 0 2rem 4rem;
  position: relative;

  > span {
    background: var(--color-default);
    border-radius: 0.5rem;
    color: white;
    font-size:0.45rem;
    font-weight: 700;
    left:-4.5rem;
    padding: 0.15rem 0.5rem;
    position: absolute;
    text-transform: uppercase;
    top: 50%;
    transform: translateY(-50%);
  }

  > a {
    align-items: center;
    color: var(--color-default);
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 100px 1fr 40px;
    padding: 1rem 2rem 1rem 1rem;
    text-decoration: none;
    &:hover {
      .icon {
        color: var(--color-highlight);
        transform: translateX(0.5rem);
      }
    }
  }

  .cover {
    transition: all 0.25s ease-in-out;
  }

  figure {
    border-radius:1rem;
    margin:0;
    overflow: hidden;
    max-width: 100%;
    > * {
      max-width: 100%;
    }
  }

  a > div {
    padding:1rem 0;
    > h4 {
      margin-bottom:0.5rem;
    }
    > small {
      color: var(--color-secondary);
      display: block;
    }
  }
  .icon {
    color: var(--color-secondary);
    height: 40px;
    transition: all 0.25s ease-in-out;
    width: 40px;
  }

  @media screen and (max-width: 767px) {
    margin-left: 3rem;
    > a {
      grid-template-columns: 1fr 40px;
      .cover {
        display: none;
      }
    }
  }
`

const PodcastItem = ({ data, tags, uid }) => {
  return (
    <StyledArticle>
      <Link to={`/${uid}`}>
        <figure className='cover'>
          <Img fluid={data.cover.localFile.childImageSharp.fluid} alt={data.cover.alt} />
        </figure>
        <div>
          <h4>{data.title.text}</h4>
          <small>{tags}: Episodio {data.episode_number.text}</small>
        </div>
        <AiFillPlayCircle className='icon' />
      </Link>
      <span>{data.publication_date}</span>
    </StyledArticle>
  )
}

export default PodcastItem