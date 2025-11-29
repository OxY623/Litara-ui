import { gql } from '@apollo/client';
const EDIT_NOTE = gql`
  mutation updateNote($id: ID!, $content: String!) {
    updateNote(id: $id, content: $content) {
      id
      content
      createdAt
      favoriteCount
      favoritesBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;
const TOGGLE_FAVORITE = gql`
  mutation ToggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
      favoriteCount
    }
  }
`;

export { EDIT_NOTE, TOGGLE_FAVORITE };
