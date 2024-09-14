
export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, data: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAV":
      return {
        ...state,
        favs: state.favs.filter(fav => fav.id !== action.payload.id)
      };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
  }
};