export const GET_NUMBER = 'GET_NUMBER';
export const GET_NUMBER_SUCCESS = 'GET_NUMBER_SUCCESS';
export const GET_NUMBER_FAILURE = 'GET_NUMBER_FAILURE';

export const getNumber = () => ({
  type: GET_NUMBER
})

export const getNumberSuccess = (number) => ({
  type: GET_NUMBER_SUCCESS,
  payload: number
})

export const getNumberFailure = () => ({
  type: GET_NUMBER_FAILURE
})

export function fetchNumber(num) {
  return async (dispatch) => {
    dispatch(getNumber())

    try {
      const response = await fetch(`http://numbersapi.com/${num}?json`)
      const data = await response.json()

      dispatch(getNumberSuccess(data.text))
    } catch (error) {
      dispatch(getNumberFailure())

    }
  }
}
