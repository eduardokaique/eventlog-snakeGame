import prismaClient from "src/prisma"

class GetAllLogsService {
    async execute() {

        const logs = await prismaClient.log.findMany();

        return logs;
    }
}

export { GetAllLogsService }