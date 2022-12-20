import classes from "./PantryItem.module.css";
import { Plus, Minus } from "react-feather";

const PantryItem = () => {
  return (
    <li className={classes["pantry__item"]}>
      <Plus className={`${classes.feather} ${classes["feather-plus"]}`} />
      bok choy
    </li>
  );
};

export default PantryItem;
