import { PrismaClient } from '@prisma/client';
import { LogTypeModel } from 'src/models/LogTypeModel';
const prisma = new PrismaClient();

async function main() {
    // const logTypes = [
    //     {
    //         nome: 'playerMove',
    //         descricao: 'Evento de movimentação do jogador.'
    //     }
    // ]

    // logTypes.map(async log => {

    //     await prisma.logType.create({
    //         data: { 
    //             nome: log.nome, 
    //             descricao: log.descricao,
    //         },
    //         include: {
    //             logs: true
    //         }
    //     }),
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });