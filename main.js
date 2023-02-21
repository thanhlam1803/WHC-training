
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
    var username = $('#Email').value;
	var password = $('#passWord').value;
    var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var check = true;
    if( username == "" || password == ""){
        alert(" Hãy điền đầy đủ thông tin !");
        check = false;
    }
    if (!email.test(username)) { 
        alert('Hãy nhập đúng định dạng email.\nExample@gmail.com');
        email.focus; 
        check = false;
    }
    if(check){
        alert("Chúc mừng " +username+ " đã đăng nhập thành công!")
    }
 }
