import db from "../db.js";

export async function getQuestions(req,res){
  try {
    const questions = await db.collection("Questions").find({}).toArray();
    res.send(questions);
  } catch (err){
      console.log(err);
      res.sendStatus(500);
  }
}