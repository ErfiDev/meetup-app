import Connector from "../../../db/connector";
import UserSchema from "../../../schema/user";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.json({
      msg: `We do not have access to this method: ${req.method}`,
      status: 405,
    });
  }

  // Recieve from query
  let { id, meetupId } = req.query;
  if (!id || !meetupId) {
    return res.json({
      msg: "please provide required query called id",
      status: 406,
    });
  }

  // Connecting to DB
  let connector = await Connector(async (msg) => {
    if (!msg) {
      return res.json({
        msg: "we have error on the server",
        status: 500,
      });
    }

    // Find with id
    let findMeetup = await UserSchema.findOne(
      { id },
      { meetUps: { $elemMatch: { meetup_id: meetupId } } }
    );

    if (!findMeetup) {
      return res.json({
        msg: "can't find!",
        status: 404,
      });
    } else {
      if (findMeetup.meetUps.length <= 0) {
        return res.json({
          msg: "can't find meetup!",
          status: 404,
        });
      }

      await UserSchema.updateOne(
        { id },
        {
          $addToSet: {
            favorites: {
              meetup_id: findMeetup.meetUps[0].meetup_id,
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
            msg: "add to favorites success!",
            status: 200,
          });
        }
      );
    }
  });
}
