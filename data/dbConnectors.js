import mongoose from 'mongoose';
import Sequelize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

mongoose.Promise = global.Promise;
mongoose
  .connect(
    'mongodb+srv://test:test123@cluster0.4fmoq.mongodb.net/GRAPHQLESSENTIAL?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.log('Error: ', err.message));

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  language: {
    type: String,
  },
  email: {
    type: String,
  },
  contacts: {
    type: Array,
  },
});

const Friends = mongoose.model('friends', friendSchema);

// SQL
const sequelize = new Sequelize('database', null, null, {
  dialect: 'sqlite',
  storage: './alien.sqlite',
});

const Aliens = sequelize.define('aliens', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  planetName: { type: Sequelize.STRING },
});

Aliens.sync({ force: true }).then(() => {
  _.times(10, i => {
    Aliens.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
      planet: casual.word,
    });
  });
});

export { Friends, Aliens };
