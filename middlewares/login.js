// Objetivo: Receber uma requisição que envie email/senha e receba um token como resposta. O formato desse token deve ser uma string aleatória com 12 caracteres. O email recebido deve ter o formato email@mail.com e a senha deve conter no mínimo 4 caracteres e no máximo 8, todos números. Caso algum desses campos seja enviado em formato incorreto, deve-se retornar uma mensagem de erro email or password is incorrect. e seu devido status code.
const crypto = require('crypto');

module.exports = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const re = /.+@[A-z]+[.]com/;
  const isValidEmail = re.test(email);
  console.log(req.body);
  if (!isValidEmail || typeof password !== "number" || password.toString().length < 4 || password.toString().length > 8) {
    return res.status(401).json({ "message": "email or password is incorrect" })
  }
  res.status(200).json({
    "token": crypto.randomBytes(6).toString('hex'),
  })
}