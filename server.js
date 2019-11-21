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

// GET all houses
app.get('/api/v1/houses', (request, response) => {
  const { houses} = app.locals;
  console.log("love", houses.length);
  response.json({ houses });
});

// GET an individual house
app.get('/api/v1/houses/:id', (request, response) => {
 const { id } = request.params;
 const house = app.locals.houses.find(house => house.id === id);
  if (!house) {
    response.sendStatus(404)
  }
  response.status(200).json(house)
})

// GET all characters
app.get('/api/v1/characters', (request, response) => {
  const { characters } = app.locals;
  console.log("love",characters.length);
  response.json({ characters });
});

// GET an individual character
app.get('/api/v1/characters/:id', (request, response) => {
  const { id } = request.params;
  const character = app.locals.characters.find(character => character.id === id);
   if (!character) {
     response.sendStatus(404)
   }
   response.status(200).json(character)
 })

// POST a new house
app.post('/api/v1/houses', (request, response) => {
  // const house = request.body;
  // app.locals.house.push(house);
})

// POST a new characters
app.post('/api/v1/characters', (request, response) => {
  // const character = request.body;
  // app.locals.characters.push(character);
})

// DELETE a character
app.delete('app/v1/character', (request, response) => {
  // const { id } = request.body;
  // const character = app.locals.characters.find(character => character.id === id)
  // remove the character from the database
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
