import prismaClient from "src/prisma"

class GetLogService {
    async execute(logId: string) {

        const log = await prismaClient.log.findFirst({
            where: {
                id: logId
            }
        });

        return log;
    }
}

export { GetLogService }