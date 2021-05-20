// Objetivo: Receber uma requisição que envie email/senha e receba um token como resposta. O formato desse token deve ser uma string aleatória com 12 caracteres. O email recebido deve ter o formato email@mail.com e a senha deve conter no mínimo 4 caracteres e no máximo 8, todos números. Caso algum desses campos seja enviado em formato incorreto, deve-se retornar uma mensagem de erro email or password is incorrect. e seu devido status code.

const express = require('express');
const { loginMiddleware, priceMiddleware } = require('./middlewares');
const app = express();
const PORT = 8080;
app.use(express.json());

app.post('/login', loginMiddleware)

app.get('/btc/price', priceMiddleware);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));