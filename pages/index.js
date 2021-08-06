import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Main from "../components/main/main";

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

    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
    };
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });
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
