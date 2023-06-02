const axios = require('axios');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { readFile } = require('fs/promises');


const updateStatus = async (status) => {
  
  const branchStatus = {
    "M00": status["@M00"],
    "M01": status["@M01"],
    "M02": status["@M02"],
    "M03": status["@M03"],
    "M04": status["@M04"],
    "M05": status["@M05"],
    "M06": status["@M06"],
    "M07": status["@M07"],
    "M08": status["@M08"],
    "M09": status["@M09"],
    "M10": status["@M10"],
    "M11": status["@M11"],
    "M12": status["@M12"],
    "M13": status["@M13"],
    "M14": status["@M14"],
    "M15": status["@M15"],
    "M16": status["@M16"],
    "M17": status["@M17"],
    "M18": status["@M18"],
    "M19": status["@M19"],
    "M20": status["@M20"],
    "M21": status["@M21"],
    "G00": status["@G00"],
    "G21": status["@G21"],
    "AA_": status["@AA_"],
    "AF_": status["@AF_"],
    "CA_": status["@CA_"],
    "CF_": status["@CF_"],
    "H1_": status["@H1_"],
    "S1_": status["@S1_"],
    "H2_": status["@H2_"],
    "S2_": status["@S2_"],
    "H3_": status["@H3_"],
    "S3_": status["@S3_"],
    "H4_": status["@H4_"],
    "S4_": status["@S4_"],
    "HF_": status["@HF_"],
    "PF_": status["@PF_"],
    "PS_": status["@PS_"],
    "WR_": status["@WR_"]
  }

  try {
    await prisma.StatusAgencia.update({
      where:{
        NA_: status['@NA_'].toString()
      },
      data:branchStatus      
    })
    console.log(`Update de status da agencia ${status['@NA_']} salvos no banco.`)
  }
  catch (error) {
    console.log(`Erro na atualização do status no banco de dados da agência ${status['@NA_']} - ${error}`)
  }
}

const getDeviceStatus = async (_req, res) => {

  var ipList = JSON.parse(await readFile('ipsList.json', 'utf8'));

  ipList.forEach(async ip => {
  
  await axios({
    method: 'get',
    url: `http://${ip}/status`
  })

  .then(apiResponse => {
    const dados = apiResponse.data
    const { status } = dados
    // console.log(dados)
    updateStatus(status)
    res.send(`Update da Agencia ${status["@NA_"]} incluído no banco de dados`)
  })
  
  // .catch((e) => res.send(e))
  .catch((e) => console.log(`Erro ao atualizar status! ${e.message}`))
});

}

module.exports = getDeviceStatus


