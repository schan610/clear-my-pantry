import classes from "./PantryForm.module.css";
import { Search } from "react-feather";
import PantryAutoComplete from "./PantryAutoComplete";

import { useState } from "react";

const PantryForm = (props) => {
  const [inputIngredient, setInputIngredient] = useState("");
  const [cursor, setCursor] = useState(0);

  let autoCompleteData;

  const inputHandler = (e) => {
    setInputIngredient(e.target.value);
  };

  const addItem = (ing) => {
    props.addItem({
      name: ing.name,
      id: ing.id,
      apiJoin: ing.name.replace(/\s/g, "+"),
    });
    submitHandler();
  };
  const getAutoCompleteData = (data) => {
    autoCompleteData = data;
  };

  const keyHandler = (e, data = autoCompleteData) => {
    if (e.key === "ArrowDown") {
      cursor >= 4 ? setCursor(0) : setCursor((prevState) => prevState + 1);
    }
    if (e.key === "ArrowUp") {
      cursor <= 0 ? setCursor(4) : setCursor((prevState) => prevState - 1);
    }
    if (data && data.length !== 0 && e.key === "Enter") {
      addItem(data[cursor]);
    }
  };

  const submitHandler = (e) => {
    if (e) e.preventDefault();
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
          value={inputIngredient}
          onChange={inputHandler}
          onKeyDown={keyHandler}
          placeholder="Search for ingredients..."
        />

        {inputIngredient.trim() !== "" && (
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
