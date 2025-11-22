import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://litara.onrender.com/api',
  cache: new InMemoryCache(),
});

export default client;
