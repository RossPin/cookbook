
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', (table) => {
    table.integer('recipe_id')
    table.integer('product_id')
    table.float('qty')
    table.string('unit')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients')
};
