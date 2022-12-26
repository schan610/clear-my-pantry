import classes from "./PantryList.module.css";
import PantryItem from "./PantryItem";
import { useContext } from "react";
import PantryContext from "../../context/PantryContext";

const PantryList = (props) => {
  const pantryCtx = useContext(PantryContext);

  const removeItemHandler = (id) => {
    console.log(id);
    pantryCtx.removeItem(id);
  };

  return (
    <div className={classes["pantry__list"]}>
      {pantryCtx.items.length <= 0 && (
        <p>Your pantry is empty, add some ingredients by searching above!</p>
      )}
      <ul>
        {pantryCtx.items.map((ing) => {
          return (
            <PantryItem
              name={ing.name}
              key={ing.id}
              id={ing.id}
              removeItem={removeItemHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PantryList;
