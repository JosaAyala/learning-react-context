import logo from "./logo.svg";
import "./App.css";
import GeneralSettingsProvider from "./Context/GeneralSettingsContext";
import AppMenuComponent from "./Pages/AppMenu/AppMenu";
import MainContentComponent from "./Pages/MainContent/MainContent";

function App() {
  return (
    <div
      className="App"
      
    >
      <GeneralSettingsProvider>
        <MainContentComponent></MainContentComponent>
      </GeneralSettingsProvider>
    </div>
  );
}

export default App;
