const {
  getDogs,
  filterBreed,
  getLocations,
  getBreeds,
  filterLocation
} = require('../dogDatabase');

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
  test('filterBreed', function() {
    expect(filterBreed('Terrier')).toEqual([
      {
        additionalInfo: 'Alergie to cat food',
        age: '2',
        breed: 'Terrier',
        contact: {
          ownerEmail: 'john@gmail.com',
          ownerName: 'John Doe',
          ownerNumber: '07765432100'
        },
        description: 'barks a lot',
        hobbies: ['sleeping', 'swimming', 'jumping'],
        id: '2',
        images: [],
        location: 'Croydon',
        name: 'Bella',
        personality: 'Very aggresive',
        sex: 'female'
      }
    ]);
  });
  test('getDogs', function() {
    expect(getDogs()).toEqual({
      '1': {
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
      '2': {
        additionalInfo: 'Alergie to cat food',
        age: '2',
        breed: 'Terrier',
        contact: {
          ownerEmail: 'john@gmail.com',
          ownerName: 'John Doe',
          ownerNumber: '07765432100'
        },
        description: 'barks a lot',
        hobbies: ['sleeping', 'swimming', 'jumping'],
        id: '2',
        images: [],
        location: 'Croydon',
        name: 'Bella',
        personality: 'Very aggresive',
        sex: 'female'
      },
      '3': {
        additionalInfo: 'Alergie to cat food',
        age: '4',
        breed: 'Beagel',
        contact: {
          ownerEmail: 'julian@gmail.com',
          ownerName: 'Julian Doe',
          ownerNumber: '07765432100'
        },
        description: 'very hairy',
        hobbies: ['fetching', 'swimming', 'jumping'],
        id: '3',
        images: [],
        location: 'Liverpool',
        name: 'Buddy',
        personality: 'Nice and friendly',
        sex: 'male'
      },
      '4': {
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
    });
  });
});
