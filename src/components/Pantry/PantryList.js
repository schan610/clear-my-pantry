import classes from "./PantryList.module.css";
import PantryItem from "./PantryItem";
const PantryList = () => {
  return (
    <div className={classes["pantry__list"]}>
      <ul>
        <PantryItem />
      </ul>
    </div>
  );
};

export default PantryList;
