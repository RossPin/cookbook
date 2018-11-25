
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', (table) => {
    table.integer('recipe_id')
    table.integer('number')
    table.text('text')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('steps')
};
