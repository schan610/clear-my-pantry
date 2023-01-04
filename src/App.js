import { useState } from "react";
import "./App.css";

import Layout from "./components/Layout/Layout";
import Pantry from "./components/Pantry/Pantry";
import Recipes from "./components/Recipes/Recipes";

import PantryProvider from "./context/PantryProvider";

// Might need a global state (context API) to store Pantry updates and recipes....
function App() {
  const [pantry, setPantry] = useState(undefined);
  const clickedGenerateRecipesHandler = (pantryItems) => {
    setPantry(pantryItems);
  };

  return (
    <PantryProvider>
      <Layout>
        <Pantry clicked={clickedGenerateRecipesHandler} />
        <Recipes pantryItems={pantry} />
      </Layout>
    </PantryProvider>
  );
}

export default App;
