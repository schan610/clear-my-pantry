import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, MinusCircle } from "react-feather";
import classes from "./RecipeItem.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const RecipeItem = (props) => {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <>
      <div className={classes["recipe__item"]}>
        <div
          className={classes["loading-img"]}
          style={{ display: imgLoading ? "block" : "none" }}
        >
          <LoadingSpinner className={classes["center-loader"]} />
        </div>

        <div
          className={classes["img-wrapper"]}
          style={{ display: imgLoading ? "none" : "block" }}
        >
          <img
            onLoad={() => setImgLoading(false)}
            src={props.img}
            alt="Recipe"
          />
        </div>

        <h2>{props.title}</h2>
        <div className={classes["recipe__summary"]}>
          <ul>
            <li>
              <PlusCircle className={classes.plus} />
              {`Uses ${props.usedCount} ${
                props.usedCount > 1 || props.usedCount === 0
                  ? "ingredients"
                  : "ingredient"
              }`}
            </li>
            <li>
              <MinusCircle className={classes.minus} />
              {`Missing ${props.missedCount}  ${
                props.missedCount > 1 || props.usedCount === 0
                  ? "ingredients"
                  : "ingredient"
              }`}
            </li>
          </ul>

          <div className={classes["btn-wrapper"]}>
            <Link
              className={classes.btn}
              to={`/${props.id}`}
              data={props.title}
            >
              Recipe Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeItem;
