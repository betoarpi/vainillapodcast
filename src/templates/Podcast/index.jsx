import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Img from 'gatsby-image'
import { PodcastSection, PodcastHeader, ShowNotes } from './styles'
import { FiChevronDown } from 'react-icons/fi'

const Podcast = ({ data: { prismicPodcast } }) => {
  const { data, tags } = prismicPodcast
  function handleClick(e) {
    const target = e.target.parentNode;
    const targetParent = target.parentNode;

    if (!targetParent.classList.contains('active')) {
      targetParent.classList.add('active')
    } else {
      targetParent.classList.remove('active')
    }
  }
  return (
    <Layout
      pageDescription={data.show_description.text}
      pageTitle={data.title.text}
    >
      <PodcastSection>
        <article>
          <PodcastHeader>
            <figure className='cover'>
              <Img
                alt={data.cover.alt}
                fluid={data.cover.localFile.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </figure>
            <div>
              <h1>{data.title.text}</h1>
              <small>{tags}: Episodio {data.episode_number.text}</small>
              <p><span dangerouslySetInnerHTML={{ __html: data.publication_date }} /></p>
              <p><span dangerouslySetInnerHTML={{ __html: data.show_description.text }} /></p>
            </div>
          </PodcastHeader>
          <div>
            <div dangerouslySetInnerHTML={{ __html: data.podcast_embed.text }} />
            <h2>Las notas del show</h2>
            <ShowNotes>
              {data.show_notes.map((note) => (
                <li key={note.note_title.text} className='show-note'>
                  <h5 className='show-note__title'>
                    <span className='show-note__topic'>{note.note_title.text}</span>
                    <span className='show-note__time'>{note.time_of_note.text}: </span>
                    {note.section_name && <span className='show-note__hashtag'> # {note.section_name}</span>}
                    {note.note_content.html &&
                      <button type='button' onClick={handleClick}><FiChevronDown /></button>
                    }
                  </h5>
                  <div dangerouslySetInnerHTML={{ __html: note.note_content.html }} />
                </li>
              ))}
            </ShowNotes>
          </div>
        </article>
      </PodcastSection>
    </Layout>
  )
}

Podcast.propTypes = {
  pageDescription: PropTypes.string,
  pageTitle: PropTypes.string,
}

export default Podcast

export const podcastQuery = graphql`
  query PodcastBySlug($uid: String!) {
    prismicPodcast(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
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
        episode_number {
          text
        }
        publication_date
        show_description {
          text
        }
        show_notes {
          time_of_note {
            text
          }
          note_title {
            text
          }
          note_content {
            html
          }
          section_name
        }
        podcast_embed {
          text
        }
      }
      tags
    }
  }
`