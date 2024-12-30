// Toggle from Login to register
const login = document.querySelector(".auth-form-login");
const register = document.querySelector(".auth-form-register");
const btnLogin = document.querySelector(".btn-login");
const btnRegister = document.querySelector(".btn-register");

function toggleLogin() {
    // e.preventDefault()
    register.style.display = "none";

    btnLogin.addEventListener("click", () => {
        login.style.display = "none";
        if (register.style.display === "none") {
            register.style.display = "flex";
        }
    });

    btnRegister.addEventListener("click", () => {
        register.style.display = "none";
        if (login.style.display === "none") {
            login.style.display = "flex";
        }
    });
};
toggleLogin();
