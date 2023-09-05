// Property.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { updateProperty } from "./actions";

const Property = ({ property }) => {
  const dispatch = useDispatch();
  const [editedProperty, setEditedProperty] = useState(property);

  const handleBlur = () => {
    dispatch(updateProperty(editedProperty));
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setEditedProperty({
      ...editedProperty,
      [name]: newValue,
    });
  };

  return (
    <div>
      <h3>{property.name}</h3>
      {property.type === "text" && (
        <TextField
          name="value"
          value={editedProperty.value}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      )}
      {property.type === "checkbox" && (
        <FormControlLabel
          control={
            <Checkbox
              name="value"
              checked={editedProperty.value}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          }
          label="Check"
        />
      )}
      {property.type === "combobox" && (
        <Autocomplete
          options={property.options}
          name="value"
          value={editedProperty.value}
          onBlur={handleBlur}
          onChange={(event, newValue) => {
            handleChange({ target: { name: "value", value: newValue } });
          }}
          freeSolo
          renderInput={(params) => <TextField {...params} />}
        />
      )}
    </div>
  );
};

export default Property;
