import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Main from "../components/main/main";
import nProgress from "nprogress";

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
  const res = await fetch("http://localhost:3000/api/meetup", {
    method: "GET",
  });
  const json = await res.json();
  return {
    props: {
      dataArray: json.data,
    },
  };
}

export default HomePage;
