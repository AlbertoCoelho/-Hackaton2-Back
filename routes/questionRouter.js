import { Router } from "express";
import { getQuestionsJavascript } from "../controllers/questionController.js";
import { getQuestionsReact } from "../controllers/questionController.js";
import { getQuestionsMongo } from "../controllers/questionController.js";

const productsRouter = Router();

<<<<<<< HEAD
productsRouter.get("/javascript", getQuestionsJavascript);
productsRouter.get("/react", getQuestionsReact);
productsRouter.get("/react", getQuestionsMongo);
=======
questionRouter.get("/javascript", getQuestionsJavascript);
questionRouter.get("/react", getQuestionsReact);
questionRouter.get("/mongodb", getQuestionsMongo);
>>>>>>> 5460e9f00eb868ab53e4f6a50b48f36603a9b787

export default productsRouter;
