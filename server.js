const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {
  getDogs,
  filterBreed,
  getLocations,
  getBreeds,
  filterByQuery,
  filterLocation
} = require('./database/database');

app.use(bodyParser.json());
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/api/dogs', function(req, res) {
  if (getDogs()) {
    res.json(getDogs());
  } else {
    res.status(404).json({ error: 'No dogs found' });
  }
});

//http://127.0.0.1:8080/api/query?breed=Labrador
app.get('/api/query', function(req, res) {
  if (req.query.breed) {
    res.json(filterBreed(req.query.breed));
  } else {
    res.status(404).json({ error: 'No breed found' });
  }
});

//r http://127.0.0.1:8080/api/breedlocation?breed=Labrador&location=london
app.get('/api/breedlocation', function(req, res) {
  const { breed, location } = req.query;
  res.json(filterByQuery(breed, location));
});

app.get('/api/locations', function(req, res) {
  if (getLocations()) {
    res.json(getLocations());
  } else {
    res.status(404).json({ error: 'No breed found' });
  }
});

app.get('/api/getresultlist', function(req, res) {
  res.json({
    location: getLocations(),
    breeds: getBreeds()
  });
});

app.listen(8080, function() {
  console.log('Listening on port 8080');
});
