const { types } = require("src/types")

const loginUser = ({ email, password }) => {
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

const logoutUser = () => ({ type: types.LOGOUT_USER })
