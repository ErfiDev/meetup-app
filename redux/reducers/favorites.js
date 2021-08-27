export default function Favorites(state = [], action) {
  switch (action.type) {
    case "GET_FAVORITES":
      return action.payload;

    case "CLEAR_FAVORITES":
      return (state = []);

    default:
      return state;
  }
}
