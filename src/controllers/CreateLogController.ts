import { AuthenticateUserService } from "@services/AuthenticateUserService";
import { CreateLogService } from "@services/CreateLogService";
import { Request, Response } from  "express";
import { LogModel } from "src/models/LogModel";


class CreateLogController {
    async handle(request: Request, response: Response) {
        const { logTypeNome, socketId, nickName, value } = request.body;

        const service = new CreateLogService();

        const result = await service.execute(new LogModel(socketId, nickName, value), logTypeNome);

        return response.json(result);

    }
}

export { CreateLogController }