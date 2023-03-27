const express = require('express')
const app = express()
const bodyParser = require('body-parser')//tuong tac voi body
const AccountRouter = require('./Router/AccountRouter.js')
const path = require('path')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/View', express.static(path.join(__dirname,'./View')))

app.get('/',(req, res, next)=>{
const loginpath = path.join(__dirname,'./View/Login.html')
res.sendFile(loginpath)
})




// app.use('/admin/api/v1/', router1)  //localhost:3000/api1/
 app.use('/api/v1/account/', AccountRouter)  //localhost:3000/api1/

app.listen(3000,()=>{
    console.log('Server started on port http://localhost:3000')
});