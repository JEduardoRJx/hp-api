# HP-API
Harry Potter API is a RESTful API. The following is documentation for Version 1 (V1). Released November 2019.
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

| Param         | Value         | Description  |
| ------------- |:-------------:| -----:|
| `id`          | *integer*     | To identify a house, ex: `3`|
| `name`        | *string*      | House name:, ex `Slytherin` |
| `mascot`      | *string*      | House Mascot, ex: `snake` |
| `headOfHouse` | *string*      | Head of House, ex: `Severus Snape` |
| `founder`     | *string*      | Founder of House, ex: `Salazar Slytherin` |
| `created_at`  | *string*      | When info. was created  |
| `updated_at`  | *string*      | When info. was last updated |

## GET Individual House
`GET /api/v1/houses/:id`
Will return a single Hogwarts House with matching `id`.

## GET Characters
`GET /api/v1/characters`
Will return all characters.

| Param         | Value         | Description  |
| ------------- |:-------------:| -----:|
| `id`          | *integer*     | To identify a character, ex: `2`|
| `name`        | *string*      | House name:, ex `Sirius Black` |
| `house_id`    | *integer*     | House id that the character belongs to, ex: `1` |
| `created_at`  | *string*      | When info. was created  |
| `updated_at`  | *string*      | When info. was last updated |

## GET Individual Character
`GET /api/v1/characters/:id`
Will return a single Character with matching `id`.

## POST A New House
`POST /api/v1/houses`
Able to create a new Hogwarts House.

| Param         | Value         | Description  |
| ------------- |:-------------:| -----:|
| `id`          | *integer* | Will automatically be set|
| `name`        | *string*  | **required** House name:, ex `Slytherin` |
| `mascot`      | *string*  | **required** House Mascot, ex: `snake` |
| `headOfHouse` | *string*  | **required** Head of House, ex: `Severus Snape` |
| `founder`     | *string*  | **required** Founder of House, ex: `Salazar Slytherin` |
| `created_at`  | *string*  | Will automatically be set|
| `updated_at`  | *string*  | Will automatically be set|