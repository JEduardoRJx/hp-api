const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

// app.set('port', process.env.Port || 3000);
app.use(express.json());
app.locals.title = 'HP API';

app.get('/', (request, response) => {
  response.send('Oh hey HP-API');
});

// GET all houses
app.get('/api/v1/houses', (request, response) => {
  database('houses').select()
    .then((houses) => {
      response.status(200).json(houses);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

// GET an individual house
app.get('/api/v1/houses/:id', (request, response) => {
 const { id } = request.params;
 database('houses').select()
  .then(houses => {
    const house = houses.find(house => house.id === parseInt(id));
    if (!house) {
      response.sendStatus(404);
    }
    response.status(200).json(house);
  })
  .catch((error) => {
    response.status(500).json({ error });
  });
});

// GET all characters
app.get('/api/v1/characters', (request, response) => {
  database('characters').select()
    .then((characters) => {
      response.status(200).json(characters);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

// GET an individual character
app.get('/api/v1/characters/:id', (request, response) => {
  const { id } = request.params;
 database('characters').select()
  .then(characters => {
    const character = characters.find(character => character.id === parseInt(id));
    if (!character) {
      response.sendStatus(404);
    }
    response.status(200).json(character);
  })
  .catch((error) => {
    response.status(500).json({ error });
  });
 });

// POST a new house
app.post('/api/v1/houses', (request, response) => {
  const house = request.body;
  
  for (let requiredParameter of ['name', 'mascot', 'headOfHouse', 'founder']) {
    if (!house[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { name: <String>, mascot: <String>, headOfHouse: <String>, founder: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('houses').insert(house, 'id')
    .then(house => {
      response.status(201).json({ id: house[0] })
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

// POST a new character
app.post('/api/v1/characters', (request, response) => {
  const character = request.body;
  
  for (let requiredParameter of ['name', 'house_id']) {
    if (!character[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { name: <String>, house_id: <Integer> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('characters').insert(character, 'id')
    .then(character => {
      response.status(201).json({ id: character[0] })
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

// DELETE a character
app.delete('/api/v1/characters/:id', (request, response) => {
  const { id } = request.params;
  database('characters')
    .where('id', id)
    .delete()
    .then(message => {
      if (message === 1) {
        response.status(201).send(`Character has been successfully deleted.`)
      } else {
        response.status(404).send(`Character with id ${id} does not exist.`)
      }
    })
    .catch(error => {
      response.status(500).json({error})
    });
});

app.listen(port, () => {
  console.log(`${app.locals.title} is running on http://localhost:${port}.`);
});