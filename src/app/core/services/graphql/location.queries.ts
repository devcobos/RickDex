import gql from 'graphql-tag';

export const GET_LOCATION = gql`
  query location($idLocation: ID!) {
    location(id: $idLocation) {
      id
      name
      created
      type
      dimension
      residents {
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

export const LIST_LOCATIONS = gql`
  query location($page: Int) {
    locations(page: $page) {
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
        type
        dimension
      }
    }
  }
`;
