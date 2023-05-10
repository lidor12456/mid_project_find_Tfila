const mongoose = require("mongoose");
const WeeklyTfilaTimes = new mongoose.Schema({
  Sunday: { type: Array },
  Monday: { type: Array },
  Tuesday: { type: Array },
  Wednesday: { type: Array },
  Thursday: { type: Array },
  Friday: { type: Array },
  Saturday: { type: Array },
});

const AllSynagoguesArr = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  address: { type: String },
  city: { type: String },
  SHACHARIT: { type: WeeklyTfilaTimes },
  MINHA: { type: WeeklyTfilaTimes },
  ARVIT: { type: WeeklyTfilaTimes },
});

const Synagogues = mongoose.model("Synagogues", AllSynagoguesArr);
module.exports = {
  Synagogues,
};
