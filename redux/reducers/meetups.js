function Meetups(state = [], action) {
  switch (action.type) {
    case "SET_MEETUPS":
      return action.payload;

    case "CLEAR_MEETUPS":
      return (state = []);

    default:
      return state;
  }
}

export default Meetups;
