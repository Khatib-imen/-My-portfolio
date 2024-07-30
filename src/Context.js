import { createContext, useCallback, useReducer } from "react";

// Create Context
const ImenContext = createContext();

// Type
const type = {
  NAV: "NAV",
  TOGGLE: "TOGGLE",
};
const { NAV, TOGGLE } = type;

// Initial Value
const initialState = {
  nav: "home",
  toggle: false,
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case TOGGLE:
      return {
        ...state,
        toggle: payload,
      };
    default:
      return state;
  }
};

// Watson State
const ImenState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNav = useCallback((value, toggleValue) => {
    dispatch({
      type: NAV,
      payload: value,
    });
    dispatch({
      type: TOGGLE,
      payload: toggleValue,
    });
  }, []);

  const { nav, toggle } = state;
  return (
    <ImenContext.Provider
      value={{
        nav,
        changeNav,
        toggle,
      }}
    >
      {children}
    </ImenContext.Provider>
  );
};

export default ImenState;
export { ImenContext };
