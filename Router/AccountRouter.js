const express = require('express')
const router = express.Router()
const AccountModels = require('../Models/Account')

//Lay du lieu tu DB
router.get('/',(req,res, next)=>{
AccountModels.find({})
.then(data=>{
  res.json(data)
})
.catch(err=>{
  res.status(500).json('Co loi xay ra')
})
})


router.get('/:id',(req,res, next)=>{
  AccountModels.findById({
    _id: req.params.id
  })
  .then(data=>{
    if(data != null){
      res.json(data)
    }else{
      res.status(400).json('Tai khoan khong ton tai')
    }  
  })
  .catch(err=>{
    res.status(500).json('Co loi xay ra')
  })
  })



//Them moi du lieu vao DB
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
    res.status(500).json('Tao tai khoan that bai')
  })
  })


//Update du lieu trong DB
router.put('/changepassword/:id',(req,res, next)=>{
  const id = req.params.id
  const newpassword = req.body.newpassword
  AccountModels.findByIdAndUpdate(id,{
    password: newpassword
  })
  .then(data=>{
    res.json('Update thanh cong')
  })
  .catch(err=>{
    res.status(500).json('Co loi xay ra')
  })


})

//xoa du lieu trong DB
router.delete('/:id',(req,res, next)=>{

  AccountModels.deleteOne({
    _id: req.params.id
  })
  .then(data=>{
    res.json('Xoa thanh cong')
  })
  .catch(err=>{
    res.status(500).json('Co loi xay ra')
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

module.exports = router