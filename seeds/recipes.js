
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, title: 'Garlic chicken drums', img: 'GarlicChickenDrums.jpeg'},
        {id: 2, title: 'Boiled eggs', img: 'BoiledEggs.jpeg'}
      ]);
    });
};
