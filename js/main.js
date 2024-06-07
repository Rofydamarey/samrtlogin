let signupName = document.getElementById('signupName')
let signupEmail = document.getElementById('signupEmail')
let signupPassword = document.getElementById('signupPassword')
let signinEmail = document.getElementById('signinEmail')
let signinPassword = document.getElementById('signinPassword')
var signupbtn = document.getElementById('signup')
var signinbtn = document.getElementById('signin')
var logoutbtn = document.getElementById('logout')
var userNameWelcome = localStorage.getItem("sessionUserName");
var signupcontainer = []



if (localStorage.getItem('allusers') == null) {
    var signupcontainer = [];
} else {
    signupcontainer = JSON.parse(localStorage.getItem('allusers'))
}

//signup
function isempty() {
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}
function isexist() {
    for (let i = 0; i < signupcontainer.length; i++) {
        if (signupEmail.value == signupcontainer[i].email) {
            return false
        }
    }
}
// signupbtn.addEventListener('click', adduser);
function adduser() {
    if (isempty() == false) {
        document.getElementById('required').innerHTML = ' <span class="text-danger">ALL inputs required</span>'
        return false
    }
    else if (isempty() == true && validateinput(signupName) && validateinput(signupEmail) && validateinput(signupPassword)) {
        if (isexist() == false) {

            document.getElementById('required').innerHTML = '<span class="text-danger m-3">email already exists</span>'
            return true
        }
        document.getElementById('required').innerHTML = ' <span class="text-success ">Sucess</span>'

        var signup = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value,
        }
        signupcontainer.push(signup)

        localStorage.setItem('allusers', JSON.stringify(signupcontainer))
        clearinput()
        console.log(signupcontainer);


    }


}
function clearinput() {
    signupName.value = '';
    signupEmail.value = '';
    signupPassword.value = '';
}


function validateinput(element) {

    var text = element.value;
    var regex = {
        signupName: /^[A-Z][a-z0-9]{2,8}$/i,
        signupEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/img,
        signupPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i
    }
    if (regex[element.id].test(text) == true) {
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')

        return true;
    }
    else {
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')

        return false;
    }

}
