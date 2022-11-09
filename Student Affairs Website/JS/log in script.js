let user = document.querySelector("[name='username']");
let pass = document.querySelector("[name='paswored']");
//alert("Check username and password");
document.forms[0].onsubmit = function (e) {
    let userr = false;
    let passs = false;
    if (user.value !== "" && user.value.length >= 5 && user.value.length <= 10) {
        userr = true;

    }
    if (pass.value !== "" && pass.value.length <= 10 && pass.value.length >= 5) {
        passs = true;
    }
    if (userr === false ) {
        alert("Check username and password");
        e.preventDefault();
    }


}