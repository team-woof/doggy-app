const dogsList = {
  '1': {
    id: '1',
    name: 'Max',
    age: '4',
    gender: 'male',
    breed: 'Labrador',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231410/Labrador-Retriever-On-White-01.jpg',
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
    gender: 'female',
    breed: 'Terrier',
    hobbies: ['sleeping', 'swimming', 'jumping'],
    description: 'barks a lot',
    images:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0FsRS8cJt59kojF470PLtP7QiKz6U8VNagwCHOdMDrnQgFzQMQ',
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
    gender: 'male',
    breed: 'Beagel',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images: 'http://www.dogzone.com/images/breeds/beagle.jpg',
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
    gender: 'male',
    breed: 'Labrador',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images: 'https://i.ytimg.com/vi/in_jF1W3jUg/maxresdefault.jpg',
    personality: 'Nice and friendly',
    location: 'Shoreditch',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '5': {
    id: '5',
    name: 'Bear',
    age: '4',
    gender: 'male',
    breed: 'Chihuahua',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn1-www.dogtime.com/assets/uploads/gallery/chihuahua-dog-breed-pictures/9-play.jpg',
    personality: 'Nice and friendly',
    location: 'Greenwich',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '6': {
    id: '6',
    name: 'Harley',
    age: '5',
    gender: 'male',
    breed: 'Chihuahua',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn3-www.dogtime.com/assets/uploads/gallery/chihuahua-dog-breed-pictures/2-fly.jpg',
    personality: 'Nice and friendly',
    location: 'Wandsworth',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '7': {
    id: '7',
    name: 'Coco',
    age: '4',
    gender: 'female',
    breed: 'Chow Chow',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn2-www.dogtime.com/assets/uploads/gallery/chow-chow-dog-breed-pictures/3-fullbody.jpg',
    personality: 'Nice and friendly',
    location: 'Barnet',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '8': {
    id: '8',
    name: 'Cooper',
    age: '4',
    gender: 'male',
    breed: 'Chow Chow',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn1-www.dogtime.com/assets/uploads/gallery/chow-chow-dog-breed-pictures/4-blackpuppy.jpg',
    personality: 'Nice and friendly',
    location: 'Newham',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '9': {
    id: '9',
    name: 'Ginger',
    age: '6',
    gender: 'female',
    breed: 'Dachshund',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn3-www.dogtime.com/assets/uploads/gallery/dachshund-dog-breed-pictures/side-5_680-453.jpg',
    personality: 'Nice and friendly',
    location: 'Camden',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '10': {
    id: '10',
    name: 'Buster',
    age: '6',
    gender: 'male',
    breed: 'Dachshund',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn1-www.dogtime.com/assets/uploads/gallery/dachshund-dog-breed-pictures/coat-3_680-453-1.jpg',
    personality: 'Nice and friendly',
    location: 'Hackney',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '11': {
    id: '11',
    name: 'Cody',
    age: '3',
    gender: 'male',
    breed: 'English Foxhound',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn1-www.dogtime.com/assets/uploads/gallery/english-foxhound-dog-breed-pictures/8-3qstance.jpg',
    personality: 'Nice and friendly',
    location: 'Hackney',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '12': {
    id: '12',
    name: 'Angel',
    age: '7',
    gender: 'female',
    breed: 'English Foxhound',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn3-www.dogtime.com/assets/uploads/gallery/english-foxhound-dog-breed-pictures/6-whiteprofile.jpg',
    personality: 'Nice and friendly',
    location: 'Hammersmith',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '13': {
    id: '13',
    name: 'Jack',
    age: '5',
    gender: 'male',
    breed: 'Giant Schnauzer',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn3-www.dogtime.com/assets/uploads/gallery/giant-schnauzer-dogs-and-puppies/giant-schnauzer-dogs-puppies-1.jpg',
    personality: 'Nice and friendly',
    location: 'Hammersmith',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '14': {
    id: '14',
    name: 'Gracie',
    age: '8',
    gender: 'female',
    breed: 'Giant Schnauzer',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn3-www.dogtime.com/assets/uploads/gallery/giant-schnauzer-dogs-and-puppies/giant-schnauzer-dogs-puppies-5.jpg',
    personality: 'Nice and friendly',
    location: 'Islington',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '15': {
    id: '15',
    name: 'Rocky',
    age: '7',
    gender: 'male',
    breed: 'Great Dane',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn1-www.dogtime.com/assets/uploads/gallery/great-dane-dogs-and-puppies/great-dane-dogs-puppies-5.jpg',
    personality: 'Nice and friendly',
    location: 'Islington',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '16': {
    id: '16',
    name: 'Buddy',
    age: '5',
    gender: 'male',
    breed: 'Great Dane',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn1-www.dogtime.com/assets/uploads/gallery/great-dane-dogs-and-puppies/great-dane-dogs-puppies-6.jpg',
    personality: 'Nice and friendly',
    location: 'Westminster',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '17': {
    id: '17',
    name: 'Chloe',
    age: '3',
    gender: 'female',
    breed: 'Komondor',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn3-www.dogtime.com/assets/uploads/gallery/komondor-dogs-and-puppies/komondor-dogs-puppies-1.jpg',
    personality: 'Nice and friendly',
    location: 'Bromley',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '18': {
    id: '18',
    name: 'Max',
    age: '6',
    gender: 'male',
    breed: 'Komondor',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn1-www.dogtime.com/assets/uploads/gallery/komondor-dogs-and-puppies/komondor-dogs-puppies-6.jpg',
    personality: 'Nice and friendly',
    location: 'Bromley',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '19': {
    id: '19',
    name: 'Bailey',
    age: '5',
    gender: 'male',
    breed: 'Mastiff',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn1-www.dogtime.com/assets/uploads/gallery/mastiff-dogs-and-puppies/bull-mastiff-dogs-puppies-1.jpg',
    personality: 'Nice and friendly',
    location: 'Enfield',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  },
  '20': {
    id: '20',
    name: 'Lucy',
    age: '6',
    gender: 'female',
    breed: 'Mastiff',
    hobbies: ['fetching', 'swimming', 'jumping'],
    description: 'very hairy',
    images:
      'http://cdn3-www.dogtime.com/assets/uploads/gallery/mastiff-dogs-and-puppies/bull-mastiff-dogs-puppies-4.jpg',
    personality: 'Nice and friendly',
    location: 'Enfield',
    contact: {
      ownerName: 'Tom Doe',
      ownerNumber: '07765432100',
      ownerEmail: 'tom@gmail.com'
    },
    additionalInfo: 'Alergie to cat food'
  }
};

module.exports = dogsList;
