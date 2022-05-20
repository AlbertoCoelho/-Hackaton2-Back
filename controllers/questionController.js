import db from "../db.js";

export async function getQuestionsJavascript(req, res) {
  try {
    const questions = await db.collection("JavaScript").find({});
    res.send(questions);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getQuestionsReact(req, res) {
  try {
    const questions = await db.collection("React").find({});
    res.send(questions);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getQuestionsMongo(req, res) {
  try {
    const questions = await db.collection("MongoDB").find({});
    res.send(questions);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
