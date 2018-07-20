const {
  dogs,
  getDogs,
  filterBreed,
  getLocations,
  getBreeds,
  filterLocation,
  filterByQuery
} = require('./database');

const mockData = [
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
];

describe('firsttest', function() {
  test('location duplicate', () => {
    const mockLocations = {
      1: { location: 'Croydon' },
      2: { location: 'Croydon' },
      3: { location: 'Croydon' },
      4: { location: 'London' },
      5: { location: 6 }
    };

    expect(dogs(mockLocations).getLocations()).toEqual({
      Croydon: 3,
      London: 1,
      6: 1
    });
  });

  test('getBreeds', function() {
    const mockBreeds = {
      1: { breed: 'Labrador' },
      2: { breed: 'Labrador' },
      3: { breed: 'Beagel' }
    };
    expect(dogs(mockBreeds).getBreeds()).toEqual({
      Labrador: 1,
      Beagel: 2
    });
  });

  test('filterLocation', function() {
    expect(dogs(mockData).filterLocation('Shoreditch')).toEqual([
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
    expect(dogs(mockData).filterBreed('Labrador')).toEqual([
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

  test.skip('getDogs', function() {
    const result = getDogs(mockData);
    expect(result[0]).toEqual({
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
      }
    });
  });

  test('filterByQuery', () => {
    const mockData = [
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
        location: 'Kensington',
        name: 'Trump',
        personality: 'Nice and friendly',
        sex: 'male'
      }
    ];

    expect(dogs(mockData).filterByQuery('Labrador', 'Shoreditch')).toEqual([
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
  test('this should work', () => {
    const searchOptions = {
      location: 'Shoreditch',
      breeds: '*'
    };
    const result = [{ location: 'Shoreditch' }, { location: 'Shoreditch' }];
  });

  test.only('this does work', () => {
    expect(filterByQuery('rgoer', '')).toEqual([
      { error: 'who let the dogs out?' }
    ]);

    const terrier = filterByQuery('Terrier', '');
    expect(terrier[0].breed).toEqual('Terrier');

    expect(filterByQuery('', '').length).toEqual(20);
    expect(filterByQuery('All', 'All')).toEqual([
      { error: 'who let the dogs out?' }
    ]);

    expect(filterByQuery('', 'Shoreditch').length).toEqual(2);
    expect(filterByQuery('Great Dane', '').length).toEqual(2);
  });
});
