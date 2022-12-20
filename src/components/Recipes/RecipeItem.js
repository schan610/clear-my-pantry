import { PlusCircle, MinusCircle } from "react-feather";
import classes from "./RecipeItem.module.css";

const RecipeItem = () => {
  return (
    <>
      <div className={classes["recipe__item"]}>
        <div className={classes["img-wrapper"]}>
          <img
            src="https://spoonacular.com/recipeImages/73420-312x231.jpg"
            alt="Recipe"
          />
        </div>

        <h2>Recipe Title</h2>
        <div className={classes["recipe__summary"]}>
          <div className={classes["recipe__uses"]}>
            <p>Uses</p>
            <ul>
              <li>
                <PlusCircle className={classes.plus} />
                Onion
              </li>
              <li>
                <PlusCircle className={classes.plus} />
                Garlic
              </li>
              <li>
                <PlusCircle className={classes.plus} />
                and 4 more
              </li>
            </ul>
          </div>
          <div className={classes["recipe__missing"]}>
            <p>Missing</p>
            <ul>
              <li>
                <MinusCircle className={classes.minus} /> Onion Soup
              </li>
              <li>
                <MinusCircle className={classes.minus} /> Garlic
              </li>
              <li>
                <MinusCircle className={classes.minus} /> and 4 more
              </li>
            </ul>
          </div>
        </div>

        <button className={classes.btn}>Recipe Details</button>
      </div>
      <div className={classes["recipe__item"]}>
        <div className={classes["img-wrapper"]}>
          <img
            src="https://spoonacular.com/recipeImages/73420-312x231.jpg"
            alt="Recipe"
          />
        </div>

        <h2>Recipe Title</h2>
        <div className={classes["recipe__summary"]}>
          <div className={classes["recipe__uses"]}>
            <p>Uses</p>
            <ul>
              <li>
                <PlusCircle className={classes.plus} />
                Onion
              </li>
              <li>
                <PlusCircle className={classes.plus} />
                Garlic
              </li>
              <li>
                <PlusCircle className={classes.plus} />
                and 4 more
              </li>
            </ul>
          </div>
          <div className={classes["recipe__missing"]}>
            <p>Missing</p>
            <ul>
              <li>
                <MinusCircle className={classes.minus} /> Onion Soup
              </li>
              <li>
                <MinusCircle className={classes.minus} /> Garlic
              </li>
              <li>
                <MinusCircle className={classes.minus} /> and 4 more
              </li>
            </ul>
          </div>
        </div>

        <button className={classes.btn}>Recipe Details</button>
      </div>
      <div className={classes["recipe__item"]}>
        <div className={classes["img-wrapper"]}>
          <img
            src="https://spoonacular.com/recipeImages/73420-312x231.jpg"
            alt="Recipe"
          />
        </div>

        <h2>Recipe Title</h2>
        <div className={classes["recipe__summary"]}>
          <div className={classes["recipe__uses"]}>
            <p>Uses</p>
            <ul>
              <li>
                <PlusCircle className={classes.plus} />
                Onion
              </li>
              <li>
                <PlusCircle className={classes.plus} />
                Garlic
              </li>
              <li>
                <PlusCircle className={classes.plus} />
                and 4 more
              </li>
            </ul>
          </div>
          <div className={classes["recipe__missing"]}>
            <p>Missing</p>
            <ul>
              <li>
                <MinusCircle className={classes.minus} /> Onion Soup
              </li>
              <li>
                <MinusCircle className={classes.minus} /> Garlic
              </li>
              <li>
                <MinusCircle className={classes.minus} /> and 4 more
              </li>
            </ul>
          </div>
        </div>

        <button className={classes.btn}>Recipe Details</button>
      </div>
    </>
  );
};

export default RecipeItem;
