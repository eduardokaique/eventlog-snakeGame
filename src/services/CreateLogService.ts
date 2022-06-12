import { LogModel } from "src/models/LogModel";
import prismaClient from "src/prisma"

class CreateLogService {
    async execute(logModel: LogModel, logTypeNome: string) {

        const logType = await prismaClient.logType.findFirst({
            where: {
                nome: logTypeNome
            }
        });

        if(logType != null)
            logModel.logTypeId = logType.id
        else
        {
            const createdLogType = await prismaClient.logType.create({
                data: {
                    nome: logTypeNome,
                    descricao: logTypeNome
                }
            });

            logModel.logTypeId = createdLogType.id
        }

        const createdLog = await prismaClient.log.create({
            data: logModel
        });

        

        return createdLog.id;
    }
}

export { CreateLogService }