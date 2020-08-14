import { types } from "../types"
import { api } from "../api"

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: types.FETCH_PRODUCTS, payload: true })
    try {
      const res = await api.get("/products")
      dispatch({ type: types.FETCH_PRODUCTS_SUCCESS, payload: res.data })
    } catch (error) {
      dispatch({ type: types.FETCH_PRODUCTS_ERROR, payload: true })
    }
  }
}

export const filterByCategory = (category) => ({
  type: types.FILTER_PRODUCTS,
  payload: category,
})

export const pullProductsFromStock = (products) => ({
  type: types.PULL_PRODUCT_AMOUNT_FROM_STOCK,
  payload: products,
})
