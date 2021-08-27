import { getMeetUps } from "services/meetup";

export default function GetFavorites(favorites) {
  return async (getDispatch) => {
    const Meetups = await getMeetUps();
    let favorite = [];

    favorites.map((item) => {
      let filter = Meetups.filter(
        (index) => index.meetup_id === item.meetup_id
      );
      favorite.push(filter[0]);
    });

    return getDispatch({ type: "GET_FAVORITES", payload: favorite });
  };
}
