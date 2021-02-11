import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL');
});

// const root = { hello: () => 'Hello' };

const friendDataBase = {};

class Friend {
  constructor(id, { firstName, lastName, gender, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
  }
}

const root = {
  friend: () => {
    return {
      id: 1234,
      firstName: 'John',
      lastName: 'Shaun',
      gender: 'male',
      email: [{ email: 'example@gmail.com' }, { email: 'test@me.com' }],
    };
  },
  createFriend: ({ input }) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    friendDataBase[id] = input;

    return new Friend(id, input);
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));
