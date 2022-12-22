import "./App.css";

import Layout from "./components/Layout/Layout";
import Pantry from "./components/Pantry/Pantry";
import Recipes from "./components/Recipes/Recipes";

// Might need a global state (context API) to store Pantry updates and recipes....
function App() {
  return (
    <Layout>
      <Pantry />
      <Recipes />
    </Layout>
  );
}

export default App;
