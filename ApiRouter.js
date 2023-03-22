const express = require('express')

const router = express.Router()
const AccountModels = require('./Models/Account')

router.post('/register',(req, res, next)=>{
  const UserName = req.body.UserName
  const PassWord = req.body.PassWord
  const Email = req.body.Email
  const Role = req.body.Role
  AccountModels.findOne({
    username: UserName
  })
  .then(data=>{
    if(data){
      res.json('Tai khoan da ton tai')
    }else{
      return AccountModels.create({
        username: UserName,
        password: PassWord,
        email: Email,
        role: Role
      })
    }
  })
  
  .then(data=>{
    res.json(data)
  })
  .catch(err =>{
    res.json('Tao tai khoan that bai')
  })
  })

router.post('/login', (req, res, next) =>{
  
  const UserName = req.body.UserName
  const PassWord = req.body.PassWord

  AccountModels.findOne({
    username: UserName,
    password: PassWord
  })
  .then(data=>{
    if(data){
      res.json(data)
    }else{
      res.status(400).json('Sai ten dang nhap hoac mat khau')
    }
  })
  .catch(err=>{
    res.status(500).json('co loi xay ra')
  })
 
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