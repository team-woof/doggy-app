const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

function dogs() {
  const dogsList = {
    '1': {
      id: '1',
      name: 'Max',
      age: '4',
      sex: 'male',
      breed: 'Labrador',
      hobbies: ['fetching', 'swimming', 'jumping'],
      description: 'very hairy',
      images: [],
      personality: 'Nice and friendly',
      location: 'Shoreditch',
      contact: {
        ownerName: 'Tom Doe',
        ownerNumber: '07765432100',
        ownerEmail: 'tom@gmail.com'
      },
      additionalInfo: 'Alergie to cat food'
    },
    '2': {
      id: '2',
      name: 'Bella',
      age: '2',
      sex: 'female',
      breed: 'Terrier',
      hobbies: ['sleeping', 'swimming', 'jumping'],
      description: 'barks a lot',
      images: [],
      personality: 'Very aggresive',
      location: 'Croydon',
      contact: {
        ownerName: 'John Doe',
        ownerNumber: '07765432100',
        ownerEmail: 'john@gmail.com'
      },
      additionalInfo: 'Alergie to cat food'
    },
    '3': {
      id: '3',
      name: 'Buddy',
      age: '4',
      sex: 'male',
      breed: 'Beagel',
      hobbies: ['fetching', 'swimming', 'jumping'],
      description: 'very hairy',
      images: [],
      personality: 'Nice and friendly',
      location: 'Liverpool',
      contact: {
        ownerName: 'Julian Doe',
        ownerNumber: '07765432100',
        ownerEmail: 'julian@gmail.com'
      },
      additionalInfo: 'Alergie to cat food'
    },
    '4': {
      id: '4',
      name: 'Trump',
      age: '4',
      sex: 'male',
      breed: 'Labrador',
      hobbies: ['fetching', 'swimming', 'jumping'],
      description: 'very hairy',
      images: [],
      personality: 'Nice and friendly',
      location: 'Shoreditch',
      contact: {
        ownerName: 'Tom Doe',
        ownerNumber: '07765432100',
        ownerEmail: 'tom@gmail.com'
      },
      additionalInfo: 'Alergie to cat food'
    }
  };

  return {
    getDogs() {
      return dogsList;
    },
    filterBreed(breedToFilter) {
      const breeds = Object.keys(dogsList)
        .map(item => dogsList[item])
        .filter(dog => dog.breed === breedToFilter);
      return breeds;
    },

    filterLocation(locationToFilter) {
      const location = Object.keys(dogsList)
        .map(item => dogsList[item])
        .filter(dog => dog.location === locationToFilter);
      return location;
    },

    getBreeds() {
      const breeds = Object.keys(dogsList).reduce((acc, item, index) => {
        const result = dogsList[item].breed;
        return [...acc, result];
      }, []);

      const removeDuplicates = arrX => {
        return arrX.filter((elem, index, arr) => {
          return arr.indexOf(elem) === index;
        });
      };

      const resultBreeds = removeDuplicates(breeds);

      return resultBreeds;
    },
    getLocations() {
      const location = Object.keys(dogsList).reduce((acc, item, index) => {
        const result = dogsList[item].location;
        return [...acc, result];
      }, []);
      return location;
    }
  };
}

const {
  getDogs,
  filterBreed,
  getLocations,
  getBreeds,
  filterLocation
} = dogs();

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

//resume this tomorrow
app.get('/api/breedlocation', function(req, res) {
  const breed = req.query.breed;
  const location = req.query.location;
  const resultBreed = filterBreed(breed);
  const resultLocation = filterLocation(location);
  const result = Object.assign({}, ...resultBreed, ...resultLocation);

  res.json({ result });

  // res.json(req.query);
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
