import { getMeetUps } from "services/meetup";

function getMeetups() {
  return async (dispatch) => {
    const { data } = await getMeetUps();

    return dispatch({ type: "SET_MEETUPS", payload: data.data });
  };
}

export default getMeetups;
