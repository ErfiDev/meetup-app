import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Main from "components/main/main";
import nProgress from "nprogress";
import { useDispatch, useSelector } from "react-redux";
import getMeetups from "redux/actions/getMeetups";

const HomePage = () => {
  const router = useRouter();
  const dis = useDispatch();
  const meetups = useSelector((state) => state.Meetups);

  useEffect(() => {
    document.getElementById("__next").className =
      "bg-gray-100 min-h-full w-full box-border m-0 p-0";
    router.events.on("routeChangeStart", (url, { shallow }) => {
      nProgress.start();
    });

    dis(getMeetups());

    return () => {
      nProgress.done();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Main dataArray={meetups} />
    </>
  );
};

export default HomePage;
