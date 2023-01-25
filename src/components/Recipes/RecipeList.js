import classes from "./RecipeList.module.css";
import RecipeItem from "./RecipeItem";
import RecipesPagination from "./RecipesPagination";
import { useState } from "react";

// Set up recipe pagination functions
const RECIPES_PER_PAGE = 4;
const calcNumOfPages = (numRecipes) => {
  return Math.ceil(numRecipes / RECIPES_PER_PAGE);
};

const getCurRecipes = (recipes, curPage, numPages) => {
  const startingIndex = curPage * RECIPES_PER_PAGE - RECIPES_PER_PAGE;

  return curPage === numPages
    ? recipes.slice(startingIndex)
    : recipes.slice(startingIndex, startingIndex + RECIPES_PER_PAGE);
};

const RecipeList = (props) => {
  // state that re-evaluates component when user navigates recipe list
  const [curPage, setCurPage] = useState(1);
  const recipes = props.recipes;

  if (!recipes || recipes.length === 0) {
    return <p className={classes["list-msg"]}>No queries found</p>;
  }

  // update recipe list depending on curPage
  const numberOfPages = calcNumOfPages(recipes.length);
  const curRecipes = getCurRecipes(recipes, curPage, numberOfPages);

  // control number of pages to navigate and set curPage state
  const paginationHandler = (clicked) => {
    if (clicked === "right" && curPage < numberOfPages) setCurPage((prevState) => prevState + 1);
    if (clicked === "left" && curPage > 1) setCurPage((prevState) => prevState - 1);
  };

  return (
    <>
      <div className={classes["recipe__list"]}>
        {curRecipes.map((rec) => (
          <RecipeItem
            title={rec.title}
            key={rec.id}
            id={rec.id}
            img={rec.image}
            usedCount={rec.usedIngredientCount}
            missedCount={rec.missedIngredientCount}
          />
        ))}
        <RecipesPagination clicked={paginationHandler} curPage={curPage} numPages={numberOfPages} />
      </div>
    </>
  );
};

export default RecipeList;
