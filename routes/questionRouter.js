import { Router } from "express";
import { getQuestionsJavascript } from "../controllers/questionController.js";
import { getQuestionsReact } from "../controllers/questionController.js";
import { getQuestionsMongo } from "../controllers/questionController.js";

const questionRouter = Router();

questionRouter.get("/javascript", getQuestionsJavascript);
questionRouter.get("/react", getQuestionsReact);
questionRouter.get("/react", getQuestionsMongo);


export default questionRouter;