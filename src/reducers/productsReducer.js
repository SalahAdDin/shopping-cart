import { types } from "../types"

const initialState = {
  products: [],
  filtered: [],
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
    case types.FILTER_PRODUCTS:
      return {
        ...state,
        filtered: state.products.filter(
          (product) => product.category === action.payload
        ),
      }
    default:
      return state
  }
}
