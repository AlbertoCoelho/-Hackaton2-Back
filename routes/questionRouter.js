import { Router } from "express";
import { getQuestionsJavascript } from "../controllers/questionController.js";
import { getQuestionsReact } from "../controllers/questionController.js";
import { getQuestionsMongo } from "../controllers/questionController.js";

const productsRouter = Router();

productsRouter.get("/javascript", getQuestionsJavascript);
productsRouter.get("/react", getQuestionsReact);
productsRouter.get("/react", getQuestionsMongo);

export default productsRouter;
