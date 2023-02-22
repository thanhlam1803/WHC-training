
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});
 function checkValidate(){
    var username = document.getElementById('Email').value;
	var password = document.getElementById('passWord').value;
    var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if( username == "" || password == ""){
        alert(" Hãy điền đầy đủ thông tin !");
        return false;
    }else if(!email.test(username)){
        alert('Hãy nhập đúng định dạng email.\nExample@gmail.com');
    }else {
        alert("Chúc mừng " +username+ " đã đăng nhập thành công!");
    }
}