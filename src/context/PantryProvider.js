import { useReducer } from "react";
import PantryContext from "./PantryContext";

// This context api is used to keep track of the pantry state through multiple components
const defaultPantryState = {
  items: [],
};
const pantryReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updatedItems = state.items.concat(action.item);
      const updatedState = { ...state, items: updatedItems };
      return updatedState;
    }
    case "REMOVE": {
      const updatedItems = state.items.filter((ing) => ing.id !== action.id);
      const updatedState = { ...state, items: updatedItems };
      return updatedState;
    }

    default:
      return defaultPantryState;
  }
};

const PantryProvider = (props) => {
  const [pantryState, dispatch] = useReducer(pantryReducer, defaultPantryState);

  const addItemHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  const pantryContext = {
    items: pantryState.items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return <PantryContext.Provider value={pantryContext}>{props.children}</PantryContext.Provider>;
};

export default PantryProvider;
