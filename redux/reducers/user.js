const initialState = {
  user: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "setUser": {
      return {
        ...state,
        user: action.payload,
      }
    }
    default:
      return state
  }
}