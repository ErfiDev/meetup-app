import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Main from "../components/main/main";
import nProgress from "nprogress";

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
  const router = useRouter();
  useEffect(() => {
    document.getElementById("__next").className =
      "bg-gray-100 min-h-full w-full box-border m-0 p-0";

    router.events.on("routeChangeStart", (url, { shallow }) => {
      nProgress.start();
    });

    return () => {
      nProgress.done();
    };
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Main dataArray={rawData} />
    </>
  );
};

export default HomePage;
