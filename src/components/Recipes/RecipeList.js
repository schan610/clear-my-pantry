import classes from "./RecipeList.module.css";
import RecipeItem from "./RecipeItem";
import RecipesPagination from "./RecipesPagination";
import { useState } from "react";

const RECIPES_PER_PAGE = 3;

const calcNumOfPages = (numRecipes) => {
  return Math.ceil(numRecipes / RECIPES_PER_PAGE);
};

const calcViewRecipes = (curPage) => {
  const startingIndex = curPage * RECIPES_PER_PAGE - RECIPES_PER_PAGE;
  return startingIndex;
};

const getCurRecipes = (recipes, startingIndex, curPage, numPages) => {
  let curRecipes = [];
  if (curPage === numPages) {
    curRecipes = recipes.slice(startingIndex);
    return curRecipes;
  }
  for (let i = startingIndex; i <= startingIndex + 2; i++) {
    curRecipes.push(recipes[i]);
  }
  return curRecipes;
};

const RecipeList = (props) => {
  const [curPage, setCurPage] = useState(1);

  const recipes = props.recipes;

  if (recipes.length === 0) {
    return <p className={classes["list-msg"]}>No queries found</p>;
  }
  const numberOfPages = calcNumOfPages(recipes.length);
  const startingIndex = calcViewRecipes(curPage);

  const curRecipes = getCurRecipes(
    recipes,
    startingIndex,
    curPage,
    numberOfPages
  );

  const paginationHandler = (clicked) => {
    if (clicked === "right" && curPage < numberOfPages)
      setCurPage((prevState) => prevState + 1);
    if (clicked === "left" && curPage > 1)
      setCurPage((prevState) => prevState - 1);
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
        <RecipesPagination
          clicked={paginationHandler}
          curPage={curPage}
          numPages={numberOfPages}
        />
      </div>
    </>
  );
};

export default RecipeList;
