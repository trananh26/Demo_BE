// mã hóa và dịch mã token
// token = header.payload.signnature
// data + screct (sign) => token
// token + screct (verify) => data
var jwt = require('jsonwebtoken')
// đồng bộ(sync)
var data = {username: "tuananhnd.tran"}
// var token = jwt.sign(data, "123123")
// console.log(token)

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InR1YW5hbmhuZC50cmFuIiwiaWF0IjoxNjgxMjA0Mzk0fQ.Lx3SuAP-jfXxCF-r-vLyAZsnoP6ScIES0cPyEeTWR0Q"
var kq = jwt.verify(token, "123123")
//console.log(kq)


//bất đồng bộ (async): có call back (in vòng ngoài trước)
// jwt.sign(data,"123123",{
//     expiresIn: 120   // thời gian hết hạn token
// },function(err,data){
//     console.log("data:",data)
// });

console.log("outside")
var token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InR1YW5hbmhuZC50cmFuIiwiaWF0IjoxNjgxMjA1NDEzLCJleHAiOjE2ODEyMDU1MzN9.ElsA4NoQxt0DBInkxni_ogJ8MhG4khe9CGNcrVvQDgM"
var kq1 = jwt.verify(token1, "123123")
console.log(kq1)