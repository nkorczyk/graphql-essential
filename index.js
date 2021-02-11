import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL');
});

const root = { hello: () => 'Hello' };

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));
