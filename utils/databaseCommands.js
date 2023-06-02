const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


const descCommands =
[
{COD_COMANDO:"$H11",COMANDO:"$H1",VALOR:"1",DESC_COMANDO:"Habilita porta principal"},
{COD_COMANDO:"$H10",COMANDO:"$H1",VALOR:"0",DESC_COMANDO:"Desabilita porta principal"},
{COD_COMANDO:"$H21",COMANDO:"$H2",VALOR:"1",DESC_COMANDO:"Habilita porta acessibilidade"},
{COD_COMANDO:"$H20",COMANDO:"$H2",VALOR:"0",DESC_COMANDO:"Desabilita porta acessibilidade"},
{COD_COMANDO:"$H31",COMANDO:"$H3",VALOR:"1",DESC_COMANDO:"Habilita porta dos caixas"},
{COD_COMANDO:"$H30",COMANDO:"$H3",VALOR:"0",DESC_COMANDO:"Desabilita porta dos caixas"},
{COD_COMANDO:"$H41",COMANDO:"$H4",VALOR:"1",DESC_COMANDO:"Habilita porta de aço"},
{COD_COMANDO:"$H40",COMANDO:"$H4",VALOR:"0",DESC_COMANDO:"Desabilita porta de aço"},
{COD_COMANDO:"$HF1",COMANDO:"$HF",VALOR:"1",DESC_COMANDO:"Habilita reconhecimento facial"},
{COD_COMANDO:"$HF0",COMANDO:"$HF",VALOR:"0",DESC_COMANDO:"Desabilita reconhecimento facial"},
{COD_COMANDO:"$WR0",COMANDO:"$WR",VALOR:"0",DESC_COMANDO:"Aviso de coerção desativado"},
{COD_COMANDO:"$WR10",COMANDO:"$WR",VALOR:"10",DESC_COMANDO:"Coerção porta principal"},
{COD_COMANDO:"$WR20",COMANDO:"$WR",VALOR:"20",DESC_COMANDO:"Coerção porta acessibilidade"},
{COD_COMANDO:"$WR30",COMANDO:"$WR",VALOR:"30",DESC_COMANDO:"Coerção porta dos caixas"},
{COD_COMANDO:"$WR40",COMANDO:"$WR",VALOR:"40",DESC_COMANDO:"Coerção porta de aço"},
{COD_COMANDO:"$P1",COMANDO:"$P1",VALOR:"1",DESC_COMANDO:"Abre porta principal"},
{COD_COMANDO:"$P2",COMANDO:"$P2",VALOR:"2",DESC_COMANDO:"Abre porta acessibilidade"},
{COD_COMANDO:"$P3",COMANDO:"$P3",VALOR:"3",DESC_COMANDO:"Abre porta dos caixas"},
{COD_COMANDO:"$P4",COMANDO:"$P4",VALOR:"4",DESC_COMANDO:"Abre porta de aço"},
{COD_COMANDO:"$P5",COMANDO:"$P5",VALOR:"5",DESC_COMANDO:"Para porta de aço"},
{COD_COMANDO:"$P6",COMANDO:"$P6",VALOR:"6",DESC_COMANDO:"Fecha porta de aço"},
{COD_COMANDO:"$ZZ",COMANDO:"$ZZ",VALOR:"1",DESC_COMANDO:"Limpa eventos"},
{COD_COMANDO:"$SZ",COMANDO:"$SZ",VALOR:"1",DESC_COMANDO:"Mostra todos os eventos"},
{COD_COMANDO:"$NA",COMANDO:"$NA",VALOR:"novo numero de agencia",DESC_COMANDO:"Altera numero de agencia"},
{COD_COMANDO:"$G1",COMANDO:"$G1",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 1"},
{COD_COMANDO:"$G2",COMANDO:"$G2",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 2"},
{COD_COMANDO:"$G3",COMANDO:"$G3",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 3"},
{COD_COMANDO:"$G4",COMANDO:"$G4",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 4"},
{COD_COMANDO:"$G5",COMANDO:"$G5",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 5"},
{COD_COMANDO:"$G6",COMANDO:"$G6",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 6"},
{COD_COMANDO:"$G7",COMANDO:"$G7",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 7"},
{COD_COMANDO:"$G8",COMANDO:"$G8",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 8"},
{COD_COMANDO:"$G9",COMANDO:"$G9",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 9"},
{COD_COMANDO:"$G10",COMANDO:"$G10",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 10"},
{COD_COMANDO:"$G11",COMANDO:"$G11",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 11"},
{COD_COMANDO:"$G12",COMANDO:"$G12",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 12"},
{COD_COMANDO:"$G13",COMANDO:"$G13",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 13"},
{COD_COMANDO:"$G14",COMANDO:"$G14",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 14"},
{COD_COMANDO:"$G15",COMANDO:"$G15",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 15"},
{COD_COMANDO:"$G16",COMANDO:"$G16",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 16"},
{COD_COMANDO:"$G17",COMANDO:"$G17",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 17"},
{COD_COMANDO:"$G18",COMANDO:"$G18",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 18"},
{COD_COMANDO:"$G19",COMANDO:"$G19",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 19"},
{COD_COMANDO:"$G20",COMANDO:"$G20",VALOR:"nova senha",DESC_COMANDO:"Altera senha gerente 20"},
{COD_COMANDO:"$AA",COMANDO:"$AA",VALOR:"novo horario",DESC_COMANDO:"Horário abertura porta de aço"},
{COD_COMANDO:"$AF",COMANDO:"$AF",VALOR:"novo horario",DESC_COMANDO:"Horário fechamento porta de aço"},
{COD_COMANDO:"$CA",COMANDO:"$CA",VALOR:"novo horario",DESC_COMANDO:"Horário abertura porta dos caixas"},
{COD_COMANDO:"$CF",COMANDO:"$CF",VALOR:"novo horario",DESC_COMANDO:"Horário fechamento porta dos caixas"},
{COD_COMANDO:"$PF",COMANDO:"$PF",VALOR:"número porta",DESC_COMANDO:"Ativar porta reconhecimento facial"}
];

const fillCommandsDesc = async (descCommands) => {

  const databaseCommands = await descCommands.map(item => ({
    cod_comando:item.COD_COMANDO,
    desc_comando: item.DESC_COMANDO
  }));

  async function main(){
    await prisma.Descricao_comando.createMany({
      data: databaseCommands
    })
  }
  
  main()
          .then(async () => {
            await prisma.$disconnect()
          })
          .catch(async (e) => {
            console.log(e)
            prisma.$disconnect
            process.exit(1)
          })
}


fillCommandsDesc(descCommands)