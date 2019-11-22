// import { houses, characters} from './data'
const data = require('../../../data');
const houses = data.houses;
const characters = data.characters;


const createHouse = (knex, house) => {
  return knex('houses').insert({
    name: house.name,
    mascot: house.mascot,
    headOfHouse: house.headOfHouse,
    founder: house.founder
  })
}

const createCharacter = (knex, character) => {
  let houseId = knex.from('houses')
    .select('id')
    .where('name', character.house)
  return knex('characters').insert({
    house_id: houseId,
    name: character.name,
  })
}

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(() => knex('houses').del())
    .then(() => {
      let housePromises = [];
      houses.forEach(house => {
        housePromises.push(createHouse(knex, house))
      })
      return Promise.all(housePromises);
    })
    .then(() => {
      let characterPromises = [];
      characters.forEach(character=> {
        characterPromises.push(createCharacter(knex, character))
      })
      return Promise.all(characterPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
