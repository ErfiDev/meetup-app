import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Main from "../components/main/main";
import nProgress from "nprogress";
import DummyData from "../meetUps.json";

const HomePage = ({ dataArray }) => {
  const router = useRouter();
  useEffect(() => {
    document.getElementById("__next").className =
      "bg-gray-100 min-h-full w-full box-border m-0 p-0";
    console.log(process.env.DB_URI);
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
      <Main dataArray={dataArray} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      dataArray: DummyData,
    },
  };
}

export default HomePage;
