import {gql} from '@apollo/client';

export const CHARACTER_QUERY = gql`
  query Query($name: String!) {
    characters(page: 2, filter: {name: $name}) {
      info {
        count
      }
      results {
        name
      }
    }
    episodes {
      results {
        id
        episode
      }
    }
  }
`;
