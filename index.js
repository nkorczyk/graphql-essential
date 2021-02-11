import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('GaphQL');
});

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));
