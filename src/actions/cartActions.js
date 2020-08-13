import { types } from "../types"

export const addToCart = (payload) => ({
  type: types.ADD_PRODUCT_TO_BASKET,
  payload,
})

export const removeFromCart = (payload) => ({
  type: types.REMOVE_PRODUCT_FROM_BASKET,
  payload,
})

export const cancelOrder = () => ({
  type: types.CANCEL_ORDER,
})
