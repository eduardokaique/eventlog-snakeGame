import "dotenv/config"
import express, { response } from "express";
import http from "http";
import cors from "cors";
import { router } from "./routes";

const app = express();
app.use(cors());

const serverHttp = http.createServer(app);
app.use(express.json());
app.use(router);
export { serverHttp };

const port  = process.env.PORT || 3000;
serverHttp.listen(port, () => console.log("🚀 Server is run on PORT " + port));