import classes from "./RecipeDetailSummary.module.css";
import RecipeIngredients from "./RecipeIngredients";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";

const tags = [
  { tagName: "vegan", name: "Vegan", style: "vegan" },
  { tagName: "vegetarian", name: "Vegetarian", style: "vegetarian" },
  { tagName: "glutenFree", name: "Gluten Free", style: "gluten-free" },
  { tagName: "dairyFree", name: "Dairy Free", style: "dairy-free" },
];

const RecipeDetailSummary = (props) => {
  const recipeData = props.data;

  let showTags = [];
  tags.forEach((tag) => {
    if (!recipeData[tag.tagName]) return;
    const style = tag.style;
    showTags.push(
      <span className={`${classes.tag} ${classes[style]}`} key={tag.tagName}>
        {tag.name}
      </span>
    );
  });

  return (
    <>
      <div className={classes["img-wrapper"]}>
        <img src={recipeData.image} alt={recipeData.title} />
        <span className={classes.credits}>
          Image &copy; {recipeData.creditsText}
        </span>
      </div>

      <div className={classes.summary}>
        <h1>{recipeData.title}</h1>

        <div className={classes.tags}>{showTags}</div>

        <div className={classes["time-overview"]}>
          <p>
            Servings
            <span> {recipeData.servings}</span>
          </p>
          <p>
            Ready in <span> {recipeData.readyInMinutes}m</span>
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
        <div className={classes["btn-wrapper"]}>
          <a
            className={classes.btn}
            href={recipeData.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Full Recipe Here
          </a>
        </div>
      </div>

      <div className={classes["back-wrapper"]}>
        <Link to={"/"} className={classes.back}>
          <ArrowLeft />
        </Link>
      </div>
    </>
  );
};

export default RecipeDetailSummary;
