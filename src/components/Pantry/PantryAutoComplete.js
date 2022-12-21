import classes from "./PantryAutoComplete.module.css";
import { ChevronRight } from "react-feather";
const PantryAutoComplete = () => {
  return (
    <ul className={classes["auto-box"]}>
      <li>
        <ChevronRight className={classes.chevron} />
        hello
      </li>
      <li>
        <ChevronRight className={classes.chevron} />
        Auto2
      </li>
      <li>
        <ChevronRight className={classes.chevron} />
        Auto3
      </li>
      <li>
        <ChevronRight className={classes.chevron} />
        Auto4
      </li>
    </ul>
  );
};

export default PantryAutoComplete;
