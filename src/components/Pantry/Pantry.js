import classes from "./Pantry.module.css";
import PantryForm from "./PantryForm";
import PantryList from "./PantryList";
const Pantry = () => {
  return (
    <div className={classes.pantry}>
      <div className={classes.header}>
        <h1>Your Ingredients</h1>
        <PantryForm />
      </div>

      <PantryList />
    </div>
  );
};

export default Pantry;
