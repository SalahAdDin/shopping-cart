import { types } from "../types"

const calculatePrice = (list) =>
  list.reduce((aux, item) => aux + item.price * item.amount, 0)

const initialState = {
  products: [],
  price: 0,
}

export default (state = initialState, action) => {
  let products = state.products
  let price = 0

  switch (action.type) {
    case types.ADD_PRODUCT_TO_BASKET:
      if (products.some((product) => product.id === action.payload.id))
        products.map((product) =>
          product.id === action.payload.id
            ? (product.amount += action.payload.amount)
            : action.payload
        )
      else products = [...products, action.payload]
      // const item = state.products.findIndex((item) => item.id === action.payload.id)

      price = calculatePrice(products)

      return {
        ...state,
        products,
        price,
      }

    case types.REMOVE_PRODUCT_FROM_BASKET:
      products = state.products.filter((product) => product.id !== action.payload.id)

      price = calculatePrice(products)

      return {
        ...state,
        products,
        price,
      }
    default:
      return state
  }
}
