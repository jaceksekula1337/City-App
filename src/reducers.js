import { UPDATE_PROPERTY } from "./actions";
import data from "./data.json"; // Importuj dane z pliku data.json

const initialState = {
  properties: data, // Ustaw dane z data.json jako początkowy stan properties
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROPERTY:
      const updatedProperties = state.properties.map((prop) =>
        prop.name === action.payload.name ? action.payload : prop
      );
      return { ...state, properties: updatedProperties };
    default:
      return state;
  }
};


export default rootReducer;
