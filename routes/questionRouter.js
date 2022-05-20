import { Router } from "express";
import { getQuestionsJavascript } from "../controllers/productsController.js";
import { getQuestionsReact } from "../controllers/productsController.js";
import { getQuestionsMongo } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/javascript", getQuestionsJavascript);
productsRouter.get("/react", getQuestionsReact);
productsRouter.get("/react", getQuestionsMongo);


export default productsRouter;