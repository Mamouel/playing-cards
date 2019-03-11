const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8080;

const root = path.join(__dirname, "..", "build/");

app.use(bodyParser.json());
app.use(express.static(root));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});