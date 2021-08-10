const dummyData = [
  {
    name: "first meetup",
    address: "1 street",
    image: "/image.jpg",
    key: "1",
  },
  {
    name: "first meetup",
    address: "1 street",
    image: "/image.jpg",
    key: "2",
  },
];

export default async function handler(req, res) {
  let { key } = req.params;
  return res.json({
    data: dummyData.filter((item) => item.key === key)[0],
  });
}
