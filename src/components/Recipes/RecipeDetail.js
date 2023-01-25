import classes from "./RecipeDetail.module.css";
import { AlertCircle } from "react-feather";
import LoadingSpinner from "../UI/LoadingSpinner";
import RecipeDetailSummary from "./RecipeDetailSummary";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getRecipeDetail } from "../../lib/api";
import useHttp from "../../hooks/use-http";

const RecipeDetail = () => {
  // get recipeId with useParams
  const param = useParams();
  const { sendRequest, status, error, data: recipeDetail } = useHttp(getRecipeDetail);

  // Render recipe details on page load
  useEffect(() => {
    sendRequest(param.recipeId);
  }, [sendRequest, param.recipeId]);

  let content;
  if (status === "pending") {
    content = (
      <div className={classes.loader}>
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "completed") {
    content = <RecipeDetailSummary data={recipeDetail} />;
  }

  if (error) {
    content = (
      <p className={classes.error}>
        <AlertCircle className={classes["error__icon"]} />
        {error}
      </p>
    );
  }
  return <div className={classes.detail}>{content}</div>;
};

export default RecipeDetail;
