const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path'); // Adicionar para manipulação de caminhos
const app = express();

// Middleware para servir arquivos estáticos (como HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Simulação de um banco de dados (em memória)
const usuariosDB = [];

const SECRET_KEY = 'meu-segredo'; // A chave secreta para gerar o JWT

// Rota de cadastro
app.post('/api/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;

    // Verificando se o usuário já existe
    const usuarioExistente = usuariosDB.find(u => u.email === email);
    if (usuarioExistente) {
        return res.status(400).json({ message: 'Usuário já existe!' });
    }

    // Criptografando a senha
    const senhaCriptografada = bcrypt.hashSync(senha, 8);

    // Adicionando o novo usuário
    const novoUsuario = { nome, email, senha: senhaCriptografada };
    usuariosDB.push(novoUsuario);

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
});

// Rota de login
app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;

    // Verificando se o usuário existe
    const usuario = usuariosDB.find(u => u.email === email);
    if (!usuario) {
        return res.status(400).json({ message: 'Usuário não encontrado!' });
    }

    // Verificando a senha
    const senhaValida = bcrypt.compareSync(senha, usuario.senha);
    if (!senhaValida) {
        return res.status(400).json({ message: 'Senha incorreta!' });
    }

    // Gerando token JWT
    const token = jwt.sign({ email: usuario.email, nome: usuario.nome }, SECRET_KEY, { expiresIn: '1h' });

    return res.status(200).json({ message: 'Login bem-sucedido!', token });
});

// Rota inicial
app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

// Iniciando o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
