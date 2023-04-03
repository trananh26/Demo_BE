const axios = require('axios'); 
// $.ajax({
//     url:'localhost:3000/api/v1/account/login',
//     type:'POST'
// })

$(document).ready(function() { // bắt đầu vào trang thì làm gì đó
    alert("Mời đăng nhập ");
    
    $("#btnLogin").click(function() { // $

        var username = $("#User").val();
        var password = $("#Pass").val();
        $.ajax({
          url: "localhost:3000/api/v1/account/login",
          method: "POST",
          data: { username: username, password: password },
          success: function(response) {
            // Xử lý phản hồi thành công từ API ở đây
            alert("Đăng nhập thành công");  //hiển thị popup thông báo 
            console.log(response);
          },
          error: function(xhr, status, error) {
            // Xử lý lỗi từ API ở đây

            console.log(error);
          }
        });





        // var UserName = document.getElementById("User").innerHTML;
        // var PassWord = document.getElementById("Pass").innerHTML;

        // axios.post('./api/v1/account/login', {
        //     UserName: UserName, PassWord: PassWord
        //   })
        //   .then(response => {
        //     console.log(response.data); 
            
        //     if(response.data.id == 1){
        //         window.location.href = './View/Home.html'; //điều hướng trang
        //         alert("Đăng nhập thành công");  //hiển thị popup thông báo               
        //     }
        //     else {
        //         alert("Đăng nhập thất bại");  //hiển thị popup thông báo
        //     };
        // })
        // .catch(err => {
        //     console.log(error);
        // });    
            
    });
        
    

});

