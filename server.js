const express = require("express");
const cors = require("cors");
const questions = require("./questions");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/questions", (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
