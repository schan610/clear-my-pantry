import { useReducer, useCallback } from "react";

/*  This custom hook retrieves a fetch api function to send request, stores and updates response status
 and returns fetch request data using useReducer */
function httpReducer(state, action) {
  switch (action.type) {
    case "SEND":
      return {
        data: null,
        error: null,
        status: "pending",
      };
    case "SUCCESS":
      return {
        data: action.responseData,
        error: null,
        status: "completed",
      };

    case "ERROR":
      return {
        data: null,
        error: action.errorMessage,
        status: "completed",
      };

    default:
      return state;
  }
}

//
function useHttp(requestFunction) {
  // set up default states
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: null,
    data: null,
    error: null,
  });

  // useCallback: prevent re-creation of request functions upon state changes with requestFunction
  // as a dependency.avoids unnecessary re-fetching.
  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  // return updated state
  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
