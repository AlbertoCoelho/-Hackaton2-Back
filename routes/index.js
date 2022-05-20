import { Router } from "express";
import gamesRouter from "./gamesRouter.js";
import questionRouter from "./questionRouter.js";

const router = Router();

router.use(gamesRouter);
router.use(questionRouter);

export default router;
