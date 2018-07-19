export function fetchDefaultsAction() {
  return function apiFetch(dispatch) {
    const url = `/api/getresultlist`;

    fetch(url)
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: 'GET_DEFAULTS',
          data: data
        })
      )
      .catch(error => console.log(error));
  };
}

export function searchButtonResult(breed, location) {
  return function apiFetch(dispatch) {
    const url = `/api/breedlocation?breed=${breed}&location=${location}`;
    fetch(url)
      .then(response => response.json())
      .then(searchResults => {

        dispatch({
          type: 'GET_SEARCH_BUTTON_RESULTS',
          searchResults
        });
      })
      .catch(error => console.log(error));
  };
}
