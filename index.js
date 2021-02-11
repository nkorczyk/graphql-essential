import express from 'express';
import { schema } from './data/schema';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';

const app = express();

// allow cross-origin requests
app.use(cors());

app.get('/', (req, res) => {
  res.send('GraphQL');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));
