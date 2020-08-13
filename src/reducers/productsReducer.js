import { types } from "../types"

const initialState = {
  products: [],
  error: false,
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return { ...state, loading: action.payload }
    case types.FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, error: null, products: action.payload }
    case types.FETCH_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
