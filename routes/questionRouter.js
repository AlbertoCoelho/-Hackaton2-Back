import { Router } from "express";
import { getQuestionsJavascript } from "../controllers/productsController.js";
import { getQuestionsReact } from "../controllers/productsController.js";
import { getQuestionsMongo } from "../controllers/productsController.js";

const questionRouter = Router();

questionRouter.get("/javascript", getQuestionsJavascript);
questionRouter.get("/react", getQuestionsReact);
questionRouter.get("/react", getQuestionsMongo);


export default questionRouter;