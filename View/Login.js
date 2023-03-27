const axios = require('axios'); 

$(document).ready(function() { // bắt đầu vào trang thì làm gì đó
    alert("Mời đăng nhập ");
    
    $("#btnLogin").click(function() { // $
        const UserName = document.getElementById("User").innerHTML;
        const PassWord = document.getElementById("Pass").innerHTML;

        axios.post('./api/v1/account/login', {
            UserName: UserName, PassWord: PassWord
          })
          .then(response => {
            console.log(response.data); 
            
            if(response.data.id == 1){
                window.location.href = './View/Home.html'; //điều hướng trang
                alert("Đăng nhập thành công");  //hiển thị popup thông báo               
            }
            else {
                alert("Đăng nhập thất bại");  //hiển thị popup thông báo
            };
        })
        .catch(err => {
            console.log(error);
        });    
            
    });
        
    

});

