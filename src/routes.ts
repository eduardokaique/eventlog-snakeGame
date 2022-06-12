import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateLogController } from "@controllers/CreateLogController";
import { Router } from "express";
import { ensureAuthenticate } from "./middleware/ensureAutenticated";


const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/logs", ensureAuthenticate, new CreateLogController().handle);


export { router }
