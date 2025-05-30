import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/', // Your local mock server
  cache: new InMemoryCache(),
});

export default client;
