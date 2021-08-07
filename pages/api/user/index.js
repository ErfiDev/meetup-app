export default async function userApi(req, res) {
  if (req.method === "POST") {
    return res.status(200).json({
      method: "post",
    });
  } else {
    res.status(200).json({
      secret: process.env.SECRET,
    });
  }
}
