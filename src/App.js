import "./App.css";

import Layout from "./components/Layout/Layout";
import Pantry from "./components/Pantry/Pantry";
import Recipes from "./components/Recipes/Recipes";

import PantryProvider from "./context/PantryProvider";

// Might need a global state (context API) to store Pantry updates and recipes....
function App() {
  return (
    <PantryProvider>
      <Layout>
        <Pantry />
        <Recipes />
      </Layout>
    </PantryProvider>
  );
}

export default App;
