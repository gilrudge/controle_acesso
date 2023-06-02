const axios = require('axios');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { readFile } = require('fs/promises')



const addEvents = async (filtraEventosApagados) =>{

  await prisma.controle_acesso.createMany({
  
            data: filtraEventosApagados
})};

const clearEvents = async (ip) => {
         
  await axios({
    method: 'get',
    url: 'http://192.168.10.150/eventos?@ZZ_'
  })
};

const getDeviceEvents = async (req, res) => {

  var ipList = JSON.parse(await readFile('ipsList.json', 'utf8'))

  ipList.forEach( ip => {

  axios({
    method: 'get',
    url: `http://${ip}:80/eventos?@SZ_`
  })

    .then(apiResponse => {

      const dados = apiResponse.data

      const events = dados.Eventos.map(evento =>({
        data_evt: evento.Data,
        hora_evt: evento.Hora,
        usuario:  evento.Usuário,
        comando:  evento.Comando,
        valor:    evento.Valor,
        end_ip:dados.IP.split(":")[0],
        mac_adress:dados.MAC
      
      } ));

      const newEvents = [...events];      
         
      const finalEvents = newEvents.filter(evento => {
       return (evento.comando !== "Todos Eventos Apagados")
      });

      addEvents(finalEvents);

      clearEvents();    

      console.log("Eventos incluídos no banco!")      

      res.send({
        message: "Eventos criados no banco",
        finalEvents
      })
      }

      

    )

    .catch((e) => { console.log(`Erro ao incluir eventos! ${e.message}`) })

    });
};


module.exports = getDeviceEvents


