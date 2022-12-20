import classes from "./PantryForm.module.css";
import { Search } from "react-feather";
const PantryForm = () => {
  return (
    <>
      <form className={classes.form}>
        <label> Select Ingredients</label>
        <Search className={classes["feather-search"]} />
        <input type="text" placeholder="Search for ingredients..." />

        <button className={classes.btn}>Generate Recipes</button>
      </form>
    </>
  );
};

export default PantryForm;
