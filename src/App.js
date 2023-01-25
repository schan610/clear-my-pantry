import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import Pantry from "./components/Pantry/Pantry";
import Recipes from "./components/Recipes/Recipes";
import RecipeDetail from "./components/Recipes/RecipeDetail";

import PantryProvider from "./context/PantryProvider";

function App() {
  const [pantry, setPantry] = useState(null);

  // listen for onClick on generate recipes to pass on to Recipes component
  const clickedGenerateRecipesHandler = (pantryItems) => {
    setPantry(pantryItems);
  };

  return (
    <PantryProvider>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Pantry clicked={clickedGenerateRecipesHandler} />
                <Recipes pantryItems={pantry} />
              </>
            }
          ></Route>
          <Route path="/:recipeId" element={<RecipeDetail />}></Route>
        </Routes>
      </Layout>
    </PantryProvider>
  );
}

export default App;
