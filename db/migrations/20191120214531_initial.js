
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('houses', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('mascot');
      table.string('headOfHouse');
      table.string('founder');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('characters', table => {
      table.increments('id').primary();
      table.string('name');
      table.integer('house_id').unsigned();
      table.foreign('house_id').references('houses.id');

      table.timestamps(true, true);

    })
  ]);
};

exports.down = function(knex) {
  knex.schema.dropTable('houses'),
  knex.schema.dropTable('characters')
};
