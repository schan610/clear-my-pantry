import classes from "./Pantry.module.css";
import PantryForm from "./PantryForm";
import PantryList from "./PantryList";

import { useContext } from "react";
import PantryContext from "../../context/PantryContext";

const Pantry = (props) => {
  const pantryCtx = useContext(PantryContext);
  const getNewItem = (item) => {
    // check if item already exists in pantry list
    const exists = pantryCtx.items.filter((ing) => ing.id === item.id);
    if (exists.length >= 1) {
      alert(`Ingredient already exists in pantry`);
      return;
    }
    // add item through context
    pantryCtx.addItem(item);
  };

  // check and pass current pantry to parent to generate recipes
  const generateRecipesHandler = () => {
    props.clicked(pantryCtx.items);
  };

  return (
    <div className={classes.pantry}>
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
