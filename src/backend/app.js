const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

// Criar a aplicação Express
const app = express();

// Usar o body-parser para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Definir o motor de visualização (EJS)
app.set('view engine', 'ejs');

// Servir arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Função para carregar os usuários do arquivo users.json
const loadUsers = () => {
  const data = fs.readFileSync('/config/users.json');  // Lê o arquivo users.json
  return JSON.parse(data);  // Converte o JSON em um array de objetos
};

// Função para salvar os usuários no arquivo users.json
const saveUsers = (users) => {
  fs.writeFileSync('/config/users.json', JSON.stringify(users, null, 2));  // Escreve o array de usuários de volta no arquivo
};

// Rota para mostrar o formulário de login
app.get('/public/master.html', (req, res) => {
  res.render('login');
});

// Rota para mostrar o formulário de cadastro
app.get('/public/master.html', (req, res) => {
  res.render('cadastro');
});

// Rota para processar o cadastro
app.post('/index.html', (req, res) => {
  const { registerEmail, registerPassword } = req.body;

  // Carregar os usuários existentes do arquivo
  const users = loadUsers();

  // Verificar se o nome de usuário já existe
  const userExists = users.find(user => user.registerEmail === registerEmail);
  
  if (userExists) {
    return res.send('Nome de usuário já existe!');
  }

  // Criptografar a senha
  bcrypt.hash(registerPassword, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).send('Erro ao criptografar a senha');
    }

    // Adicionar o novo usuário
    users.push({ registerEmail, registerPassword: hashedPassword });
    saveUsers(users);  // Salva o novo array de usuários no arquivo
    res.send('Cadastro realizado com sucesso!');
  });
});

// Rota para processar o login
app.post('/index.html', (req, res) => {
  const { loginEmail, loginPassword } = req.body;

  // Carregar os usuários do arquivo
  const users = loadUsers();

  // Verificar se o usuário existe
  const user = users.find(user => user.loginEmail === loginEmail);
  
  if (!user) {
    return res.send('Usuário não encontrado!');
  }

  // Comparar a senha fornecida com a senha armazenada (criptografada)
  bcrypt.compare(loginPassword, user.loginPassword, (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao verificar a senha');
    }
    
    if (result) {
      res.send('Login bem-sucedido!');
    } else {
      res.send('Senha incorreta!');
    }
  });
});

// Definir a porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
