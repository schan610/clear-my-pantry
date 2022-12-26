import classes from "./Pantry.module.css";
import PantryForm from "./PantryForm";
import PantryList from "./PantryList";

import { useContext } from "react";
import PantryContext from "../../context/PantryContext";

const Pantry = () => {
  const pantryCtx = useContext(PantryContext);

  const getNewItem = (item) => {
    console.log(`clicked`);
    pantryCtx.addItem(item);
  };
  return (
    <div className={classes.pantry}>
      <div className={classes.header}>
        <h1>Your Ingredients</h1>
        <PantryForm addItem={getNewItem} />
      </div>

      <PantryList />

      <div className={classes["btn-wrapper"]}>
        <button className={classes.btn}>Generate Recipes</button>
      </div>
    </div>
  );
};

export default Pantry;
