import React, { useContext } from 'react';
import { GeneralSettingsContext } from '../../Context/GeneralSettingsContext';

const ComponentA = () => {
    return <div className="">
        <h1 className="">I'm Component A</h1>
    </div>
}

const ComponentB = () => {
    return <div className="">
        <h1 className="">I'm Component B</h1>
    </div>
}

const ComponentC = () => {
    return <div className="">
        <h1 className="">I'm Component C</h1>
    </div>
}

const ContentView = () => {
    const GeneralSettings = useContext(GeneralSettingsContext);
    const{selectedMenuOption} =  GeneralSettings;

    return(
        <div className="">
            {selectedMenuOption && selectedMenuOption === 'A' && <ComponentA />}
            {selectedMenuOption && selectedMenuOption === 'B' && <ComponentB />}
            {selectedMenuOption && selectedMenuOption === 'C' && <ComponentC />}
        </div>
    );
}

export default ContentView;