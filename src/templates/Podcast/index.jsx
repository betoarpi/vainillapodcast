import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Img from 'gatsby-image'
import PodcastSection from './styles'
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
        <h1>{data.title.text}</h1>
        <Img
          alt={data.cover.alt}
          fluid={data.cover.localFile.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <p>
          {tags.map(tag => <span>{tag}</span>)}
          {' '}Episodio <span dangerouslySetInnerHTML={{ __html: data.episode_number.text }} /></p>
        <p><span dangerouslySetInnerHTML={{ __html: data.publication_date }} /></p>
        <div dangerouslySetInnerHTML={{ __html: data.podcast_embed.text }} />
        <p><span dangerouslySetInnerHTML={{ __html: data.show_description.text }} /></p>
        <ul className='show-notes'>
          {data.show_notes.map((note) => (
            <li key={note.note_title.text} className='show-notes__note'>
              <h5 className='show-notes__note__title'>
                <span>{note.time_of_note.text}: </span>
                {note.note_title.text}
                {note.section_name && <span> - {note.section_name}</span>}
                <button type='button' onClick={handleClick}><FiChevronDown /></button>
              </h5>
              <div dangerouslySetInnerHTML={{ __html: note.note_content.html }} />
            </li>
          ))}
        </ul>
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