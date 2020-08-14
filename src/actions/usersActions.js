import { types } from "../types"
import { api } from "../api"

export const loginUser = ({ id = 0, email, password }) => {
  return async (dispatch) => {
    dispatch({ type: types.LOGIN_USER, payload: true })
    try {
      const res = await api.get("/users")

      const currentUser = res.data.find(
        (item) =>
          item.email === email && (item.id === id || item.password === password)
      )
      if (currentUser) {
        const { id, email, username } = currentUser
        dispatch({
          type: types.LOGIN_USER_SUCCESS,
          payload: { id, email, username },
        })
        localStorage.setItem(
          "user",
          JSON.stringify({ id, email, username, auth: true })
        )
      } else dispatch({ type: types.LOGIN_USER_ERROR, payload: true })
    } catch (error) {
      dispatch({ type: types.LOGIN_USER_ERROR, payload: true })
    }
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: types.LOGOUT_USER })
    localStorage.removeItem("user")
  }
}
