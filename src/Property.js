import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { updateProperty } from "./actions";

const Property = ({ property, onImageClick }) => {
  const dispatch = useDispatch();
  const [editedProperty, setEditedProperty] = useState(property);
  const [isImagePanelOpen, setIsImagePanelOpen] = useState(false);

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

  const handleImagePanelToggle = () => {
    setIsImagePanelOpen((prev) => !prev);
    if (!isImagePanelOpen && property.image) {
      onImageClick(property.image);
    } else {
      onImageClick(null); // Close the image panel
    }
  };

  return (
    <div className="">
      <h3>{property.label}</h3>
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
      {property.image && (
        <>
          <button onClick={handleImagePanelToggle}>Show Image</button>
        </>
      )}
    </div>
  );
};

export default Property;
