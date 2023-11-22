import React, { useState } from "react";
import { useSelector } from "react-redux";
import Groups from "./Groups";
import ImagePanel from "./ImagePanel";
import Topbar from "./Topbar";

function App() {
  const properties = useSelector((state) => state.data.properties);

  const uniqueGroups = Array.from(
    new Set(properties.map((prop) => prop.group))
  );

  const [expandedGroups, setExpandedGroups] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleGroupExpand = (groupName) => {
    const isGroupExpanded = expandedGroups.includes(groupName);
    setExpandedGroups((prev) =>
      isGroupExpanded
        ? prev.filter((group) => group !== groupName)
        : [...prev, groupName]
    );
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleImagePanelClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-400 text-white">
      <Topbar />
      <Groups
        uniqueGroups={uniqueGroups}
        expandedGroups={expandedGroups}
        handleGroupExpand={handleGroupExpand}
        properties={properties}
        handleImageClick={handleImageClick}
      />
      <ImagePanel
        selectedImage={selectedImage}
        onClose={handleImagePanelClose}
      />
    </div>
  );
}

export default App;
