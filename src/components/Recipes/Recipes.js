import classes from "./Recipes.module.css";

import RecipeList from "./RecipeList";
const Recipes = () => {
  return (
    <div className={classes.recipes}>
      <div className={classes.header}>
        <h1>Recipes</h1>
      </div>
      {/* <p>
          To get started, add the ingredients you want to use and click generate
          recipes.
        </p> */}
      <RecipeList />
    </div>
  );
};

export default Recipes;
