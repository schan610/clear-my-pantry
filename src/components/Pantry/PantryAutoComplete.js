import classes from "./PantryAutoComplete.module.css";
import { Plus } from "react-feather";

// DUMMY AUTO_COMPLETE SEARCH

const PantryAutoComplete = (props) => {
  if (!props.data) return;

  return (
    <ul className={classes["auto-box"]}>
      {props.data.map((ing, i) => {
        return (
          <li
            key={ing.id}
            onMouseDown={props.onAddItem.bind(this, ing)}
            className={classes[`${props.cursor === i ? "active" : null}`]}
          >
            <Plus className={classes.add} />
            {ing.name}
          </li>
        );
      })}
    </ul>
  );
};

export default PantryAutoComplete;
