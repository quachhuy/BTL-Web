$(document).ready(function(){
    $('.eye-icon').click(function(){
        $(this).toggleClass('appear')
        $(this).children('i').toggleClass('fa-eye-slash fa-eye')
        if ($(this).hasClass('appear')){
            $(this).prev().attr('type','text')
        }else{
            $(this).prev().attr('type','password')
        }
    })
    
});
$('.form-submit').click(function(e){
    e.preventDefault()
    var username = $("#username").val(),
        password = $("#password").val();
    if(username == '' || password == ''){
        swal({
            title: "Bạn chưa nhập tên đăng nhập hoặc mật khẩu!",
            text: "Xin mời nhập lại",
            icon: "error",
            button: "OK",
          });
    }
    else{
        swal({
            title: "Bạn đăng nhập thành công!",
            icon: "success",
            button: "OK",
          });
    }
})