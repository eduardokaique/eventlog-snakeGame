import { GetLogService } from "@services/GetLogService";
import { Request, Response } from  "express";


class GetLogController {
    async handle(request: Request, response: Response) {
        const { logId } = request.params;

        const service = new GetLogService();

        const result = await service.execute(logId);

        return response.json(result);

    }
}

export { GetLogController }