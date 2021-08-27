import { getFavorites } from "services/meetup";

export default function GetFavorites(id) {
  return async (dispatch) => {
    const favorites = await getFavorites(id);

    return dispatch({ type: "GET_FAVORITES", payload: favorites.data.data });
  };
}
