import classes from "./RecipeList.module.css";
import RecipeItem from "./RecipeItem";

const RecipeList = (props) => {
  if (props.recipes.length === 0) {
    return <p className={classes["list-msg"]}>No queries found</p>;
  }
  return (
    <div className={classes["recipe__list"]}>
      {props.recipes.map((rec) => (
        <RecipeItem
          title={rec.title}
          key={rec.id}
          img={rec.image}
          usedCount={rec.usedIngredientCount}
          missedCount={rec.missedIngredientCount}
        />
      ))}
    </div>
  );
};

export default RecipeList;
