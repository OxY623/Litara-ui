import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

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
  uri: import.meta.env.VITE_API_URL || 'https://litara.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
      ? `${localStorage.getItem('token')}`
      : '',
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true,
});

export default client;
