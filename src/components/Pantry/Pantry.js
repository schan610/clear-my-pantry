import classes from "./Pantry.module.css";
import PantryForm from "./PantryForm";
import PantryList from "./PantryList";

// DUMMY AUTOCOMPLETE SEARCH

const Pantry = () => {
  return (
    <div className={classes.pantry}>
      <div className={classes.header}>
        <h1>Your Ingredients</h1>
        <PantryForm />
      </div>

      <PantryList />

      <div className={classes["btn-wrapper"]}>
        <button className={classes.btn}>Generate Recipes</button>
      </div>
    </div>
  );
};

export default Pantry;
