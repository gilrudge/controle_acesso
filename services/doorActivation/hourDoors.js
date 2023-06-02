const axios = require('axios')




const hourDoors = (req, res) => {

  const ip = req.params.ip
  const command = req.params.command
  const hour = req.params.hour

  axios({
    method: 'get',
    url: `http://${ip}/comando?@${command}_:${hour}`
  })
  .then(res.send('Comando enviado'))
  .catch(e =>(`Comando para porta falhou!${console.log(e)}`));

}

module.exports = hourDoors