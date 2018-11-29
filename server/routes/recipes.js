const router = require('express').Router()
const db = require('../db/recipes')
const token = require('../auth/token')

router.get('/', (req, res) => {
  db.getRecipes().then(recipes => {
    res.json(recipes)
  })
})

router.get('/:id', (req, res) => {
  const recipe_id = req.params.id
  db.getRecipe(recipe_id).then(recipe => {
    db.getIngredients(recipe_id).then(ingredients => {
      recipe.ingredients = ingredients
      db.getSteps(recipe_id).then(steps => {
        recipe.steps = steps
        res.json(recipe)
      })
    })
  })
})

router.post('/product', token.decode, (req,res) => {
  const product = req.body
  db.addProduct(product).then(id => {
    res.json({message: 'product added', id})
  })
})

router.put('/product/:id', token.decode, (req,res) => {
  const product = req.body
  const id = req.params.id
  db.updateProduct(id, product).then(() => {
    res.json({message: 'product updated', id})
  })
})

router.get('/products', (req, res) => {
  db.getProducts().then(products => {
    res.json(products)
  })
})

router.get('/product/:id', (req, res) => {
  const id = req.params.id
  db.getProduct(id).then(product => {
    res.json(product)
  })
})

router.post('/new', token.decode, (req,res) => {
  const {title, ingredients, steps} = req.body
  db.addRecipe(title).then(id => {
    ingredients.forEach(element => {
      element.recipe_id = id
    })
    db.addIngredients(ingredients).then(() => {
      steps.forEach(element => {
        element.recipe_id = id
      })
      db.addSteps(steps).then(() => {
        res.json({message: 'recipe added', id})
      })
    })
  })
})

module.exports = router