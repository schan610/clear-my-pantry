import classes from "./PantryItem.module.css";
import { Minus } from "react-feather";

const PantryItem = (props) => {
  return (
    <li className={classes["pantry__item"]}>
      <Minus className={`${classes.feather} ${classes["feather-minus"]}`} />
      {props.name}
    </li>
  );
};

export default PantryItem;
