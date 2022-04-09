import { ActionButton } from "@fluentui/react";
import React, { useState, useEffect, useContext } from "react";
import { GeneralSettingsContext } from "../../Context/GeneralSettingsContext";

const AppMenuComponent = () => {
  const currentSettings = useContext(GeneralSettingsContext);
  const {
    selectedMenuOption,
    changeSelectedMenuOption,
  } = currentSettings;

  const onClickOptionMenu = (optionId) => {
    changeSelectedMenuOption(optionId);
  };

  return (
    <div className="">
      <br className="" />
      <ActionButton
        iconProps={{ iconName: "FavoriteStar" }}
        allowDisabledFocus
        onClick={() => onClickOptionMenu("A")}
      >
        Componente A
      </ActionButton>
      <br className="" />
      <ActionButton
        iconProps={{ iconName: "FavoriteStar" }}
        allowDisabledFocus
        onClick={() => onClickOptionMenu("B")}
      >
        Componente B
      </ActionButton>
      <br className="" />
      <ActionButton
        iconProps={{ iconName: "FavoriteStar" }}
        allowDisabledFocus
        onClick={() => onClickOptionMenu("C")}
      >
        Componente C
      </ActionButton>
    </div>
  );
};

export default AppMenuComponent;
