import classes from "./PantryItem.module.css";
import { Plus, Minus } from "react-feather";

const PantryItem = () => {
  return (
    <li className={classes["pantry__item"]}>
      <Minus className={`${classes.feather} ${classes["feather-minus"]}`} />
      bok choy
    </li>
  );
};

export default PantryItem;
