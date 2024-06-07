var userNameWelcome = localStorage.getItem("sessionUserName");
if (userNameWelcome) {
    document.getElementById("username").innerHTML = userNameWelcome;
}
function logout() {
    window.location.replace("index.html")

}