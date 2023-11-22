import React from "react";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";

const ImagePanel = ({ selectedImage, onClose }) => (
  <div>
    {selectedImage && (
      <div>
        <Slide direction="right" in={Boolean(selectedImage)}>
          <div className="image-panel">
            <IconButton onClick={onClose}>
              <IconButton />
            </IconButton>
            <img src={selectedImage} alt="Selected Image" />
          </div>
        </Slide>
      </div>
    )}
  </div>
);

export default ImagePanel;
