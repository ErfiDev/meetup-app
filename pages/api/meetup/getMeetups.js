import Connector from "db/connector";
import UserSchema from "schema/user";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.json({
      msg: `We do not have access to this method: ${req.method}`,
      status: 405,
    });
  }

  const connect = await Connector(async (msg) => {
    if (!msg) {
      return res.json({
        msg: "we have error on the server",
        status: 500,
      });
    }

    let find = await UserSchema.find({}, { _id: 0, meetUps: 1 });
    if (!find) {
      return res.json({
        msg: "we have the error on the server",
        status: 500,
      });
    }

    res.json({
      data: find.meetUps,
      status: 200,
    });
  });
}
