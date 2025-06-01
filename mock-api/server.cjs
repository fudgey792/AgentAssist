const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

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
  { id: '3', name: 'Alice Johnson', email: 'alice.johnson@example.com', createdAt: '2024-03-01' },
  { id: '4', name: 'Bob Williams', email: 'bob.williams@example.com', createdAt: '2024-03-15' },
  { id: '5', name: 'Clara Thompson', email: 'clara.thompson@example.com', createdAt: '2024-04-01' },
  { id: '6', name: 'David Lee', email: 'david.lee@example.com', createdAt: '2024-04-10' },
  { id: '7', name: 'Ella Patel', email: 'ella.patel@example.com', createdAt: '2024-04-20' },
  { id: '8', name: 'Frank Garcia', email: 'frank.garcia@example.com', createdAt: '2024-05-01' },
  { id: '9', name: 'Grace Kim', email: 'grace.kim@example.com', createdAt: '2024-05-05' },
  { id: '10', name: 'Henry Nguyen', email: 'henry.nguyen@example.com', createdAt: '2024-05-10' },
  { id: '11', name: 'Isabella Brown', email: 'isabella.brown@example.com', createdAt: '2024-05-15' },
  { id: '12', name: 'Jack Wilson', email: 'jack.wilson@example.com', createdAt: '2024-05-20' },
  { id: '13', name: 'Kylie Anderson', email: 'kylie.anderson@example.com', createdAt: '2024-06-01' },
  { id: '14', name: 'Leo Martinez', email: 'leo.martinez@example.com', createdAt: '2024-06-10' },
  { id: '15', name: 'Mia Scott', email: 'mia.scott@example.com', createdAt: '2024-06-15' },
  { id: '16', name: 'Noah Green', email: 'noah.green@example.com', createdAt: '2024-06-20' },
  { id: '17', name: 'Olivia Hall', email: 'olivia.hall@example.com', createdAt: '2024-07-01' },
  { id: '18', name: 'Paul Young', email: 'paul.young@example.com', createdAt: '2024-07-05' },
  { id: '19', name: 'Quinn Adams', email: 'quinn.adams@example.com', createdAt: '2024-07-10' },
  { id: '20', name: 'Ruby Clark', email: 'ruby.clark@example.com', createdAt: '2024-07-15' },

];

const resolvers = {
  Query: {
    customers: () => customers,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({}),
  // ✅ Enable CORS here
  cors: {
    origin: 'http://localhost:5173', // Your Vite dev server
    credentials: true,
  },
}).then(({ url }) => {
  console.log(`🚀 Mock API ready at ${url}`);
});
