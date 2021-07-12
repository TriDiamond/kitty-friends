import {
  CHANGE_SEARCH_FIELD,
  FETCH_KITTIES_PENDING,
  FETCH_KITTIES_SUCCESS,
  FETCH_KITTIES_fAILED
} from './constants'

const searchInitialState = {
  searchField: ''
}

const kittiesInitialState = {
  isPending: false,
  kitties: [],
  error: ''
}

export const searchKitties = (state = searchInitialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload }
    default:
      return state
  }
}

export const fetchKitties = (state = kittiesInitialState, action = {}) => {
  switch (action.type) {
    case FETCH_KITTIES_PENDING:
      return { ...state, isPending: true }
    case FETCH_KITTIES_SUCCESS:
      return { ...state, kitties: action.payload, isPending: false }
    case FETCH_KITTIES_fAILED:
      return { ...state, isPending: false, error: action.payload }
    default:
      return state
  }
}
