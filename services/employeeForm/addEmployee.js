const axios = require('axios');


const addEmployee = (req, res) => {
  const ip = req.params.ip
  const position = req.params.position
  const registration = req.params.registration
  const password = req.params.password

  axios({
    method: 'get',
    url: `http://${ip}/comando?@M${position}:${registration}`
  })
  axios({
    method: 'get',
    url: `http://${ip}/comando?@G${position}:${password}`
  })
  .then(res.send('Senha Cadastrada'))
  .catch(e =>(`Comando para porta falhou!${console.log(e)}`));

};



module.exports = addEmployee