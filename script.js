let eyes = document.getElementById('eyes');
let password = document.getElementById('password');

eyes.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyes.src = "view.png";
    }
    else {
        password.type = "password";
        eyes.src = "hide.png";
    }
}