
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'chicken drumsticks', group: 'Meat and Eggs', cal: 161, fat: 9.2, sat_fat: 2.5, protien: 18, carb: 0.1, sugar: 0, avg_weight: null, density: null},
        {id: 2, name: 'olive oil', group: 'Oils and Sauces', cal: 884, fat: 100, sat_fat: 14, protien: 0, carb: 0, sugar: 0, avg_weight: null, density: 0.91},
        {id: 3, name: 'butter', group: 'Dairy', cal: 717, fat: 81, sat_fat: 51, protien: 0.9, carb: 0.1, sugar: 0.1, avg_weight: null, density: 0.96},
        {id: 4, name: 'crushed garlic', group: 'Fruit and Vegtables', cal: 149, fat: 0.5, sat_fat: 0.1, protien: 4.2, carb: 33, sugar: 1, avg_weight: null, density: 0.57},
        {id: 5, name: 'lemon juice', group: 'Fruit and Vegtables', cal: 22, fat: 0.2, sat_fat: 0, protien: 0.4, carb: 6.9, sugar: 2.5, avg_weight: null, density: 1.03},
        {id: 6, name: 'chilli sauce', group: 'Oils and Sauces', cal: 21, fat: 0.6, sat_fat: 0.1, protien: 0.9, carb: 3.9, sugar: 2.6, avg_weight: null, density: 1.15},
        {id: 7, name: 'parsley', group: 'Herbs and Spices', cal: 271, fat: 5.2, sat_fat: 0, protien: 31, carb: 42, sugar: 0, avg_weight: null, density: 0.11},
        {id: 8, name: 'oregano', group: 'Herbs and Spices', cal: 265, fat: 4.3, sat_fat: 1.6, protien: 9, carb: 69, sugar: 0, avg_weight: null, density: 0.2},
        {id: 9, name: 'egg', group: 'Meat and Eggs', cal: 143, fat: 9.5, sat_fat: 3.1, protien: 13, carb: 0.7, sugar: 0.4, avg_weight: 62, density: null}
      ]);
    });
};
