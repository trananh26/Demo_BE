const express = require('express')
const app = express()
const bodyParser = require('body-parser')//tuong tac voi body
const AccountRouter = require('./Router/AccountRouter.js')
const path = require('path')
const jwt = require('jsonwebtoken')
var cors = require('cors')
var cookieParser = require('cookie-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())


// CORS middleware cho phép các client khác có thể kết nối
const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
  };

// gọi đường dẫn private
app.use('/View', express.static(path.join(__dirname,'./View')))

app.get('/',(req, res, next)=>{
const loginpath = path.join(__dirname,'./View/ViewPage/Login.html')
res.sendFile(loginpath)
})

app.get('/private',(req, res, next)=>{
try {
    var token = req.cookies.token
    var result = jwt.verify(token, 'password')
    if(result){
        next()
    }
} catch (error) {
    return redirect('/')
}
}, (req, res, next)=>{
    res.json('ahihi')
})

app.get('/Home',(req, res, next)=>{
    const loginpath = path.join(__dirname,'./View/ViewPage/Home.html')
    res.sendFile(loginpath)
    })


// app.use('/admin/api/v1/', router1)  //localhost:3000/api1/
 app.use('/api/v1/account/', AccountRouter)  //localhost:3000/api1/

app.listen(3000,()=>{
    console.log('Server started on port http://localhost:3000')
});