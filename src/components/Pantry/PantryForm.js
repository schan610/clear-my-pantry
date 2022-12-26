import classes from "./PantryForm.module.css";
import { Search } from "react-feather";
import PantryAutoComplete from "./PantryAutoComplete";

import { useEffect, useState } from "react";
import { getAutoComplete } from "../../lib/api";
import useHttp from "../../hooks/use-http";

const PantryForm = (props) => {
  const [inputIngredient, setInputIngredient] = useState("");
  const [onFocus, setOnFocus] = useState(false);

  const {
    sendRequest,
    status,
    data: autoCompleteData,
  } = useHttp(getAutoComplete, false);

  const toggleFocusHandler = () => {
    setOnFocus((prevState) => !prevState);
  };

  const inputHandler = (e) => {
    setInputIngredient(e.target.value);
  };

  useEffect(() => {
    // Update search prediction after given time passed
    const debounceTimer = setTimeout(() => {
      sendRequest(inputIngredient);
    }, 200);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [inputIngredient, sendRequest]);

  const addItem = (ing) => {
    props.addItem({
      name: ing.name,
      id: ing.id,
      apiJoin: ing.name.replace(/\s/g, "+"),
    });
  };

  return (
    <>
      <form className={classes.wrapper}>
        <label> Select Ingredients</label>
        {/* <p className={classes.msg}>Ingredient already in your pantry</p> */}
        <Search className={classes["feather-search"]} />
        <input
          onBlur={toggleFocusHandler}
          onFocus={toggleFocusHandler}
          onChange={inputHandler}
          type="text"
          placeholder="Search for ingredients..."
        />

        {onFocus && (
          <PantryAutoComplete
            data={autoCompleteData}
            status={status}
            onAddItem={addItem}
          />
        )}
      </form>
    </>
  );
};

export default PantryForm;
