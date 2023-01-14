import classes from "./PantryForm.module.css";
import { Search } from "react-feather";
import PantryAutoComplete from "./PantryAutoComplete";

import { useEffect, useState } from "react";
import { getAutoComplete } from "../../lib/api";
import useHttp from "../../hooks/use-http";

const PantryForm = (props) => {
  const [inputIngredient, setInputIngredient] = useState("");

  const [cursor, setCursor] = useState(0);
  const [onFocus, setOnFocus] = useState(false);

  const { sendRequest, data: autoCompleteData } = useHttp(
    getAutoComplete,
    false
  );

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
    }, 300);

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
    submitHandler();
  };

  const keyHandler = (e) => {
    if (e.key === "ArrowDown") {
      cursor >= 4 ? setCursor(0) : setCursor((prevState) => prevState + 1);
    }
    if (e.key === "ArrowUp") {
      cursor <= 0 ? setCursor(4) : setCursor((prevState) => prevState - 1);
    }
    if (autoCompleteData.length !== 0 && e.key === "Enter") {
      addItem(autoCompleteData[cursor]);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setCursor(0);
    setInputIngredient("");
  };

  return (
    <>
      <form onSubmit={submitHandler} className={classes.wrapper}>
        <label> Select Ingredients</label>
        {/* <p className={classes.msg}>Ingredient already in your pantry</p> */}
        <Search className={classes["feather-search"]} />
        <input
          type="text"
          value={inputIngredient}
          onBlur={toggleFocusHandler}
          onFocus={toggleFocusHandler}
          onChange={inputHandler}
          onKeyDown={keyHandler}
          placeholder="Search for ingredients..."
        />

        {onFocus && (
          <PantryAutoComplete
            data={autoCompleteData}
            onAddItem={addItem}
            cursor={cursor}
          />
        )}
      </form>
    </>
  );
};

export default PantryForm;
