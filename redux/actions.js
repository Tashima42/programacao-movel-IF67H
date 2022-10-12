export const addVaccine = content => ({
  type: "addVaccine",
  payload: content
})

export const selectVaccine = content => ({
  type: "selectVaccine",
  payload: content,
})

export const editVaccine = (id, content) => ({
  type: "editVaccine",
  payload: { id, content }
})

export const removeVaccine = (id, content) => ({
  type: "removeVaccine",
  payload: { id }
})

export const setUser = content => ({
  type: "setUser",
  payload: content
})