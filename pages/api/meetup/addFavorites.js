import Connector from "db/connector";
import UserSchema from "schema/user";

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
      msg: "please provide required query called id and meetupId",
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
    let findMeetups = await UserSchema.find({}, { meetUps: 1, _id: 0 });

    // Loop in Array
    let all = [];
    await findMeetups.map((item) => {
      item.meetUps.map((ite) => {
        all.push(ite);
      });
    });

    let filter = await all.filter((item) => item.meetup_id === meetupId);
    if (!filter[0]) {
      return res.json({
        msg: "can't find!",
        status: 404,
      });
    } else {
      await UserSchema.findOneAndUpdate(
        { id },
        {
          $addToSet: {
            favorites: {
              meetup_id: filter[0].meetup_id,
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

          return res.json({
            msg: "add to favorites success!",
            status: 200,
          });
        }
      );
    }
  });
}
