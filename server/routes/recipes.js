const router = require('express').Router()
const {getRecipes, getRecipe, getIngredients, getSteps, addProduct, getProducts} = require('../db/recipes')

router.get('/', (req, res) => {
  getRecipes().then(recipes => {
    res.json(recipes)
  })
})

router.get('/:id', (req, res) => {
  const recipe_id = req.params.id
  getRecipe(recipe_id).then(recipe => {
    getIngredients(recipe_id).then(ingredients => {
      recipe.ingredients = ingredients
      getSteps(recipe_id).then(steps => {
        recipe.steps = steps
        res.json(recipe)
      })
    })
  })
})

router.post('/product', (req,res) => {
  const product = req.body
  addProduct(product).then(id => {
    res.json({message: 'product added', id})
  })
})

router.get('products', (req, res) => {
  getProducts().then(products => {
    res.json(products)
  })
})

module.exports = router