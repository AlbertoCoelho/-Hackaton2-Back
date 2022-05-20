import db from "../db.js";

export async function getQuestionsJavascript(req, res) {
  try {
    const questions = await db.collection("Javascript").find({}).toArray();
    res.send(questions);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getQuestionsReact(req, res) {
  try {
    const questions = await db.collection("React").find({}).toArray();
    res.send(questions);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getQuestionsMongo(req, res) {
  try {
    const questions = await db.collection("Mongo").find({}).toArray();
    res.send(questions);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
