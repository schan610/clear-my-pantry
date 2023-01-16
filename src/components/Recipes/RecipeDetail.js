import classes from "./RecipeDetail.module.css";
import { ArrowLeft } from "react-feather";
import { useParams } from "react-router-dom";

const RecipeDetail = (props) => {
  const param = useParams();
  // Render recipe details here

  return (
    <div className={classes.detail}>
      <div className={classes["img-wrapper"]}>
        <img
          src="https://spoonacular.com/recipeImages/716429-556x370.jpg"
          alt=""
        />
        <span className={classes.credits}>Image &copy; Full Belly Sisters</span>
      </div>
      <div className={classes["back-wrapper"]}>
        <button className={classes.back}>
          <ArrowLeft />
        </button>
      </div>

      <div className={classes.summary}>
        <h1>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</h1>

        <span className={classes.tags}>Vegetarian</span>

        <div className={classes["time-overview"]}>
          <p>
            Servings
            <span> 2</span>
          </p>
          <p>
            Ready in <span> 45m</span>
          </p>
        </div>
        <div className={classes.ingredients}>
          <h2>Ingredients</h2>
          <ul className={classes["ingredient-list"]}>
            <li>
              <span>Pasta</span>
            </li>
            <li>
              <span>Pasta</span>
            </li>
            <li>
              <span>Pasta</span>
            </li>
            <li>
              <span>Pasta</span>
            </li>
            <li>
              <span>Pasta</span>
            </li>

            <li>
              <span>Pasta</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["btn-wrapper"]}>
        <a className={classes.btn} href="#" data={props.title} target="_blank">
          Full Recipe Here
        </a>
      </div>
    </div>
  );
};

export default RecipeDetail;
