
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id')
    table.string('name')    
    table.float('cal')
    table.float('fat')
    table.float('sat_fat')
    table.float('protien')
    table.float('carb')
    table.float('sugar')
    table.float('avg_weight')
    table.float('density')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products')
};
