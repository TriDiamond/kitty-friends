import {
  CHANGE_SEARCH_FIELD,
  FETCH_KITTIES_PENDING,
  FETCH_KITTIES_SUCCESS,
  FETCH_KITTIES_fAILED
} from './constants'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const fetchKitties = async (dispatch) => {
  dispatch({ type: FETCH_KITTIES_PENDING })
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    dispatch({ type: FETCH_KITTIES_SUCCESS, payload: data })
  } catch (e) {
    dispatch({ type: FETCH_KITTIES_fAILED, payload: e })
  }
}
