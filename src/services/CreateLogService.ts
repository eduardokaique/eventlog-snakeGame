import { LogModel } from "src/models/LogModel";
import prismaClient from "src/prisma"

class CreateLogService {
    async execute(logModel: LogModel, logTypeNome: string) {

        const logType = await prismaClient.logType.findFirst({
            where: {
                nome: logTypeNome
            }
        });

        logModel.logTypeId = logType.id

        const createdLog = await prismaClient.log.create({
            data: logModel
        });

        

        return createdLog.id;
    }
}

export { CreateLogService }