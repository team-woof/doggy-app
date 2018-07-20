const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const {
  getDogs,
  filterBreed,
  getLocations,
  getBreeds,
  filterByQuery,
  filterLocation
} = require("./database/database");

app.use(bodyParser.json());
app.use("/static", express.static(__dirname + "/static"));

app.get("/api/dogs", function(req, res) {
  if (getDogs()) {
    res.json(getDogs());
  } else {
    res.status(404).json({ error: "No dogs found" });
  }
});

//http://127.0.0.1:8080/api/query?breed=Labrador
app.get("/api/query", function(req, res) {
  if (req.query.breed) {
    res.json(filterBreed(req.query.breed));
  } else {
    res.status(404).json({ error: "No breed found" });
  }
});

//r http://127.0.0.1:8080/api/breedlocation?breed=Labrador&location=london
app.get("/api/breedlocation", function(req, res) {
  const { breed, location } = req.query;
  res.json(filterByQuery(breed, location));
});

app.get("/api/locations", function(req, res) {
  if (getLocations()) {
    res.json(getLocations());
  } else {
    res.status(404).json({ error: "No breed found" });
  }
});

app.get("/api/getresultlist", function(req, res) {
  res.json({
    location: getLocations(),
    breeds: getBreeds()
  });
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

const jwt = require("jsonwebtoken");

const users = [
  { id: 1, username: "edem", password: "admin" },
  { id: 2, username: "ralph", password: "admin" },
  { id: 3, username: "julius", password: "admin" },
  { id: 4, username: "james", password: "admin" },
  { id: 5, username: "ethan", password: "admin" }
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send("you need a username and password");
    return null;
  }
  const user = users.find(
    u => u.username === username && u.password === password
  );
  if (!user) {
    res.status(401).send("you not autharised");
    return null;
  }
  if (user) {
    const token = jwt.sign(
      {
        sub: user.id,
        username: user.username
      },
      "woofwoof",
      { expiresIn: "3 hours" }
    );
    res.status(200).send({ access_token: token });
    return null;
  }

  res.status(200).send(`you have login as ${username}`);
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on port 8080");
});
