const axios = require('axios')




const facialRec = (req, res) => {

  const ip = req.params.ip
  const port = req.params.port

  axios({
    method: 'get',
    url: `http://${ip}/comando?@PF_:${port}`
  })
  .then(res.send('Comando enviado'))
  .catch(e =>(`Comando para porta falhou!${console.log(e)}`));

}

module.exports = facialRec