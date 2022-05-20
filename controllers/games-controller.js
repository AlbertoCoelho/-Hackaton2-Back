import db from "../db.js";

export async function getGames(req, res) {
  try {
    const games = await db.collection("Games").find().toArray();

    if (games.length > 0) return res.send(games);

    res.status(404).send("Não existe nenhuma opção até o momento");
    console.log("não achei");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
