import Connector from "db/connector";
import UserSchema from "schema/user";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.json({
      msg: `We do not have access to this method: ${req.method}`,
      status: 405,
    });
  }

  const { id } = req.query;
  if (!id) {
    return res.json({
      msg: "please provide required query called id",
      status: 400,
    });
  }

  let connect = await Connector(async (msg) => {
    if (!msg) {
      return res.json({
        msg: "we have error on the server",
        status: 500,
      });
    }

    let findUser = await UserSchema.findOne({ id });
    if (!findUser) {
      return res.json({
        msg: "can't find user with this id",
        status: 404,
      });
    }

    let { favorites } = findUser;
    if (favorites.length <= 0) {
      return res.json({
        msg: "this user favorites meetups is empty",
        status: 200,
      });
    }

    let findAll = await UserSchema.find({}, { _id: 0, meetUps: 1 });
    if (!findAll) {
      return res.json({
        msg: "can't find meetups!",
        status: 404,
      });
    }

    let all = [];
    await findAll.map((item) => {
      item.meetUps.map((ite) => {
        all.push(ite);
      });
    });

    let final = [];
    favorites.map((item) => {
      let filter = all.filter((index) => index.meetup_id === item.meetup_id);
      final.push(filter[0]);
    });

    res.json({
      data: final,
      status: 200,
    });
  });
}
