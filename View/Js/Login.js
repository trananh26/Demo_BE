
$(document).ready(function() { // bắt đầu vào trang thì làm gì đó
    alert("Mời đăng nhập ");

})
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


    function Login(){ // $
   
        var username = document.getElementById("User").value;
        var password = document.getElementById("Pass").value;
      
        //console.log("user = " + username + " pass = " + password)

        $.ajax({
          url: "./api/v1/account/login",
          method: "POST",
          data: { UserName: username, PassWord: password }
        })
        .then(response => {
            setCookie('token', response.token, 1)
            console.log(response)
            alert("Đăng nhập thành công");  //hiển thị popup thông báo     
            window.location.href = './Home'; //điều hướng trang                  
          })
          .catch(err => {
            console.log(err.responseJSON)
            alert(err.responseJSON);  //hiển thị popup thông báo 
          })
        };    
