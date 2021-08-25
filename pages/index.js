import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Main from "components/main/main";
import nProgress from "nprogress";
import DummyData from "meetUps.json";
import getCookie from "utils/cookie";
import { useDispatch } from "react-redux";
import Decoder from "utils/decoder";

const HomePage = ({ dataArray }) => {
  const router = useRouter();
  const dis = useDispatch();

  useEffect(() => {
    document.getElementById("__next").className =
      "bg-gray-100 min-h-full w-full box-border m-0 p-0";
    router.events.on("routeChangeStart", (url, { shallow }) => {
      nProgress.start();
    });

    function auth() {
      const get = getCookie("user");
      if (!get) {
        return dis({ type: "USER_STATUS_FALSE" });
      } else {
        const value = Decoder(get);
        if (!value) {
          return dis({ type: "USER_STATUS_FALSE" });
        }
        dis({ type: "USER_STATUS_TRUE" });
      }
    }

    auth();

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

export async function getServerSideProps(context) {
  return {
    props: {
      dataArray: DummyData,
    },
  };
}

export default HomePage;
