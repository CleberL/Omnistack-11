import connection from "../database/connection";

async function create(req, res) {
  const { id } = req.body;
  const ong = await connection("ongs")
    .where("id", id)
    .select("name")
    .first();

  if (!ong) {
    return res.status(400).json({ error: "no ONG found with this ID" });
  }

  return res.json(ong);
}

export default { create };
