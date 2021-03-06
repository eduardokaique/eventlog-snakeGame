import axios from "axios";
import prismaClient from "src/prisma";
import { sign } from "jsonwebtoken"

interface IAccessTokenResponse {
    access_token: string
}

interface IUserResponse {
    avatar_url: string,
    login: string,
    id: number,
    name: string
}

class AuthenticateUserService {
    async execute(code: string) {
        // const url = "https://github.com/login/oauth/access_token"

        // const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
        //     params: {
        //         client_id: process.env.GITHUB_CLIENT_ID,
        //         client_secret: process.env.GITHUB_CLIENT_SECRET,
        //         code
        //     },
        //     headers: {
        //         "Accept":"application/json"
        //     }
        // });

        // const response = await axios.get<IUserResponse>("https://api.github.com/user", {
        //     headers: {
        //         authorization: `Bearer ${accessTokenResponse.access_token}`
        //     }
        // });

        // const { login, id, avatar_url, name } = response.data

        if (code == '1234') {

            const token = sign({
                user: {
                    id: '1',
                    name: 'USUARIO_TESTE'
                }
            },
                process.env.JWT_SECRET,
                {
                    subject: '1',
                    expiresIn: "1d"
                }
            )

            return { token };
        }

        throw new Error('unauthorized');
    }
}

export { AuthenticateUserService }