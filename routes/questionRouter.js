import { Router } from "express";
import { getQuestionsJavascript } from "../controllers/questionController.js";
import { getQuestionsReact } from "../controllers/questionController.js";
import { getQuestionsMongo } from "../controllers/questionController.js";

const productsRouter = Router();

questionRouter.get("/javascript", getQuestionsJavascript);
questionRouter.get("/react", getQuestionsReact);
questionRouter.get("/mongodb", getQuestionsMongo);

export default productsRouter;
