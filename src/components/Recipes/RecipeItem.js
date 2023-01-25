import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, MinusCircle } from "react-feather";
import classes from "./RecipeItem.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const RecipeItem = (props) => {
  // state to add loading spinner to loading images
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <>
      {/* Wrap recipe item as a link to recipe id upon user click as a route: allows for dynamic routes*/}
      <Link to={`/${props.id}`} data={props.title} className={classes["recipe__item"]}>
        {/* Remove loading spinner after onLoad event handler */}
        <div className={classes["loading-img"]} style={{ display: imgLoading ? "block" : "none" }}>
          <LoadingSpinner className={classes["center-loader"]} />
        </div>

        <div className={classes["img-wrapper"]} style={{ display: imgLoading ? "none" : "block" }}>
          <img onLoad={() => setImgLoading(false)} src={props.img} alt="Recipe" />
        </div>

        <div className={classes["recipe__summary"]}>
          <h2>{props.title}</h2>
          <ul>
            <li>
              <PlusCircle className={classes.plus} />
              {`Uses ${props.usedCount} ${
                props.usedCount > 1 || props.usedCount === 0 ? "ingredients" : "ingredient"
              }`}
            </li>
            <li>
              <MinusCircle className={classes.minus} />
              {`Missing ${props.missedCount}  ${
                props.missedCount > 1 || props.usedCount === 0 ? "ingredients" : "ingredient"
              }`}
            </li>
          </ul>
        </div>
      </Link>
    </>
  );
};

export default RecipeItem;
