// actions.js
export const UPDATE_PROPERTY = 'UPDATE_PROPERTY';

export const updateProperty = (property) => ({
  type: UPDATE_PROPERTY,
  payload: property,
});