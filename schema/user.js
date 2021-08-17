import Mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = Mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  joinedDate: { type: Date, default: Date.now() },
  email: { type: String, required: true },
  meetUps: [
    {
      name: { type: String, required: true },
      address: { type: String, required: true },
      image: { type: String, required: true },
      date: { type: Date, required: true },
      from: { type: String, required: true },
      joinedPeople: [{ id: { type: String, required: true } }],
    },
  ],
  id: { type: String, default: () => uuidv4() },
});

export default Mongoose.model("user", UserSchema);
