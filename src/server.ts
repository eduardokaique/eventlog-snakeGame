import { serverHttp } from "./app";
const port  = process.env.PORT || 3000;
serverHttp.listen(port, () => console.log(`🚀 Server is run on PORT {port}}`));