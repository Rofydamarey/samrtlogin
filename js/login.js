//login
function loginisempty() {
    if (signinEmail.value == "" || signinPassword.value == "") {
        return false
    } else {
        return true
    }
}
function login() {

    if (loginisempty() == false) {
        document.getElementById('msg').innerHTML = ' <span class="text-danger">ALL inputs invalid</span>'
    }

    if (loginisempty() == true) {
        for (let i = 0; i < signupcontainer.length; i++) {
            if (signupcontainer[i].email == signinEmail.value && signupcontainer[i].password == signinPassword.value) {
                localStorage.setItem("sessionUserName", signupcontainer[i].name);
                window.location = './home.html'
                clearlogininput()
            }
            else {
                document.getElementById("msg").innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
            }
        }
    }


}

function clearlogininput() {
    signinEmail.value = '';
    signinPassword.value = '';
}