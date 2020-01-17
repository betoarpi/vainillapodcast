import styled from 'styled-components'

const PodcastSection = styled.section`
  .show-notes {
    margin:0;
    padding:0;
    
    li {
      list-style: none;
    }

    &__note {
      &__title {
        position: relative;
        button {
          &:before {
            content: ' ';
            height: 100%;
            left:0;
            position: absolute;
            top:0;
            width: 100%;
          }
        }
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
  }
`

export default PodcastSection