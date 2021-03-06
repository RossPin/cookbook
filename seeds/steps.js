
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, number: 1, text: 'Preheat the oven to 450°F (225°C).'},
        {recipe_id: 1, number: 2, text: 'Melt the butter. In a large bowl mix melted butter, oil, garlic, lemon juice, chilli sauce, and herbs. Add the chicken and toss until coated.'},
        {recipe_id: 1, number: 3, text: 'Line a baking pan with baking paper and layout chicken on top. drizzle remaining mix from bowl over chicken'},
        {recipe_id: 1, number: 4, text: 'Bake the chicken until golden, about 30–40 minutes, depending on how large the pieces are.'},
        {recipe_id: 2, number: 1, text: 'Boil pot of water on stove'},
        {recipe_id: 2, number: 2, text: 'Using tongs place eggs in boiling water, boil for 7 minutes'},
        {recipe_id: 2, number: 3, text: 'Tip out boiling water keeping eggs in pot. Fill with cold water and let eggs cool for a few minutes'}
      ]);
    });
};
