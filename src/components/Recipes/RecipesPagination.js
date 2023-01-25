import classes from "./RecipesPagination.module.css";
import { ArrowRightCircle, ArrowLeftCircle } from "react-feather";
const RecipesPagination = (props) => {
  return (
    <div className={classes.pagination}>
      <ArrowLeftCircle className={classes.icon} onClick={() => props.clicked(`left`)} />

      <span>{`Page ${props.curPage} of ${props.numPages}`}</span>

      <ArrowRightCircle className={classes.icon} onClick={() => props.clicked(`right`)} />
    </div>
  );
};

export default RecipesPagination;
