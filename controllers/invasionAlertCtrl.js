const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


const invasionAlertCtrl = async (req, res) => {
  
  try {

    const status = await prisma.agencia.findMany({
      select:{
        end_ip: true,
        status: true
      }
    })

    const alertStatus = status.map(item => {      
      return {
        end_ip: item.end_ip,
        agencia: item.status[0].NA_,
        coercao: item.status[0].WR_        
      }
    });

    res.send(alertStatus);    
    
  } catch (error) {
    console.log(`Falha de conexão invasionAlertCtrl = ${error}`)
  }
}

module.exports = invasionAlertCtrl