import classes from "./Recipes.module.css";

import RecipeList from "./RecipeList";
import { getRecipes } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import { useEffect } from "react";

const Recipes = (props) => {
  const pantry = props.pantryItems;
  const { sendRequest, status, data: generatedRecipes } = useHttp(getRecipes);

  useEffect(() => {
    if (!pantry) return;
    sendRequest(pantry);
  }, [pantry, sendRequest]);

  let content = (
    <p className={classes["recipe-msg"]}>
      To get started, add the ingredients you want to use and click generate
      recipes.
    </p>
  );

  if (status === "pending") {
    content = <p>Loading</p>;
  }

  if (status === "completed") {
    content = <RecipeList recipes={generatedRecipes} />;
  }

  return (
    <div className={classes.recipes}>
      <div className={classes.header}>
        <h1>Recipes</h1>
      </div>
      {content}
    </div>
  );
};

export default Recipes;
