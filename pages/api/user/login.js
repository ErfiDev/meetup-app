import UserSchema from "../../../schema/user";
import Connector from "../../../db/connector";
import bCrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  // Validate methods
  if (req.method !== "POST") {
    return res.json({
      msg: `We do not have access to this method: ${req.method}`,
      status: 405,
    });
  }

  // Validate required key in body obj
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({
      msg: "please provide required items",
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

    // Find User by Username
    let findUser = await UserSchema.findOne({ username });
    if (!findUser) {
      return res.json({
        msg: "can't find with this username",
        status: 404,
      });
    }

    // Compare Passwords
    let compare = await bCrypt.compare(password, findUser.password);
    if (!compare) {
      return res.json({
        msg: "password not match",
        status: 406,
      });
    }

    // Create JWT obj for user
    try {
      let jwtObj = await jwt.sign(
        {
          data: findUser,
        },
        process.env.SECRET
      );
      return res.json({
        token: jwtObj,
        status: 200,
      });
    } catch (err) {
      return res.json({
        msg: "we have the error on the server",
        status: 500,
      });
    }
  });
}
