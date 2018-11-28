const db = require('./connection')

function getRecipes() {
  return db('recipes')
}

function getRecipe (id) {
  return db('recipes')
  .where('id', id)
  .first()
}

function getIngredients (recipe_id) {
  return db('ingredients')
    .where('recipe_id', recipe_id)  
    .join('products', 'ingredients.product_id', 'products.id')
    .select('product_id', 'name', 'qty', 'unit', 'cal', 'fat', 'sat_fat', 'protien', 'carb', 'sugar', 'avg_weight', 'density')    
}

function getSteps (recipe_id) {
  return db('steps')
    .where('recipe_id', recipe_id)
}

function addProduct (product) {
  return db('products')
    .insert(product)
    .then(ids => ids[0])
}

function getProducts() {
  return db('products')
}

module.exports = {
  getRecipes,
  getRecipe,
  getIngredients,
  getSteps,
  addProduct,
  getProducts
}