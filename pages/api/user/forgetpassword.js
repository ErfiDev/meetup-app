import UserSchema from "../../../schema/user";
import Connector from "../../../db/connector";
import Nodemailer from "nodemailer";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.json({
      msg: `We do not have access to this method: ${req.method}`,
      status: 405,
    });
  }

  const transporter = Nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "fakeemailfortestindevelopment@gmail.com",
      pass: "fakeemailfortestindevelopmentERFANHANIFEZADE",
    },
    secure: true,
  });

  const { username } = req.body;
  if (!username) {
    return res.json({
      msg: "please provide required items",
      status: 406,
    });
  }

  // Connecting to DataBase
  let connect = await Connector(async (msg) => {
    if (!msg) {
      return res.json({
        msg: "we can't connect to db",
        status: 500,
      });
    }

    // Find User by Username
    let find = await UserSchema.findOne({ username });
    if (!find) {
      return res.json({
        msg: "can't find user",
        status: 404,
      });
    }

    // convert hash password to text
    function makeRandomPass() {
      const randomNum = Math.floor(Math.random() * 100000000000000);

      return [randomNum + randomLetter()].join();
    }

    function randomLetter() {
      let a = "qwertyuiopasdfghjklzxcvbnm";
      let toArr = a.split("");
      let letters = [];
      for (var i = 0; i <= 3; i++) {
        let randomMath = Math.floor(Math.random() * toArr.length);
        letters.push(toArr[randomMath]);
      }

      return letters.join("");
    }

    let newPass = makeRandomPass();
    const emailData = {
      from: "fakeemailfortestindevelopment@gmail.com", // sender address
      to: find.email, // list of receivers
      subject: "New Password in meetup app",
      text: "Do not forget again",
      html: `<b>Hi Mr/Ms ${find.username} </b>
         <br>your new password is a ${newPass}<br/>`,
    };

    let errors = [];
    transporter.sendMail(emailData, (err, info) => {
      if (err) {
        errors.push("error on sending email");
      }
      return console.log("sending email successful");
    });

    if (errors.length <= 0) {
      const hash = await bcrypt.hash(newPass, 10);
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
              msg: "we have the error on the serevr",
              status: 500,
            });
          }

          res.json({
            msg: "your password is change check your email",
            status: 200,
          });
        }
      );
    } else {
      res.json({
        msg: "we have the error on the server",
        status: 500,
      });
    }
  });
}
