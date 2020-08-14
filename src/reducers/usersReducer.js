import { types } from "src/types"

const initialState = {
  user: {},
  authenticated: false,
  error: false,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return { ...state, loading: action.payload }
    case types.LOGIN_USER_SUCCESS:
      return {
        user: action.payload,
        authenticated: true,
        error: null,
        loading: false,
      }
    case types.LOGIN_USER_ERROR:
      return { ...state, loading: false, error: action.payload }
    case types.LOGOUT_USER:
      return { ...state, user: {}, authenticated: false, error: null }
    default:
      return state
  }
}
