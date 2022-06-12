import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateLogController } from "@controllers/CreateLogController";
import { GetAllLogsController } from "@controllers/GetAllLogsController";
import { GetLogController } from "@controllers/GetLogController";
import { Router } from "express";
import { ensureAuthenticate } from "./middleware/ensureAutenticated";


const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/logs", ensureAuthenticate, new CreateLogController().handle);
router.get("/logs", ensureAuthenticate, new GetAllLogsController().handle);
router.get("/log", ensureAuthenticate, new GetLogController().handle);


export { router }
