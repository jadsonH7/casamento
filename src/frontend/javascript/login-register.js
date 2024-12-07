// Validação de Login
function validateLogin() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    let emailError = document.getElementById('login-email-error');
    let passwordError = document.getElementById('login-password-error');
    let valid = true;

    // Resetando mensagens de erro
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validação de email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        valid = false;
    }

    // Validação de senha
    if (password.length < 6) {
        passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        valid = false;
    }

    return valid;
}

// Validação de Cadastro
function validateSignup() {
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    let confirmPassword = document.getElementById('signup-confirm-password').value;
    let nameError = document.getElementById('signup-name-error');
    let emailError = document.getElementById('signup-email-error');
    let passwordError = document.getElementById('signup-password-error');
    let confirmPasswordError = document.getElementById('signup-confirm-password-error');
    let valid = true;

    // Resetando mensagens de erro
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Validação de nome
    if (name.trim() === '') {
        nameError.textContent = 'O nome é obrigatório.';
        valid = false;
    }

    // Validação de e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        valid = false;
    }

    // Validação de senha
    if (password.length < 6) {
        passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        valid = false;
    }

    // Confirmação de senha
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'As senhas não coincidem.';
        valid = false;
    }

    return valid;
}

// Troca entre formulários
document.getElementById('login-toggle').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-toggle').classList.add('active');
    document.getElementById('signup-toggle').classList.remove('active');
});

document.getElementById('signup-toggle').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-toggle').classList.add('active');
    document.getElementById('login-toggle').classList.remove('active');
});

// Exibir o formulário de login inicialmente
document.getElementById('login-form').style.display = 'block';
document.getElementById('signup-form').style.display = 'none';