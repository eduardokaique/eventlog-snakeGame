import { AuthenticateUserService } from "@services/AuthenticateUserService";
import { Request, Response } from  "express";


class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { code } = request.body;

        const service = new AuthenticateUserService();
        try {
            const result = await service.execute(code);
            return response.json(result);
        } catch (err) {
            console.log(err);
            if(err.message == 'unauthorized')
                return response.status(401).json({
                    errorCode: err.message
                });

            return response.json({ error: err.message });
        }

    }
}

export { AuthenticateUserController }