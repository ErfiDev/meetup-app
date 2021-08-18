import Mongoose from "mongoose";

export default async function Connector(cb) {
  return Mongoose.connect(
    process.env.DB_URI,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    (err, msg) => {
      if (err) {
        return cb(false);
      } else {
        cb(true);
      }
    }
  );
}
