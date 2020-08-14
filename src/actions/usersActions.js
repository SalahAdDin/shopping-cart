import { types } from "../types"
import { api } from "../api"

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    dispatch({ type: types.LOGIN_USER, payload: true })
    try {
      const res = await api.get("/users")

      const currentUser = res.data.find(
        (item) => item.email === email && item.password === password
      )
      if (currentUser) {
        dispatch({ type: types.LOGIN_USER_SUCCESS, payload: currentUser })
      } else dispatch({ type: types.LOGIN_USER_ERROR, payload: true })
    } catch (error) {
      dispatch({ type: types.LOGIN_USER_ERROR, payload: true })
    }
  }
}

export const logoutUser = () => ({ type: types.LOGOUT_USER })
