import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { AiFillPlayCircle } from 'react-icons/ai'

import Layout from '../components/layout'
import Error404Img from '../images/Error404.png'

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
      img {
          display: block;
          margin: 0;
      }
    }

    > div {
      padding:1.5rem 0;
      > a {
        text-decoration: none;
      }
      > h1 {
        color: var(--color-default);
        font-family: 'silkablack';
        margin-bottom:0.5rem;
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

const Latest = ({ data: { prismicPages } }) => {
    const { data } = prismicPages
  return (
    <Layout
        pageDescription={data.content.text}
        pageTitle={data.page_name.text}
    >
        <StyledSection>
            <article key='error-404'>
                <figure>
                    <img src={Error404Img} alt='Imagen para error 404' />
                </figure>
                <div>
                    <h1>El podcast que quieres escuchar, no existe.</h1>
                    <small>#Episodio null</small>
                    <div>
                        <p>
                            !Lo sentimos! El podcast que buscas no existe, pero quizá esté en planes de grabarlo. Mientras tanto, te invitamos a escuchar alguno de nuestros episodios.
                        </p>
                    </div>
                    <Link to='/' className='btn'>
                    <span>Ver Episodios</span> <AiFillPlayCircle />
                    </Link>
                </div>
            </article>
        </StyledSection>
    </Layout>
  )
}

export default Latest