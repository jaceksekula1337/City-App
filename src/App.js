// App.js
import React from "react";
import { useSelector } from "react-redux";
import Property from "./Property";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

function App() {
  const properties = useSelector((state) => state.data.properties);

  const groupedProperties = {};

  properties.properties.forEach((property) => {
    if (!groupedProperties[property.group]) {
      groupedProperties[property.group] = [];
    }
    groupedProperties[property.group].push(property);
  });

  return (
    <div className="App">
      {Object.entries(groupedProperties).map(([groupName, groupProperties]) => (
        <ExpansionPanel key={groupName}>
          <ExpansionPanelSummary>{groupName}</ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              {groupProperties.map((property) => (
                <Property key={property.name} property={property} />
              ))}
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}

export default App;
