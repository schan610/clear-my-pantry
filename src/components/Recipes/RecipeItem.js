import { PlusCircle, MinusCircle } from "react-feather";
import classes from "./RecipeItem.module.css";

const RecipeItem = (props) => {
  return (
    <>
      <div className={classes["recipe__item"]}>
        <div className={classes["img-wrapper"]}>
          <img src={props.img} alt="Recipe" />
        </div>

        <h2>{props.title}</h2>
        <div className={classes["recipe__summary"]}>
          <ul>
            <li>
              <PlusCircle className={classes.plus} />
              {`Uses ${props.usedCount} ${
                props.usedCount > 1 || props.usedCount === 0
                  ? "ingredients"
                  : "ingredient"
              }`}
            </li>
            <li>
              <MinusCircle className={classes.minus} />
              {`Missing ${props.missedCount}  ${
                props.missedCount > 1 || props.usedCount === 0
                  ? "ingredients"
                  : "ingredient"
              }`}
            </li>
          </ul>

          <div className={classes["btn-wrapper"]}>
            <button className={classes.btn}>Recipe Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeItem;
