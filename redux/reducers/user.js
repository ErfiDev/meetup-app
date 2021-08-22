export function userReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USER":
      return action.payload;

    case "CLEAR_USER":
      return (state = {});

    default:
      return state;
  }
}

export function userStatusReducer(state = false, action) {
  switch (action.type) {
    case "USER_STATUS_TRUE":
      return (state = true);

    case "USER_STATUS_FALSE":
      return (state = false);

    default:
      return state;
  }
}
