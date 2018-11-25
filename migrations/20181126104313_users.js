
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('user_name')    
    table.text('hash')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
