const express = require('express')
const app = express()

const router1 = express.Router()
const router2 = express.Router()


app.get('/', (req, res) => {
    res.json('Home')
  })


router1.get('/', (req, res) => {
    res.json('router 1 user')
  })

  router1.get('/products', (req, res) => {
    res.json({ message: "ok" });
  })

  router1.get('/carts', (req, res) => {
    res.json('router 1 in carts')
  })


app.use('/api/v1/', router1)  //localhost:3000/api1/

app.listen(3000,()=>{
    console.log(`Server started on port`)
});



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })