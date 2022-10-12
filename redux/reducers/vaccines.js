const initialState = {
  vaccines: [
    { id: 0, title: "BCG", dose: "Dose Unica", date: "11/06/2022", nextDose: "11/10/2022", image: "file:///Users/tashima-utfpr/Library/Developer/CoreSimulator/Devices/B80E1ED3-F23E-4F92-9629-9534DF23218D/data/Containers/Data/Application/DC91FAD1-9F57-499C-9FDD-BF1FC6DF9755/Library/Caches/ExponentExperienceData/%2540anonymous%252Fprojeto-final-80112b6d-8ae4-4634-9f5a-a16ba5e303b0/ImagePicker/D15D4758-8145-4138-8121-2F76EAFD5680.jpg" },
    { id: 1, title: "Febre Amarela", dose: "1a. dose", date: "11/06/2022", nextDose: "11/10/2022", image: "file:///Users/tashima-utfpr/Library/Developer/CoreSimulator/Devices/B80E1ED3-F23E-4F92-9629-9534DF23218D/data/Containers/Data/Application/DC91FAD1-9F57-499C-9FDD-BF1FC6DF9755/Library/Caches/ExponentExperienceData/%2540anonymous%252Fprojeto-final-80112b6d-8ae4-4634-9f5a-a16ba5e303b0/ImagePicker/D15D4758-8145-4138-8121-2F76EAFD5680.jpg" },
    { id: 2, title: "Hepatite B", dose: "2a. dose", date: "11/06/2022", nextDose: "11/10/2022", image: "file:///Users/tashima-utfpr/Library/Developer/CoreSimulator/Devices/B80E1ED3-F23E-4F92-9629-9534DF23218D/data/Containers/Data/Application/DC91FAD1-9F57-499C-9FDD-BF1FC6DF9755/Library/Caches/ExponentExperienceData/%2540anonymous%252Fprojeto-final-80112b6d-8ae4-4634-9f5a-a16ba5e303b0/ImagePicker/D15D4758-8145-4138-8121-2F76EAFD5680.jpg" },
    { id: 3, title: "Poliomelite", dose: "1a. dose", date: "11/06/2022", nextDose: "11/10/2022", image: "file:///Users/tashima-utfpr/Library/Developer/CoreSimulator/Devices/B80E1ED3-F23E-4F92-9629-9534DF23218D/data/Containers/Data/Application/DC91FAD1-9F57-499C-9FDD-BF1FC6DF9755/Library/Caches/ExponentExperienceData/%2540anonymous%252Fprojeto-final-80112b6d-8ae4-4634-9f5a-a16ba5e303b0/ImagePicker/D15D4758-8145-4138-8121-2F76EAFD5680.jpg" },
  ],
  selectedVaccine: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "addVaccine": {
      return {
        ...state,
        vaccines: [
          ...state.vaccines,
          {
            id: state.vaccines[state.vaccines.length - 1].id++,
            ...action.payload
          }
        ]
      }
    }
    case "selectVaccine": {
      return {
        ...state,
        selectedVaccine: action.payload
      }
    }
    case "editVaccine": {
      const { id, content } = action.payload
      state.vaccines[id] = { ...content, id }
      return state
    }
    case "removeVaccine": {
      const { id } = action.payload
      state.vaccines.splice(id, 1)
      return state
    }
    default:
      return state
  }
}