import { GetAllLogsService } from "@services/GetAllLogsService";
import { Request, Response } from  "express";


class GetAllLogsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllLogsService();

        const result = await service.execute();

        return response.json(result);

    }
}

export { GetAllLogsController }