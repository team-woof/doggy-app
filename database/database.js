const initialDogs = require('./mockData');

function dogs(_dogList) {
  let dogsList = _dogList;

  return {
    getDogs() {
      return dogsList;
    },

    getLocations() {
      const result = Object.keys(dogsList).reduce((acc, item, index) => {
        const currentLocation = dogsList[item].location;
        acc[currentLocation] =
          acc[currentLocation] > 0 ? acc[currentLocation] + 1 : 1;
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
    },

    filterBreed(breedToFilter) {
      const breeds = Object.keys(dogsList)
        .map(item => dogsList[item])
        .filter(dog => dog.breed === breedToFilter);
      return breeds;
    },

    filterByQuery(breedToFilter = '', locationToFilter = '') {
      const result = Object.values(dogsList)
  
        .filter(
          dog => (breedToFilter === '' ? true : dog.breed === breedToFilter)
        )
      
        .filter(
          dog =>
            locationToFilter === '' ? true : dog.location === locationToFilter
        );
      return result.length >= 1 ? result : [{ error: 'who let the dogs out?' }];
    }
  };
}

const {
  getDogs,
  filterBreed,
  getLocations,
  getBreeds,
  filterLocation,
  filterByQuery
} = dogs(initialDogs);

module.exports = {
  dogs: dogs,
  getDogs: getDogs,
  filterBreed: filterBreed,
  getLocations: getLocations,
  getBreeds: getBreeds,
  filterLocation: filterLocation,
  filterByQuery: filterByQuery
};
