import { PlusCircle, MinusCircle } from "react-feather";
import classes from "./RecipeList.module.css";
import RecipeItem from "./RecipeItem";

const RecipeList = (props) => {
  return (
    <div className={classes["recipe__list"]}>
      <RecipeItem />
    </div>
  );
};

export default RecipeList;
