import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URL || 'http://localhost:4000/api',
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
console.log('Created ApolloClient:', client);
export default client;
