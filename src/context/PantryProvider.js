import { useReducer } from "react";
import PantryContext from "./PantryContext";

const defaultPantryState = {
  items: [],
};
const pantryReducer = (state, action) => {
  if (action.type === "ADD") {
    const item = action.item;
    const updatedItems = state.items.concat(item);
    const updateState = { ...state, items: updatedItems };

    return updateState;
  }
  if (action.type === "REMOVE") {
    const updatedItems = state.items.filter((ing) => ing.id !== action.id);
    const updateState = { ...state, items: updatedItems };

    return updateState;
  }

  return defaultPantryState;
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
  return (
    <PantryContext.Provider value={pantryContext}>
      {props.children}
    </PantryContext.Provider>
  );
};

export default PantryProvider;
