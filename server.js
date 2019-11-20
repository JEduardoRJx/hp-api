import { houses, characters} from './data'
const express = require('express');
// import express from 'express';
const app = express();

// console.log('hey', members.length);
app.set('port', process.env.Port || 3000);
app.use(express.json());

app.locals.title = 'HP API';
app.locals.characters = characters
app.locals.houses = houses

app.get('/', (request, response) => {
  response.send('Oh hey HP-API');
});

app.get('/api/v1/characters', (request, response) => {
  const { characters } = app.locals;
  console.log("love",characters.length);
  response.json({ characters });
});

app.get('/api/v1/houses', (request, response) => {
  const { houses} = app.locals;
  console.log("love", houses.length);
  response.json({ houses });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
