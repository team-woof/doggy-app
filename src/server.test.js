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

    getLocations() {
      const result = Object.keys(dogsList).reduce((acc, item, index) => {
        const currentLocation = dogsList[item].location;
        acc[currentLocation] = index;
        return acc;
      }, {});
      return result;
    },

    getBreeds() {
      const result = Object.keys(dogsList).reduce((acc, item, index) => {
        const currentBreed = dogsList[item].breed;
        acc[currentBreed] = index;
        return acc;
      }, {});
      return result;
    },

    filterLocation(locationToFilter) {
      const location = Object.keys(dogsList)
        .map(item => dogsList[item])
        .filter(dog => dog.location === locationToFilter);
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

describe('firsttest', function() {
  test('location duplicate', () => {
    expect(getLocations()).toEqual({ Croydon: 1, Liverpool: 2, Shoreditch: 3 });
  });

  test('getBreeds', function() {
    expect(getBreeds()).toEqual({ Labrador: 3, Terrier: 1, Beagel: 2 });
  });

  test('filterLocation', function() {
    expect(filterLocation('Shoreditch')).toEqual([
      {
        additionalInfo: 'Alergie to cat food',
        age: '4',
        breed: 'Labrador',
        contact: {
          ownerEmail: 'tom@gmail.com',
          ownerName: 'Tom Doe',
          ownerNumber: '07765432100'
        },
        description: 'very hairy',
        hobbies: ['fetching', 'swimming', 'jumping'],
        id: '1',
        images: [],
        location: 'Shoreditch',
        name: 'Max',
        personality: 'Nice and friendly',
        sex: 'male'
      },
      {
        additionalInfo: 'Alergie to cat food',
        age: '4',
        breed: 'Labrador',
        contact: {
          ownerEmail: 'tom@gmail.com',
          ownerName: 'Tom Doe',
          ownerNumber: '07765432100'
        },
        description: 'very hairy',
        hobbies: ['fetching', 'swimming', 'jumping'],
        id: '4',
        images: [],
        location: 'Shoreditch',
        name: 'Trump',
        personality: 'Nice and friendly',
        sex: 'male'
      }
    ]);
  });
});
