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
