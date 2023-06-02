const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();


const getOneBranchCtrl = async (req, res) => {

  const getOneBranch = req.params.id;
  // const getDate = req.query.date
  
  
    const getBranch = await prisma.agencia.findUnique({
      where: { 
        numero_ag: getOneBranch,        
      },
      
      select:{  
        nome_banco: true,
        numero_ag: true,
        nome_ag: true,
        end_ip: true,
        porta: true,        
        masc_rede: true,
        end_dns: true,
        gateway: true,
        ipfixo_dhcp: true,
        mac_adress: true,
        status: true
      },
    
    })
    
    
    try {

      res.send(getBranch);

    } catch (error) {
      console.log(`Consulta ao banco de dados não concluída devido ao erro ${error}`)
    }  
}

module.exports = getOneBranchCtrl


