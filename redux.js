import { configureStore } from '@reduxjs/toolkit';

const preloadedState = {
  vaccines: [
  ],
  selectedVaccine: 1,
  user: { }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
   case "setVaccines":
      return { ...state, vaccines: action.value }
    case "selectVaccine":
      return {...state, selectedVaccine: action.value}
    case "setUser":
      return {...state, user: action.value}
    default:
      return state;
  }
}

export const addVaccine = (content) => ({
  type: "addVaccine",
  payload: content
})

export default configureStore({
  reducer,
  preloadedState,
})