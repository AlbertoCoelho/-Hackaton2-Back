import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";

import router from "./routes/index.js";

const server = express();
server.use(json());
server.use(cors());

server.use(router);

server.listen(process.env.PORT || 5000, () => {
  console.log(chalk.bold.green(`Listening on ${process.env.PORT}`));
});
