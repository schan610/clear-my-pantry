import classes from "./PantryAutoComplete.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import { Plus, AlertCircle } from "react-feather";
import { getAutoComplete } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import { useEffect } from "react";

const PantryAutoComplete = (props) => {
  const { sendRequest, status, error, data: autoCompleteData } = useHttp(getAutoComplete);

  // Prevent from calling multiple inputs with timer
  useEffect(() => {
    // Update search prediction after given time passed
    const debounceTimer = setTimeout(() => {
      sendRequest(props.input);
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [props.input, sendRequest]);

  let content;
  if (status === "pending") content = <LoadingSpinner />;

  if (error)
    content = (
      <p>
        <AlertCircle /> {error}
      </p>
    );

  if (autoCompleteData && status === "completed") {
    content = autoCompleteData.map((ing, i) => {
      return (
        <li
          key={ing.id}
          className={classes[`${props.cursor === i ? "active" : null}`]}
          onMouseDown={() => props.addItem(ing)}
        >
          <Plus className={classes.add} />
          {ing.name}
        </li>
      );
    });
    // Passing current autocomplete list to PantryForm
    props.passData(autoCompleteData);
  }

  if (status === "completed" && autoCompleteData.length === 0)
    content = <p>Could not find ingredient</p>;

  return <ul className={classes["auto-box"]}>{content}</ul>;
};

export default PantryAutoComplete;
