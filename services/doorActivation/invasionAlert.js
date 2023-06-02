const axios = require('axios')

const invasionAlert = (req, res) => {
  const ip = req.params.ip

  axios({
    method: 'get',
    url: `http://${ip}/comando?@WR_:0`
  })
  .then(res.send('Comando enviado'))
  .catch(e =>(`Comando para porta falhou!${console.log(e)}`));

}

module.exports = invasionAlert