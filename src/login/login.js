const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const buttonSubmit = document.querySelector("#btn-submit");

buttonSubmit.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "teste@gmail.com" && password === "pass123") {
    localStorage.setItem("signedBool", true);
    alert(
      "Login concluído com sucesso! Redirecionando usuário para a página de dashboard..."
    );
    return location.assign("../dashboard/index.html");
  } else {
    alert("Dados inseridos estão incorretos...");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("signedBool") == "true") {
    alert(
      "Usuário já logado na plataforma! Redirecionando para a página de dashboard..."
    );
    return window.location.assign("../dashboard/index.html");
  }
});
