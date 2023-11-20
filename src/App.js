import React, { useState } from "react";
import { useSelector } from "react-redux";
import Property from "./Property";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
function App() {
  const properties = useSelector((state) => state.data.properties);

  const uniqueGroups = Array.from(
    new Set(properties.map((prop) => prop.group))
  );

  const [expandedGroups, setExpandedGroups] = useState([]);

  const handleGroupExpand = (groupName) => {
    const isGroupExpanded = expandedGroups.includes(groupName);
    setExpandedGroups((prev) =>
      isGroupExpanded
        ? prev.filter((group) => group !== groupName)
        : [...prev, groupName]
    );
  };

  return (
    <div className="bg-gray-400 text-white">
      <div className="w-full bg-gray-900 py-10 pl-3 border-b border-gray-950 shadow-md">
        Topbar
      </div>
      <div className="flex">
        <div className="flex w-1/3 h-screen border-r shadow-2xl border-gray-950  bg-gray-800">
          <div className="pt-10 w-full">
            {uniqueGroups.map((group) => (
              <Accordion
                key={group}
                expanded={expandedGroups.includes(group)}
                onChange={() => handleGroupExpand(group)}
                className=" "
              >
                <AccordionSummary className="bg-gray-500">
                  {group}
                </AccordionSummary>
                <AccordionDetails className="bg-gray-300">
                  <div>
                    {properties
                      .filter((prop) => prop.group === group)
                      .map((property) => (
                        <Property key={property.label} property={property} />
                      ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
        <div className=" "> Chciałbym zeby tu sie wysietlal obrazek</div>
      </div>
    </div>
  );
}

export default App;
