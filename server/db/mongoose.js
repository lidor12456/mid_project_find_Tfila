const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.xdyb6xu.mongodb.net/?retryWrites=true&w=majority`;

// const URL = `mongodb+srv://lidor_ashush:9w2IGr1PCRrlD1cw@cluster0.nekqmgn.mongodb.net/?retryWrites=true&w=majority`;
const URL = `mongodb+srv://lidor12456:${process.env.MONGO_PASS}@findtfiladb.niosyn1.mongodb.net/`;
mongoose.connect(URL, (err, mongoDbInstance) => {
  if (err) {
    throw Error("MongoDB connection error: " + err);
  }
  const { host, port, name } = mongoDbInstance;
  console.log({ host, port, name });
});
