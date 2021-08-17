import Mongoose from "mongoose";

const Schema = Mongoose.Schema;

const MeetupSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: Date, required: true },
  from: { type: String, required: true },
  joinedPeople: [{ id: { type: String, required: true } }],
});

export default Mongoose.model("meetup", MeetupSchema);
