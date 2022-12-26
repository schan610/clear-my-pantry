import classes from "./Pantry.module.css";
import PantryForm from "./PantryForm";
import PantryList from "./PantryList";

import { useContext } from "react";
import PantryContext from "../../context/PantryContext";
import { getRecipes } from "../../lib/api";
import useHttp from "../../hooks/use-http";
const Pantry = () => {
  const {
    sendRequest,
    status,
    data: generatedRecipes,
  } = useHttp(getRecipes, false);

  const pantryCtx = useContext(PantryContext);

  const getNewItem = (item) => {
    // check if item already exists
    const exists = pantryCtx.items.filter((ing) => ing.id === item.id);
    if (exists.length >= 1) {
      alert(`Ingredient already exists in pantry`);
      return;
    }

    pantryCtx.addItem(item);
  };

  const generateRecipesHandler = () => {
    sendRequest(pantryCtx.items);
  };

  return (
    <div className={classes.pantry}>
      {/* <div className={classes["pantry__message"]}>
        <p>Ingredient already in pantry</p>
      </div> */}

      <div className={classes.header}>
        <h1>Your Ingredients</h1>
        <PantryForm addItem={getNewItem} />
      </div>

      <PantryList />

      <div className={classes["btn-wrapper"]}>
        <button onClick={generateRecipesHandler} className={classes.btn}>
          Generate Recipes
        </button>
      </div>
    </div>
  );
};

export default Pantry;
