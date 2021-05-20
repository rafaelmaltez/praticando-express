const api = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
const axios = require('axios');

module.exports = async (req, res) => {
  const token = req.headers.authorization;
  
  const regex = /[a-z0-9]/gi;
  const isValidToken = regex.test(token);
  if(!isValidToken || token.length !== 12 || typeof token !== 'string') {
    res.status(403).send('invalid token')
  }
  const bitcoin = await axios.get(api);
  const bitcoinTwo = await bitcoin.json()
  console.log(bitcoin);
  res.status(200).json(bitcoin);
}





