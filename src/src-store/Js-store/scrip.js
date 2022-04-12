function checkEmail(){
    let email = $('#txtEmail').val()
    let EmailRegex = /\S+@\S+.\S+/
    if (EmailRegex.test(email)){
        return true
    }
    return false
}
$("#btnRegister").click(function(e){
    e.preventDefault();
    if(checkEmail()){
        $("#statusOfEmail").text('Email của bạn chuẩn xác.Vui lòng kiểm tra hòm thư của bạn')
        $("#statusOfEmail").css('color','#5BC750')
        $(".status").css('background','#f1f1f1')

    }else{
        $("#statusOfEmail").text('Bạn cần điền đúng thông tin được yêu cầu')
        $("#statusOfEmail").css('color','red')
        $(".status").css('background','#f1f1f1')

    }})
