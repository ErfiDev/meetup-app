import UserSchema from "../../../schema/user";
import bcrypt from "bcrypt";
import Connector from "../../../db/connector";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.json({
      msg: `We do not have access to this method: ${req.method}`,
      status: 405,
    });
  }

  const { username, currentPass, newPass } = req.body;
  if (!username || !newPass || !currentPass) {
    return res.json({
      msg: "please provide required items",
      status: 400,
    });
  }

  // connecting to db
  let connect = await Connector(async (msg) => {
    if (!msg) {
      return res.json({
        msg: "we have the error on the server",
        status: 500,
      });
    }

    // Find User
    let find = await UserSchema.findOne({ username });
    if (!find) {
      return res.json({
        msg: "user not found!",
        status: 404,
      });
    }

    // Compare password
    let compare = await bcrypt.compare(currentPass, find.password);
    if (!compare) {
      return res.json({
        msg: "password not match",
        status: 406,
      });
    }

    // Hashing new pass
    let hash = await bcrypt.hash(newPass, 10);
    await UserSchema.updateOne(
      { username },
      {
        $set: {
          password: hash,
        },
      },
      (err) => {
        if (err) {
          return res.json({
            msg: "we have the error on the server",
            status: 500,
          });
        }

        res.json({
          msg: "password changing success!",
          status: 200,
        });
      }
    );
  });
}
