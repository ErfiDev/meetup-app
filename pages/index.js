import { useEffect } from "react";
import Head from "next/head";
import Main from "../components/main/main";
import Layout from "../components/layouts/layout";

const rawData = [
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

const HomePage = () => {
  useEffect(() => {
    document.getElementById("__next").className =
      "bg-gray-100 min-h-full w-full box-border m-0 p-0";
  });
  return (
    <Layout>
      <Head>
        <title>Next App</title>
      </Head>
      <Main dataArray={rawData} />
    </Layout>
  );
};

export default HomePage;
