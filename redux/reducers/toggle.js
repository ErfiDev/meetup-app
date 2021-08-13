function toggleReducer(state = false, action) {
  switch (action.type) {
    case "TRUE_TOGGLE":
      return (state = true);

    case "FALSE_TOGGLE":
      return (state = false);

    default:
      return state;
  }
}

export default toggleReducer;
