export const intialState = {
  menuitem: null,
  mode: "app",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MODE":
      return {
        ...state,
        mode: action.mode,
      };
    case "SET_MENU_ITEM":
      return {
        ...state,
        menuitem: action.menuitem,
      };

    default:
      return state;
  }
};

export default reducer;
