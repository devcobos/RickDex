import gql from 'graphql-tag';

export const GET_EPISODE = gql`
  query episodes($idEpisode: ID!) {
    episode(id: $idEpisode) {
      id
      name
      created
      air_date
      episode
      characters {
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

export const LIST_EPISODES = gql`
  query episodes($season: String) {
    episodes(filter: { episode: $season }) {
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
        episode
        air_date
      }
    }
  }
`;
