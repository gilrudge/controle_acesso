const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


const getAllBranchesCtrl = async (req, res) => {
  
    const getBranches = await prisma.agencia.findMany();
    res.send(getBranches);
}

module.exports = getAllBranchesCtrl


