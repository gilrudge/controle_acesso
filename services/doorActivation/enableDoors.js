const axios = require('axios')




const enableDoors = (req, res) => {

  const ip = req.params.ip
  const port = req.params.port
  const enable = req.params.enable

  axios({
    method: 'get',
    url: `http://${ip}/comando?@H${port}_:${enable}`
  })
  .then(res.send('Comando enviado'))
  .catch(e =>(`Comando para porta falhou!${console.log(e)}`));

}

module.exports = enableDoors