import React, { createContext, useState } from "react";

export const GeneralSettingsContext = createContext();

const GeneralSettingsProvider = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedMenuOption, setIsSelectedMenuOption] = useState(undefined);

  const changeCollapseMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const changeSelectedMenuOption = (option) => {
    setIsSelectedMenuOption(option);
  };

  return (
    <GeneralSettingsContext.Provider
      value={{
        ...GeneralSettingsContext.value,
        panelCollapsed: isCollapsed,
        selectedMenuOption: selectedMenuOption,
        changeCollapseMenu: changeCollapseMenu,
        changeSelectedMenuOption: changeSelectedMenuOption,
      }}
    >
      {props.children}
    </GeneralSettingsContext.Provider>
  );
};

export default GeneralSettingsProvider;
