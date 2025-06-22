const msg = document.getElementById("message");
const mail = document.getElementById("mail");


function checkmailValidity(event){
    event.preventDefault();
}

function login() { 
    if (mail.checkValidity() && mail.value !== "") {
        fetch('LoginPage.php?action=checkEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'email=' + encodeURIComponent(mail.value)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data) {
                successMsg();
            } else {
                failedLoginMsg();
            }
        });
    } else {   
        invalidEmailMsg();
    }
}

function signUp() {
    if (mail.checkValidity() && mail.value !== "") {
        fetch('LoginPage.php?action=addUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'email=' + encodeURIComponent(mail.value)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data) {
                successMsg();
            } else {
                failedSignUpMsg();
            }
        });
    } else {   
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

function gotoUserPage(user){
    
}