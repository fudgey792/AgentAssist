import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Customer {
    id: ID!
    name: String!
    email: String!
    createdAt: String!
  }

  type Query {
    customers: [Customer!]!
  }
`;

const customers = [
  { id: '1', name: 'Jane Doe', email: 'jane@example.com', createdAt: '2024-01-01' },
  { id: '2', name: 'John Smith', email: 'john@example.com', createdAt: '2024-02-01' },
];

const resolvers = {
  Query: {
    customers: () => customers,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Mock API ready at ${url}`);
});
