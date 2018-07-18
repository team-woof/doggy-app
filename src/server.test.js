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

      return breeds;
    },

    getLocations() {
      const result = Object.keys(dogsList).reduce((acc, item, index) => {
        const currentLocation = dogsList[item].location;
        acc[currentLocation] = index;
        return acc;
      }, {});
      return result;
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
});
