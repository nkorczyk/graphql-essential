import express from 'express';
import schema from './schema';
import { schema } from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));
