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
  return res.json({
    data: dummyData,
    status: 200,
  });
}
