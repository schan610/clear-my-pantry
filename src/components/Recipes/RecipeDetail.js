import classes from "./RecipeDetail.module.css";
import RecipeDetailSummary from "./RecipeDetailSummary";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import { useEffect } from "react";

const RecipeDetail = (props) => {
  const param = useParams();
  const { sendRequest, status, data: recipeDetail } = useHttp(getRecipeDetail);
  let content;
  // Render recipe details here
  useEffect(() => {
    sendRequest(param.recipeId);
  }, [sendRequest, param.recipeId]);

  if (status === "completed") {
    console.log(recipeDetail.extendedIngredients);
    content = <RecipeDetailSummary data={recipeDetail} />;
  }
  return <div className={classes.detail}>{content}</div>;
};

export default RecipeDetail;
