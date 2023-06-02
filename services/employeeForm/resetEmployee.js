const axios = require('axios');

const resetEmployee = (req, res) => {

  const ip = req.params.ip
  const position = req.params.position
  

  axios({
    method: 'get',
    url: `http://${ip}/comando?@M${position}:0`
  })
  axios({
    method: 'get',
    url: `http://${ip}/comando?@G${position}:0`
  })
  .then(res.send('Senha Resetada'))
  .catch(e =>(`Comando para porta falhou!${console.log(e)}`));

};

module.exports = resetEmployee