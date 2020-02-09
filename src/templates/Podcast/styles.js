import styled from 'styled-components'

export const PodcastSection = styled.section`
  margin: 0 auto;
  max-width: 960px;
`

export const PodcastHeader = styled.header`
  align-items: center;
  border-radius: 1.5rem;
  background: #edf0e9;
  box-shadow:  -20px 20px 60px #c9ccc6, 
              20px -20px 60px #ffffff;
  display: grid;
  gap:2rem;
  grid-template-columns: 440px 1fr;
  margin-bottom:2rem;
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
`

export const ShowNotes = styled.ul`
  margin:0;
  padding:0;
  
  li {
    list-style: none;
  }

  .show-note {
    &__title {
      border-bottom: 1px solid rgba(0,0,0, 0.25);
      display: grid;
      font-weight:400;
      gap:0.5rem;
      grid-template-columns: max-content max-content 1fr 30px;
      padding-bottom:0.5rem;
      position: relative;
      button {
        appearance: none;
        border:none;
        grid-column: 4 / 5;
        grid-row: 1 / 2;
        outline: none;
        &:before {
          content: ' ';
          height: 100%;
          left:0;
          position: absolute;
          top:0;
          width: 100%;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
    &__time {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    &__topic {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
    &__hashtag {
      color: var(--color-secondary);
      font-weight:700;
      grid-column: 3 / 4;
      grid-row: 1 / 2;
    }
    div {
      display: none;
    }
    &.active {
      div {
        display: block;
      }
    }
  }
`
