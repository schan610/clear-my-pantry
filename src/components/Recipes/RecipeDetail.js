import classes from "./RecipeDetail.module.css";
import RecipeDetailSummary from "./RecipeDetailSummary";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import { useEffect } from "react";

import { AlertCircle } from "react-feather";

const RecipeDetail = () => {
  const param = useParams();
  const {
    sendRequest,
    status,
    error,
    data: recipeDetail,
  } = useHttp(getRecipeDetail);
  let content;
  // Render recipe details here
  useEffect(() => {
    sendRequest(param.recipeId);
  }, [sendRequest, param.recipeId]);

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
