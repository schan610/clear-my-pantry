import classes from "./PantryForm.module.css";
import { Search } from "react-feather";
import PantryAutoComplete from "./PantryAutoComplete";

import { useEffect, useState } from "react";
import { getAutoComplete } from "../../lib/api";
import useHttp from "../../hooks/use-http";

const PantryForm = () => {
  const [inputIngredient, setInputIngredient] = useState("");

  const { sendRequest, data: autoCompleteData } = useHttp(getAutoComplete);

  const inputHandler = (e) => {
    setInputIngredient(e.target.value);
  };

  useEffect(() => {
    // Update search prediction after given time passed
    const timer = setTimeout(() => {
      sendRequest(inputIngredient);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [inputIngredient]);

  // Submit Handler: add input to pantry
  const submitHandler = (e) => {
    e.preventDefault();

    // Add some validation

    // Add to pantry here
  };
  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <label> Select Ingredients</label>
        <div className={classes.wrapper}>
          <Search className={classes["feather-search"]} />
          <input
            onChange={inputHandler}
            type="text"
            placeholder="Search for ingredients..."
          />

          {autoCompleteData && <PantryAutoComplete data={autoCompleteData} />}
          {/* {setShowAutoComplete &&
          autoCompleteData &&
          inputIngredient.trim() !== "" ? (
            <PantryAutoComplete data={autoCompleteData} />
          ) : null} */}
        </div>
      </form>
    </>
  );
};

export default PantryForm;
