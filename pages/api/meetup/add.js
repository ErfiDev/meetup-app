import Connector from "../../../db/connector";
import MeetupValidate from "../../../validation/meetup";
import UserSchema from "../../../schema/user";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.json({
      msg: `We do not have access to this method: ${req.method}`,
      status: 405,
    });
  }

  const { name, address, image, date, from } = req.body;
  const validate = await MeetupValidate({ name, address, from, date });
  let { error } = validate;
  if (error) {
    return res.json({
      msg: error.details[0].message,
      status: 406,
    });
  }

  // Connecting to db
  let connect = await Connector(async (msg) => {
    if (!msg) {
      return res.json({
        msg: "we have error on the server",
        status: 500,
      });
    }

    // Checking user
    let find = await UserSchema.findOne({ id: from });
    if (!find) {
      return res.json({
        msg: "can't find user with this id",
        status: 404,
      });
    }

    // Adding meetup to database
    await UserSchema.updateOne(
      { id: from },
      {
        $addToSet: {
          meetUps: {
            name,
            address,
            image: image ?? "",
            from,
            date,
          },
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
          status: 201,
          msg: "meetup add success",
        });
      }
    );
  });
}
