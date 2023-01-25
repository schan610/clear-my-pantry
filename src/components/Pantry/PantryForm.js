import classes from "./PantryForm.module.css";
import { Search } from "react-feather";
import PantryAutoComplete from "./PantryAutoComplete";

import { useState } from "react";

const PantryForm = (props) => {
  // state to track user input
  const [inputIngredient, setInputIngredient] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  // state to track current arrow navigation, serves as active list index
  const [cursor, setCursor] = useState(0);

  let autoCompleteData;

  const toggleFocusHandler = () => {
    setOnFocus((prevState) => !prevState);
  };

  const inputHandler = (e) => {
    setInputIngredient(e.target.value);
  };

  const addItem = (ing) => {
    props.addItem({
      name: ing.name,
      id: ing.id,
      //reformat name for api endpoint
      apiJoin: ing.name.replace(/\s/g, "+"),
    });
    submitHandler();
  };
  const getAutoCompleteData = (data) => {
    autoCompleteData = data;
  };

  // Handle keypresses for search navigation
  const keyHandler = (e, data = autoCompleteData) => {
    if (e.key === "ArrowDown") {
      cursor >= data.length - 1 ? setCursor(0) : setCursor((prevState) => prevState + 1);
    }
    if (e.key === "ArrowUp") {
      cursor <= 0 ? setCursor(data.length - 1) : setCursor((prevState) => prevState - 1);
    }
    if (data && data.length !== 0 && e.key === "Enter") {
      addItem(data[cursor]);
    }
  };

  const submitHandler = (e) => {
    if (e) e.preventDefault();
    // restart states
    setCursor(0);
    setInputIngredient("");
  };

  return (
    <>
      <form onSubmit={submitHandler} className={classes.wrapper}>
        <label> Select Ingredients</label>

        <Search className={classes["feather-search"]} />
        <input
          type="text"
          placeholder="Search for ingredients..."
          onChange={inputHandler}
          value={inputIngredient}
          onBlur={toggleFocusHandler}
          onFocus={toggleFocusHandler}
          onKeyDown={keyHandler}
        />

        {onFocus && inputIngredient.trim() !== "" && (
          <PantryAutoComplete
            cursor={cursor}
            input={inputIngredient}
            addItem={addItem}
            passData={getAutoCompleteData}
          />
        )}
      </form>
    </>
  );
};

export default PantryForm;
