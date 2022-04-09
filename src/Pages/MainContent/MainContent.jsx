import React, { useContext } from "react";
import { IconButton } from "@fluentui/react";

import AppMenuComponent from "../AppMenu/AppMenu";
import ContentView from "../ContentView/ContentView";
import { GeneralSettingsContext } from "../../Context/GeneralSettingsContext";

const MainContentComponent = () => {
  const { panelCollapsed, changeCollapseMenu } = useContext(
    GeneralSettingsContext
  );
  return (
    <div className="">
      <br className="" />
      <IconButton
        iconProps={{ iconName: "GlobalNavButton" }}
        onClick={changeCollapseMenu}
      />
      <div
        className=""
        style={{ display: "grid", gridTemplateColumns: "25% 75%" }}
      >
        {!panelCollapsed && <AppMenuComponent></AppMenuComponent>}
        <ContentView></ContentView>
      </div>
    </div>
  );
};

export default MainContentComponent;
