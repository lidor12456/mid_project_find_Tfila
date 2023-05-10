const { Synagogues } = require("../models/synagogue.model");

const addSynagogueToMongo = async (synagogueObj) => {
  const newSynagogue = await Synagogues.create(synagogueObj);
  return newSynagogue;
};

module.exports = {
  addSynagogueToMongo,
};
