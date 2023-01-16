import classes from "./RecipeDetailSummary.module.css";
import RecipeIngredients from "./RecipeIngredients";
import { ArrowLeft } from "react-feather";
const RecipeDetailSummary = (props) => {
  const recipeData = props.data;
  return (
    <>
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
        <h1>{recipeData.title}</h1>

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
            {recipeData.extendedIngredients.map((ing) => (
              <RecipeIngredients name={ing.name} key={ing.id} />
            ))}
          </ul>
        </div>
      </div>
      <div className={classes["btn-wrapper"]}>
        <a className={classes.btn} href="#" data={props.title} target="_blank">
          Full Recipe Here
        </a>
      </div>
    </>
  );
};

export default RecipeDetailSummary;
