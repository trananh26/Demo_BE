const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const AccountModels = require('../Models/Account')
const PAGE_SIZE = 5
//Lay tat ca du lieu tu DB
router.get('/user',(req,res, next)=>{

  var page = req.query.page;
  if(page){
    // lấy theo page
    page = parseInt(page)
    if(page <1){
      page = 1
    }
    var skip = (page - 1) * PAGE_SIZE

    AccountModels.find({ })
    .skip(skip)
    .limit(PAGE_SIZE)
    .then(data=>{
      
      AccountModels.countDocuments({}).then((total)=>{
        var pagetotal = Math.ceil(total / PAGE_SIZE) //làm tròn lên

        res.json({
          total:total,
          totalpage: pagetotal,
          data: data
        });
      })
      
    })
    .catch(err=>{
      res.status(500).json('Co loi xay ra')
    })

  }else{
    AccountModels.find({

    })
    .then(data=>{
      res.json(data)
    })
    .catch(err=>{
      res.status(500).json('Co loi xay ra')
    })
  }
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
      console.log(UserName, PassWord, Email, Role)
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
      var token = jwt.sign({_id: data._id},'password')
      // ,{
      //   expiresIn: 120   // thời gian hết hạn token
      // },function(err,data){
      //     console.log("data:",data)
      // })    
      res.json({
        message: 'Successful',
        token: token
      })
    }else{
      res.status(400).json('Sai tên đăng nhập hoặc mật khẩu')
    }
  })
  .catch(err=>{
    res.status(500).json('Có lỗi xảy ra')
  })
 
})



module.exports = router