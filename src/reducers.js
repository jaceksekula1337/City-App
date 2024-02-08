// rootReducer.js
import { UPDATE_PROPERTY } from "./actions";
import data from "./data.json";

const initialState = {
  properties: data.properties,
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_PROPERTY:
      return {
        ...state,
        properties: state.properties.map((prop) =>
          prop.label === payload.label ? payload : prop
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;