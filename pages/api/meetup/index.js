export default async function handler(req, res) {
  console.log(req);
  return res.json({
    data: [
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
    ],
    status: 200,
  });
}
