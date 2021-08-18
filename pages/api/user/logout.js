import Connector from "../../../db/connector";
import UserSchema from "../../../schema/user";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.json({
      msg: `We do not have access to this method: ${req.method}`,
      status: 405,
    });
  }

  const { id } = req.body;
  if (!id) {
    return res.json({
      msg: "please provide required item",
      status: 400,
    });
  }

  // Connecting to DB
  let connect = await Connector(async (msg) => {
    if (!msg) {
      return res.json({
        msg: "we have the error on the server",
        status: 500,
      });
    }

    // Find User
    let findUser = await UserSchema.findOne({ id });
    if (!findUser) {
      return res.json({
        msg: "can't find user with this id",
        status: 404,
      });
    }

    return UserSchema.deleteOne({ id }, (error) => {
      if (error) {
        return res.json({
          msg: "we have the error on server",
          status: 500,
        });
      }

      res.json({
        msg: "delete user successful!",
        status: 200,
      });
    });
  });
}
