import classes from "./LoadingSpinner.module.css";
import { Loader } from "react-feather";

const LoadingSpinner = () => {
  return (
    <div className={classes.wrapper}>
      <Loader className={classes.loader}></Loader>
    </div>
  );
};

export default LoadingSpinner;
