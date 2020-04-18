export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANS":
      return {
        ...state,
        trans: state.trans.filter((i) => i.id !== action.payload),
      };
    case "ADD_TRANS":
      return {
        ...state,
        trans: [action.payload, ...state.trans],
      };
    default:
      return state;
  }
};
