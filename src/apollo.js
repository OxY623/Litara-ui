import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';

// локальный query
export const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`;

// кеш с typePolicies для локального поля
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return !!localStorage.getItem('token');
          },
        },
      },
    },
  },
});

// link с динамическим токеном
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URL || 'http://localhost:4000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true,
});

export default client;
