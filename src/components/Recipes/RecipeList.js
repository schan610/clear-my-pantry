import classes from "./RecipeList.module.css";
import RecipeItem from "./RecipeItem";

const RecipeList = (props) => {
  console.log(props.recipes);
  return (
    <div className={classes["recipe__list"]}>
      {props.recipes.map((rec) => (
        <RecipeItem title={rec.title} key={rec.id} />
      ))}
    </div>
  );
};

export default RecipeList;
