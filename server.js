const express = require('express')
const app = express()
const bodyParser = require('body-parser')//tuong tac voi body
const router1 = require('./ApiRouter.js')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/',(req, res, next)=>{
res.json('HOME')
})

// app.use('/admin/api/v1/', router1)  //localhost:3000/api1/
 app.use('/api/v1/', router1)  //localhost:3000/api1/


app.listen(3000,()=>{
    console.log(`Server started on port`)
});

