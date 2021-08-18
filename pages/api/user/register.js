import UserValidate from "../../../validation/user";
import bcrypt from "bcrypt";
import Connector from "../../../db/connector";
import UserSchema from "../../../schema/user";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.json({
      msg: "can't GET request to /user/login api",
      status: 403,
    });
  }
  if (req.method === "POST") {
    let { username, password, email } = req.body;
    let validate = UserValidate({ username, password, email });
    let { error } = validate;
    if (error) {
      return res.json({
        msg: error.details[0].message,
        status: 400,
      });
    } else {
      let connector = Connector(async (msg) => {
        if (!msg) {
          res.json({
            msg: "we have the server error",
            status: 500,
          });
        }
        let findByUsername = await UserSchema.find({ username });
        if (findByUsername.length > 0) {
          return res.json({
            msg: "this username used please change!",
            status: 400,
          });
        }

        let hashPass = await bcrypt.hash(password, 10);
        new UserSchema({
          username,
          email,
          password: hashPass,
        })
          .save()
          .then((ms) => {
            res.json({
              msg: "user created!",
              status: 201,
            });
          })
          .catch((err) => {
            res.json({
              msg: "we have the error on the server",
              status: 500,
            });
          });
      });
    }
  } else {
    res.json({
      msg: "can't request handle",
      status: 400,
    });
  }
}
