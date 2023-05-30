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

const findSynagogueById = async (req, res) => {
  const { id } = req.params;
  try {
    const synagogue = await Synagogues.findById(id);
    res.status(200).send(synagogue);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
const deleteSynagogue = async (req, res) => {
  const { id } = req.params;

  try {
    await Synagogues.findByIdAndRemove(id);
    res.status(200).send({ message: "Synagogue deleted successfully" });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
const updateSynagogueById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSynagogue = await Synagogues.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.dir(req.body);
    res.status(201).send(updatedSynagogue);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = {
  getAllSynagogues,
  addSynagogue,
  findSynagogueById,
  deleteSynagogue,
  updateSynagogueById,
};
