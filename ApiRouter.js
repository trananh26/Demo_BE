const express = require('express')
const router = express.Router()

// khi truy xuất bằng đường dẫn thì mặc định get
router.get('/', (req, res) => {
    res.json('router 1 user GET')
  })

  router.post('/', (req, res) => {
    res.json('router 1 user POST')
  })

  router.put('/', (req, res) => {
    res.json('router 1 user PUT')
  })

  router.delete('/', (req, res) => {
    res.json('router 1 user DELETE')
  })

  // router.get('/products', (req, res) => {
  //   res.json({ message: "ok" });
  // })

  // router.get('/carts', (req, res) => {
  //   res.json('router 1 in carts')
  // })

  // router.get('/:id', (req, res) => {
  //   res.json('router 1 user' + req.params.id)
  // })

module.exports = router