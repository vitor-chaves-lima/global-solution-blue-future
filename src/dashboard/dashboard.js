const buttonSignOut = document.querySelector("#btn-signout");

buttonSignOut.addEventListener("click", () => {
    localStorage.setItem("signedBool", false);
    return location.assign("../login/login.html");
});
