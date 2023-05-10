const { Synagogues } = require("../models/synagogue.model");
const { addSynagogueToMongo } = require("../services/synagogues.mongoose");

const getAllSynagogues = async (req, res) => {
  try {
    const synagogues = await Synagogues.find({});
    res.status(200).send(synagogues);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
const addSynagogue = async (req, res) => {
  const body = req.body;
  const newSynagogue = await addSynagogueToMongo(body);
  res.status(201).send(newSynagogue);
};

module.exports = {
  getAllSynagogues,
  addSynagogue,
};
