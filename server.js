const express = require('express')
const { use } = require('./ApiRouter.js')
const app = express()
const router1 = require('./ApiRouter.js')

const CheckLogin = (req, res, next) => {
  if(dangnhap){
    req.user = user

    next()//=>next sang cua tiep theo
  }
  else{
    res.json('Vui long dang nhap')
  } 
}

const CheckAdmin = (req, res, next) => {
  req.user.role
  next()
 }

app.get('/', CheckLogin,(req, res, next) => {
  res.json('hihi. Dang nhap hoan tat')//=>Tra ra kq va ket thuc
})
  // neu trong next() co tham so thi mac dinh roi vao cua show loi  //   res.json('hihi. Dang nhap hoan tat')//=>Tra ra kq va ket thuc
  // } //middleware dung de check 

 
 app.use((err, req, res, next)=>{
  //logbug
 })

app.use('/admin/api/v1/', CheckLogin, CheckAdmin, router1)  //localhost:3000/api1/
app.use('/api/v1/', router1)  //localhost:3000/api1/


app.listen(3000,()=>{
    console.log(`Server started on port`)
});

