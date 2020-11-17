import { createContext, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, items: [...state.items, ...action.value] };
    case "clear":
      return { ...state, items: [] };
    default:
      throw new Error();
  }
}

const ListContext = createContext({
  items: [],
  addFn: () => {},
  clearFn: () => {},
});

export const ListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
  });

  return (
    <ListContext.Provider
      value={{
        ...state,
        addFn: (items) => dispatch({ type: "add", value: items }),
        clearFn: () => dispatch({ type: "clear" }),
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListContext;
