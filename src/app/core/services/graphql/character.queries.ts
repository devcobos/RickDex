import gql from 'graphql-tag';

export const LIST_CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        created
        status
        species
        type
        gender
        origin {
          id
          name
        }
        location {
          id
          name
        }
        image
        episode {
          id
          name
          episode
        }
      }
    }
  }
`;
