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
    console.log(updateState);
    return updateState;
  }
  // if (action.type === "REMOVE") {
  //   const item = action.item;
  //   const updatedItems = state.items.concat(item);
  //   const updateState = { ...state, items: updatedItems };
  //   console.log(updateState);
  //   return updateState;
  // }

  return defaultPantryState;
};

const PantryProvider = (props) => {
  const [pantryState, dispatch] = useReducer(pantryReducer, defaultPantryState);

  const addItemHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const pantryContext = {
    items: pantryState.items,
    addItem: addItemHandler,
  };
  return (
    <PantryContext.Provider value={pantryContext}>
      {props.children}
    </PantryContext.Provider>
  );
};

export default PantryProvider;
