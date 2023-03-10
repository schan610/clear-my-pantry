import classes from "./Recipes.module.css";

import LoadingSpinner from "../UI/LoadingSpinner";
import RecipeList from "./RecipeList";
import { getRecipes } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import { useEffect } from "react";

import { AlertCircle } from "react-feather";

const Recipes = (props) => {
  const pantry = props.pantryItems;
  // useHttp hook to handle fetch api, data,  and display loading status or errors on UI
  const { sendRequest, status, error, data: generatedRecipes } = useHttp(getRecipes);

  // Only send requests when pantry items have changed
  useEffect(() => {
    // Guard statement: pantry is not in default state (null)
    if (!pantry) return;
    sendRequest(pantry);
  }, [pantry, sendRequest]);

  let content = (
    <p className={classes["recipe-msg"]}>
      To get started, add the ingredients you want to use and click generate recipes.
    </p>
  );

  // Handle api response to UI
  if (status === "pending") {
    content = (
      <div className={classes.loader}>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed") {
    content = <RecipeList recipes={generatedRecipes} />;
  }

  if (error) {
    content = (
      <p className={classes.error}>
        <AlertCircle className={classes["error__icon"]} />
        {error}
      </p>
    );
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
