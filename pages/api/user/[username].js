export default function username(req, res) {
  res.json({
    username: req.query.username,
  });
}
