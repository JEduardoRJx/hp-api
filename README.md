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


### GET Houses
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
| `updated_at`  | *string*      | When info. was updated |



