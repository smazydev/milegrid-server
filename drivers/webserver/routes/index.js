const express = require('express')
const router = express.Router()

const users = require('./users')
//const sheet = require('./sheet')

router
  .get('/users', users.index)
  .get('/users/:id', users.show)
  .post('/users', users.create)

// router
//   .get('/teachers', teachers.index)
//   .get('/teachers/:id', teachers.show)
//   .post('/teachers', teachers.create)
  

module.exports = router