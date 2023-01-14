import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [IsDarkMode, setDarkMode] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  function handleClick(){
    setDarkMode((IsDarkMode) => !IsDarkMode)
  }

  const appClass = IsDarkMode ? "App dark" : "App light"
  const text = IsDarkMode ? "Light Mode" : "Dark Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{text}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;