// requiring express
const express = require('express');
// setting app to the express function
const app = express();
// assigning a port
const port = process.env.PORT || 3000;
// represents the state of the system enviorment
const environment = process.env.NODE_ENV || 'development';
// takes in the configurations from our knex file
const configuration = require('./knexfile')[environment];
// let's us connect to the database we set in our conficuration file
const database = require('knex')(configuration);

// method built in express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());
app.locals.title = 'HP API';

// app.get handles a get request
// here specifically the '/' page
app.get('/', (request, response) => {
  // sends a response of ''Oh hey HP-API'
  response.send('Oh hey HP-API');
});

// GET all houses
// app.get handles a get request
// this one specifically for the houses path
app.get('/api/v1/houses', (request, response) => {
  // in our database, specifically our houses table, select all of them
  database('houses').select()
    .then((houses) => {
      // then send a respinse status of 200 plus all the houses as a 
      //json object
      response.status(200).json(houses);
    })
    // if there is an error catch it here
    .catch((error) => {
      // and send a response status of 500 and the send the error
      // as a json object
      response.status(500).json({ error });
    });
});

// GET an individual house
// app.get handles a get request
// this one specifically for a particular house
app.get('/api/v1/houses/:id', (request, response) => {
  // set a variable called 'id' that is destructured from
  // the request
  const { id } = request.params;
  // in our database, specifically our houses table, select all of them
  database('houses').select()
    // then on all the houses
    .then(houses => {
      // find the house with a house.id that matches the house from
      // the id given from the request
      // and set it to a variable
      const house = houses.find(house => house.id === parseInt(id));
      // if the house doesn't exist
      if (!house) {
        // send a response back with the status code of 404
        // meaning not found/does not exist
        response.sendStatus(404);
      }
      // if the house does exist and is found
      // send a response status code of 200 and 
      // send the house as a json object
      response.status(200).json(house);
    })
    // if there is an error catch it here
    .catch((error) => {
      // and send a response status of 500 and the send the error
      // as a json object
      response.status(500).json({ error });
    });
});

// GET all characters
// app.get handles a get request
// this one specifically for all characters
app.get('/api/v1/characters', (request, response) => {
  // in our database, specifically our characters table, select all of them
  database('characters').select()
  // then...
    .then((characters) => {
      // send a response status of 22 and
      // all our characters as a json object
      response.status(200).json(characters);
    })
    // if there is an error catch it here
    .catch((error) => {
      // and send a response status of 500 and the send the error
      // as a json object
      response.status(500).json({ error });
    });
});

// GET an individual character
// app.get handles a GET request
// this one specifically for a particular character id
app.get('/api/v1/characters/:id', (request, response) => {
  // set a variable called 'id' that is destructured from
  // the request
  const { id } = request.params;
  // in our database, specifically our characters table, selecta ll of them
  database('characters').select()
  // then...
    .then(characters => {
      // find the character with a character.id that matches the character from
      // the id given from the request
      // and set it to a variable named character
      const character = characters.find(character => character.id === parseInt(id));
      // if the character doesn't exist
      if (!character) {
        // send a response code of 404
        response.sendStatus(404);
      }
      // otherwise send a response code of 200
      // and send the character as a json object
      response.status(200).json(character);
    })
    // if there is error catch it here
    .catch((error) => {
      // send a response status of 500 
      // and the error as a json object
      response.status(500).json({ error });
    });
 });

// POST a new house
// app.post handles a POST request
// this one specifically to POST a new house
app.post('/api/v1/houses', (request, response) => {
  // set the request body (object) to the house variable
  const house = request.body;
  
  // In this for loop we set a variable called 'requiredParameter'
  // for every requiredParameter within our array ['name', 'mascot', 'headOfHouse', 'founder']
  for (let requiredParameter of ['name', 'mascot', 'headOfHouse', 'founder']) {
    // the house property of the requiredParameter does NOT exist
    if (!house[requiredParameter]) {
      // return a response status of 422
      // and an error message of the expected format
      // plus the parameter missing
      return response
        .status(422)
        .send({ error: `Expected format: { name: <String>, mascot: <String>, headOfHouse: <String>, founder: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  // if we have all required parameters
  // in our database, specifically the houses table
  // insert the new house
  database('houses').insert(house, 'id')
    // then with the id
    .then(house => {
      // send a response status of 201 (successful)
      // and a json object of the house.id that has been posted
      response.status(201).json({ id: house[0] })
    })
    // if an error occurs catch it here
    .catch(error => {
      // and send a response status of 500
      // and the error message as a json object
      response.status(500).json({ error });
    });
});

// POST a new character
// app.post handles a POST request
// this one specifically to POST a new character
app.post('/api/v1/characters', (request, response) => {
  // set the request body (object) to the character variable
  const character = request.body;
  
  // In this for loop
  // we set each required property to a variable
  for (let requiredParameter of ['name', 'house_id']) {
    // if that characters property does not exist
    if (!character[requiredParameter]) {
      // send a response with the status of 422
      // and send an error message of format expected
      // plus the missing property
      return response
        .status(422)
        .send({ error: `Expected format: { name: <String>, house_id: <Integer> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  // in our database, specifically our characters table
  // insert the new character
  database('characters').insert(character, 'id')
    // then using the character id
    .then(character => {
      // send a response status of 201 (successfull)
      // and a json obect of the new character id
      response.status(201).json({ id: character[0] })
    })
    // if there's an error catch it here
    .catch(error => {
      // send the response status of 500
      // plus an error as a json object
      response.status(500).json({ error });
    });
});

// DELETE a new character
// app.delete handles a DELETE request
// this one specifically to DELETE a character
app.delete('/api/v1/characters/:id', (request, response) => {
  // destructure the id from the request.params and set it to an 'id' variable
  const { id } = request.params;
  // in our database, specifically our characters table
  database('characters')
    // where the id column is the id
    .where('id', id)
    // delete that character row
    .delete()
    // then...
    .then(message => {
      // if the message we get back equal 1
      if (message === 1) {
        // send a response status of 201
        // and send a string that the character has been successfully deleted
        response.status(201).send(`Character has been successfully deleted.`)
      } else {
        // otherwise send a status of 404
        // and send a string that the character does not exist
        response.status(404).send(`Character with id ${id} does not exist.`)
      }
    })
    // if there's an server error catch it here
    .catch(error => {
      // and send a response status of 500
      // and send the error message as a json object
      response.status(500).json({error})
    });
});

// for our app listen on 'portp'
app.listen(port, () => {
  // and console log a string with the name of the app being on on 'port'
  console.log(`${app.locals.title} is running on http://localhost:${port}.`);
});