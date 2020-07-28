export const GET_JOKES = 'GET_JOKES';
export const GET_JOKES_SUCCESS = 'GET_JOKES_SUCCESS';
export const GET_JOKES_FAILURE = 'GET_JOKES_FAILURE';

export const getJokes = () => ({
  type: GET_JOKES
})

export const getJokesSuccess = (jokes) => ({
  type: GET_JOKES_SUCCESS,
  payload: jokes
})

export const getJokesFailure = () => ({
  type: GET_JOKES_FAILURE
})

export function addJoke(jokes) {
  return async (dispatch) => {
    dispatch(getJokes())
    const container = jokes;

    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      const data = await response.json()
      container.push(data.value);

      dispatch(getJokesSuccess(container))
    } catch (error) {
      dispatch(getJokesFailure())

    }
  }
}

export function fetchJokes(jokesNumber) {
  return async (dispatch) => {
    dispatch(getJokes())
    const container = [];

    try {
      for(let i = 0; i < jokesNumber; i++){
        const response = await fetch('https://api.chucknorris.io/jokes/random')
        const data = await response.json()
        container.push(data.value);
      }

      dispatch(getJokesSuccess(container))
    } catch (error) {
      dispatch(getJokesFailure())

    }
  }
}
