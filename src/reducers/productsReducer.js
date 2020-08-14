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
    case types.PULL_PRODUCT_AMOUNT_FROM_STOCK:
      const payload = action.payload
      const aux = state.products
      const products = aux.map((product) => {
        return {
          ...product,
          stock: payload.some((item) => item.id === product.id)
            ? (product.stock -= payload.filter(
                (item) => item.id === product.id
              )[0]?.amount)
            : product.stock,
        }
      })
      return {
        ...state,
        products,
      }
    default:
      return state
  }
}
