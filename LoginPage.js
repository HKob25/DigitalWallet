const msg = document.getElementById("message");
const mail = document.getElementById("mail");

function login() {
    if (mail.checkValidity() && mail.value != "")
    {
        failedLoginMsg();
    }else
    {   
        invalidEmailMsg();
    }
}

function signUp() {
    if (mail.checkValidity() && mail.value != "")
    {
        failedSignUpMsg();
    }else
    {   
        invalidEmailMsg();
    }
}

function successMsg(){
        msg.style.display = "block";
        msg.innerText = "Successful";
        msg.style.color = "green";
}
function failedLoginMsg(){
    msg.style.display = "block";
    msg.innerText = "User Does Not Exist";
    msg.style.color = "red";
}
function failedSignUpMsg(){
    msg.style.display = "block";
    msg.innerText = "User Already Exists";
    msg.style.color = "red";
}
function invalidEmailMsg(){
    msg.style.display = "block";
        msg.innerText = "Invalid Email";
        msg.style.color = "red";
}