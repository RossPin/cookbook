const router = require('express').Router()
const {userExists, createUser} = require('../db/users')
const token = require('../auth/token')

router.post('/register', register, token.issue)

function register (req, res, next) {
const {username, password} = req.body
  userExists(username)
    .then(exists => {
    if (exists) return res.status(400).send({message: "User exists"})
      createUser(username, password)
        .then(() => next())
    })
    .catch(err => res.status(500).send({message: err.message}))
}

router.post('/login', token.issue)

module.exports = router