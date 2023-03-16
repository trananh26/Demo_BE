const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json('router 1 user')
  })

  router.get('/products', (req, res) => {
    res.json({ message: "ok" });
  })

  router.get('/carts', (req, res) => {
    res.json('router 1 in carts')
  })

  router.get('/:id', (req, res) => {
    res.json('router 1 user' + req.params.id)
  })

module.exports = router