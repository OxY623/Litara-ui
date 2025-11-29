import { gql } from '@apollo/client';

const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;
const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;
const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`;
// Добавляем запрос GET_MY_NOTES
const GET_MY_NOTES = gql`
  query me {
    me {
      id
      username
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;
// Добавляем запрос GET_MY_FAVORITES
const GET_MY_FAVORITES = gql`
  query me {
    me {
      id
      username
      favorites {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;
// Добавляем в запросы GET_ME
const GET_ME = gql`
  query me {
    me {
      id
      favorites {
        id
      }
    }
  }
`;
export {
  GET_ME,
  GET_MY_FAVORITES,
  GET_MY_NOTES,
  GET_NOTE,
  GET_NOTES,
  IS_LOGGED_IN,
};
