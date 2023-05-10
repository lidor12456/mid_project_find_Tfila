require("./db/mongoose.js");

const express = require("express");
const cors = require("cors");
const { indexRoute } = require("./routes/index.routes.js");
const app = express();
const PORT = 5000;

app.use(cors({ credentials: true }));
app.use(express.json());
app.use("/api", indexRoute);

app.listen(PORT, () => {
  console.log("Listening to PORT " + PORT);
});
