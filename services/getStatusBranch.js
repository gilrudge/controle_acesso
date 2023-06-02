const axios = require('axios');


const getStatusBranch = async(req, res) => {
  
  const ip = req.params.ip

  await axios({
    method: 'get',
    url: `http://${ip}/status`
    // url: `http://192.168.10.150/status`
  })
  .then(response => res.send(response.data))
  .catch(e => res.send(false))

}

module.exports = getStatusBranch