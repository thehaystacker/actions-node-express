const express = require("express");

const app = express();
const port = process.env.port || 3011;

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.listen(port, () => {
  console.log("[App running on port " + port + "]");
});
