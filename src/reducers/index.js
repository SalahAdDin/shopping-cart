import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import productsReducer from "./productsReducer"
import usersReducer from "./usersReducer"

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  users: usersReducer,
})
