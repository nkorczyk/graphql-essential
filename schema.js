import { buildSchema } from 'graphql';

// const schema = buildSchema(`
//     type Query {
//         hello: String
//     }
// `);

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        age: Int
        email: [Email]!
    }

    type Email {
        email: String
    }

    type Query {
        getFriend(id: ID):  Friend
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: String
        age: Int
        email: [Email]!
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`);

export default schema;
