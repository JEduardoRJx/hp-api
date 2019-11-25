# HP-API
Harry Potter API is a RESTful API. The following is documentation for Version 1 (V1) released November 2019.
This API came out of a school project as a way to get comfortable with building databases using:
  * Express
  * Knex
  * PostgreSQL
  * and writing professional-grade documentation. 
 
 ## Response Format
 Response format is in `JSON`
 
 ## All Routes
 All Routes stem from:
`https://wizard-boy-api.herokuapp.com/`

## GET Houses
`GET /api/v1/houses`
Will return all Hogwarts Houses.

| **Param**     | **Value**     | **Description**  |
| ------------- |:-------------:| ----------------|
| `id`          | *integer*     | To identify a house, ex: `3`|
| `name`        | *string*      | House name:, ex: `Slytherin` |
| `mascot`      | *string*      | House Mascot, ex: `snake` |
| `headOfHouse` | *string*      | Head of House, ex: `Severus Snape` |
| `founder`     | *string*      | Founder of House, ex: `Salazar Slytherin` |
| `created_at`  | *string*      | When info. was created  |
| `updated_at`  | *string*      | When info. was last updated |

### Sample Response
```javascript
[
  {
    "id": 1,
    "name": "Gryffindor",
    "mascot": "lion",
    "headOfHouse": "Minerva McGonagall",
    "founder": "Goderic Gryffindor",
    "created_at": "2019-11-23T18:17:18.393Z",
    "updated_at": "2019-11-23T18:17:18.393Z"
  },
  {
    "id": 2,
    "name": "Ravenclaw",
    "mascot": "eagle",
    "headOfHouse": "Fillius Flitwick",
    "founder": "Rowena Ravenclaw",
    "created_at": "2019-11-23T18:17:18.399Z",
    "updated_at": "2019-11-23T18:17:18.399Z"
  }
]
```

## GET Individual House
`GET /api/v1/houses/:id`
Will return a single Hogwarts House with matching `id`.

### Sample Response
```javascript
{
  "id": 2,
  "name": "Ravenclaw",
  "mascot": "eagle",
  "headOfHouse": "Fillius Flitwick",
  "founder": "Rowena Ravenclaw",
  "created_at": "2019-11-23T18:17:18.399Z",
  "updated_at": "2019-11-23T18:17:18.399Z"
}
```

## GET Characters
`GET /api/v1/characters`
Will return all characters.

| **Param**     | **Value**     | **Description**  |
| ------------- |:-------------:| ----------------|
| `id`          | *integer*     | To identify a character, ex: `2`|
| `name`        | *string*      | House name:, ex: `Sirius Black` |
| `house_id`    | *integer*     | House id that the character belongs to, ex: `1` |
| `created_at`  | *string*      | When info. was created  |
| `updated_at`  | *string*      | When info. was last updated |

### Sample Response
```javascript
[
  {
    "id": 1,
    "name": "Katie Bell",
    "house_id": 1,
    "created_at": "2019-11-23T18:17:18.444Z",
    "updated_at": "2019-11-23T18:17:18.444Z"
  },
  {
    "id": 2,
    "name": "Sirius Black",
    "house_id": 1,
    "created_at": "2019-11-23T18:17:18.447Z",
    "updated_at": "2019-11-23T18:17:18.447Z"
  }
]
```

## GET Individual Character
`GET /api/v1/characters/:id`
Will return a single Character with matching `id`.

### Sample Response
```javascript
{
  "id": 2,
  "name": "Sirius Black",
  "house_id": 1,
  "created_at": "2019-11-23T18:17:18.447Z",
  "updated_at": "2019-11-23T18:17:18.447Z"
}
```

## POST A New House
`POST /api/v1/houses`
Able to create a new Hogwarts House.

| **Param**     | **Value**     | **Description**  |
| ------------- |:-------------:| ----------------|
| `id`          | *integer* | Will automatically be set|
| `name`        | *string*  | **required** House name:, ex `Slytherin` |
| `mascot`      | *string*  | **required** House Mascot, ex: `snake` |
| `headOfHouse` | *string*  | **required** Head of House, ex: `Severus Snape` |
| `founder`     | *string*  | **required** Founder of House, ex: `Salazar Slytherin` |
| `created_at`  | *string*  | Will automatically be set|
| `updated_at`  | *string*  | Will automatically be set|

### Sample POST request
```javascript
{
  "name": "Moonhowl",
  "mascot": "werewolf",
  "headOfHouse": "Remus Lupin",
  "founder": "Remus Lupin",
}
```

## POST A New Character
`POST /api/v1/characters`
Able to create a new character.

| **Param**     | **Value**     | **Description**  |
| ------------- |:-------------:| ----------------|
| `id`          | *integer* | Will automatically be set|
| `name`        | *string*  | **required** Character name, ex: `Sirius` |
| `house_id`    | *integer* | **required** House Id character belonds to, ex: `1` |
| `created_at`  | *string*  | Will automatically be set|
| `updated_at`  | *string*  | Will automatically be set|

### Sample POST request
```javascript
{
  "name": "Tony the Tiger",
  "house_id": 3
}
```

## DELETE A Character
`DELETE /api/v1/characters/:id`
Able to delete any character.

| **Param**     | **Value**     | **Description**  |
| ------------- |:-------------:| ----------------|
| `id`          | *integer*     | Need `id` of exisiting character, ex: `22` |

### Sample DELETE request
```javascript
{
  "id": 77
}
```

## GitHub Projects Workflow Board
[GitHub Projects Workflow Board](https://github.com/JEduardoRJx/hp-api/projects/1)
