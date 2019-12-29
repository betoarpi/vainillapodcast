import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Podcast = ({ data: { prismicPodcast } }) => {
  const { data } = prismicPodcast
  return (
    <React.Fragment>
      <h1>{data.title.text}</h1>
      <Img
        alt={data.cover.alt}
        fluid={data.cover.localFile.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <p>Episodio <span dangerouslySetInnerHTML={{ __html: data.episode_number.text }} /></p>
      <p><span dangerouslySetInnerHTML={{ __html: data.publication_date }} /></p>
      <div dangerouslySetInnerHTML={{ __html: data.podcast_embed.text }} />
      <p><span dangerouslySetInnerHTML={{ __html: data.show_description.text }} /></p>
      <ul>
        {data.show_notes.map(note => (
          <li>
            <b>{note.time_of_note.text}:</b> {note.note_title.text}
          </li>
        ))}
      </ul>

      <p dangerouslySetInnerHTML={{ __html: data.links.html }} />
    </React.Fragment>
  )
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
        }
        links {
          text
          html
        }
        podcast_embed {
          text
        }
      }
    }
  }
`