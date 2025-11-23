import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URL || 'https://litara.onrender.com/api',
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
console.log('Created ApolloClient:', client);
export default client;
