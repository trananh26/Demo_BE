
$(document).ready(function() { // bắt đầu vào trang thì làm gì đó
    alert("Mời đăng nhập ");

})
    
    function Login(){ // $
   
        var username = document.getElementById("User").value;
        var password = document.getElementById("Pass").value;
      
        console.log("user = " + username + " pass = " + password)

        $.ajax({
          url: "./api/v1/account/login",
          method: "POST",
          data: { UserName: username, PassWord: password }
        })
        .then(response => {
            console.log(response.data); 
            alert("Đăng nhập thành công");  //hiển thị popup thông báo     
            window.location.href = './Home'; //điều hướng trang                  
          })
          .catch(err => {
            console.log(err.responseJSON)
            alert(err.responseJSON);  //hiển thị popup thông báo 
          })
        };    
