const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();


const getEventsCtrl = async (req, res) => {
  
  const branchNumber = req.params.id

    const getBranchEvents = await prisma.agencia.findUnique({
      where:{ numero_ag: branchNumber },
     
      select:{
        numero_ag:true,
        controle:{
          orderBy: {
            createdAt: 'desc'
          },
          select:{
            mac_adress: true,
            data_evt: true,
            hora_evt: true,
            usuario: true,
            comando: true,
            valor: true
          }
        }
      }
    })
    res.send(getBranchEvents)
}

module.exports = getEventsCtrl