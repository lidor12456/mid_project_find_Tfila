const { Router } = require("express");
const indexRoute = Router();

const {
  getAllSynagogues,
  addSynagogue,
} = require("../controllers/tfila.controller");

indexRoute.get("/allsynagogues", getAllSynagogues);
indexRoute.post("/addsynagogue", addSynagogue);

module.exports = { indexRoute };
