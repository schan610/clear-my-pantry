import classes from "./PantryForm.module.css";
import { Search } from "react-feather";
import PantryAutoComplete from "./PantryAutoComplete";
const PantryForm = () => {
  return (
    <>
      <form className={classes.form}>
        <label> Select Ingredients</label>
        <div className={classes.wrapper}>
          <Search className={classes["feather-search"]} />
          <input
            type="te<PantryAutoComplete />xt"
            placeholder="Search for ingredients..."
          />
        </div>
      </form>
    </>
  );
};

export default PantryForm;
