import { useEffect } from "react";
import Head from "next/head";
import Main from "../components/main/main";
import Layout from "../components/layouts/layout";

const rawData = [
  {
    name: "first meetup",
    address: "1 street",
    image:
      "/photo-1627680342808-eabaa8cbad88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "first meetup",
    address: "1 street",
    image:
      "/photo-1627680342808-eabaa8cbad88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
];

const HomePage = () => {
  useEffect(() => {
    document.getElementById("__next").className =
      "bg-gray-100 min-h-full w-screen box-border m-0 p-0";
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
