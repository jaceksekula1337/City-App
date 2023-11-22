import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Property from "./Property";

const Groups = ({
  uniqueGroups,
  expandedGroups,
  handleGroupExpand,
  properties,
  handleImageClick,
}) => (
  <div className="flex">
    <div className="flex w-1/3 h-screen border-r shadow-2xl border-gray-950 bg-gray-800">
      <div className="pt-10 w-full">
        {uniqueGroups.map((group) => (
          <Accordion
            key={group}
            expanded={expandedGroups.includes(group)}
            onChange={() => handleGroupExpand(group)}
            className=" "
          >
            <AccordionSummary className="bg-gray-700 w-full shadow-2xl">
              {group}
            </AccordionSummary>
            <AccordionDetails className="bg-gray-300 shadow-2xl">
              <div>
                {properties
                  .filter((prop) => prop.group === group)
                  .map((property) => (
                    <Property
                      key={property.label}
                      property={property}
                      onImageClick={handleImageClick}
                    />
                  ))}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  </div>
);

export default Groups;
