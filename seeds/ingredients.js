
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id: 1, product_id: 1, qty: 300, unit: 'g'},
        {recipe_id: 1, product_id: 2, qty: 7.5, unit: 'ml'},
        {recipe_id: 1, product_id: 3, qty: 15, unit: 'ml'},
        {recipe_id: 1, product_id: 4, qty: 5, unit: 'ml'},
        {recipe_id: 1, product_id: 5, qty: 7.5, unit: 'ml'},
        {recipe_id: 1, product_id: 6, qty: 7.5, unit: 'ml'},
        {recipe_id: 1, product_id: 7, qty: 7.5, unit: 'ml'},
        {recipe_id: 1, product_id: 8, qty: 7.5, unit: 'ml'}
      ]);
    });
};
