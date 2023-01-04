import classes from "./LoadingSpinner.module.css";
import { Loader } from "react-feather";

const LoadingSpinner = () => {
  return <Loader className={classes.loader}></Loader>;
};

export default LoadingSpinner;
