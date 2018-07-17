const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});

app.listen(8080, function() {
  console.log("Listening on port 8080");
});
