const { Router } = require("express");
const indexRoute = Router();

const {
  getAllSynagogues,
  addSynagogue,
  findSynagogueById,
  deleteSynagogue,
  updateSynagogueById,
} = require("../controllers/tfila.controller");

indexRoute.get("/allsynagogues", getAllSynagogues);
indexRoute.get("/synagogues/:id", findSynagogueById);
indexRoute.put("/synagogues/:id", updateSynagogueById);
indexRoute.post("/addsynagogue", addSynagogue);
indexRoute.delete("/:id", deleteSynagogue);

module.exports = { indexRoute };
