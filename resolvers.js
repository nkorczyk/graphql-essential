const friendDataBase = {};

class Friend {
  constructor(id, { firstName, lastName, gender, email, contacts }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.contacts = contacts;
  }
}

//   friend: () => {
//     return {
//       id: 1234,
//       firstName: 'John',
//       lastName: 'Shaun',
//       gender: 'male',
//       email: [{ email: 'example@gmail.com' }, { email: 'test@me.com' }],
//     };
//   },

const resolvers = {
  getFriend: ({ id }) => {
    return new Friend(id, friendDataBase[id]);
  },
  createFriend: ({ input }) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    friendDataBase[id] = input;

    return new Friend(id, input);
  },
};

export default resolvers;
