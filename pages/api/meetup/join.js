import UserSchema from "../../../schema/user";
import Connector from "../../../db/connector";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.json({
      msg: `We do not have access to this method: ${req.method}`,
      status: 405,
    });
  }

  const { id, meetupId } = req.query;
  if (!id || !meetupId) {
    return res.json({
      msg: "please provide required items",
      status: 406,
    });
  }

  let connect = await Connector(async (msg) => {
    if (!msg) {
      return res.json({
        msg: "we have the error on the server",
        status: 500,
      });
    }

    // Find User and meetup
    let findMeetups = await UserSchema.find(
      {},
      {
        meetUps: 1,
      }
    );

    // Loop in Array
    let all = [];
    await findMeetups.map((item) => {
      item.meetUps.map((ite) => {
        all.push(ite);
      });
    });

    let filter = all.filter((item) => item.meetup_id === meetupId);
    if (!filter[0]) {
      return res.json({
        msg: "can't find!",
        status: 404,
      });
    }

    // Update user schema
    await UserSchema.updateOne(
      { id: filter[0].from, meetUps: { $elemMatch: { meetup_id: meetupId } } },
      {
        $addToSet: { "meetUps.$.joinedPeople": { id } },
      },
      (err) => {
        if (err) {
          return res.json({
            msg: "we have the error on the server",
            status: 500,
          });
        }

        res.json({
          msg: "joining to meetup successful!",
          status: 200,
        });
      }
    );
  });
}
