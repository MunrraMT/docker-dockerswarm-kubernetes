import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send('Testando');
});

app.listen(3001, () => console.log('teste'));
