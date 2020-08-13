import { types } from "../types"

export const addToCart = (payload) => ({
  type: types.ADD_PRODUCT_TO_BASKET,
  payload,
})
