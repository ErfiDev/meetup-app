import Head from "next/head";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";

const Favorites = () => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", (url, { shallow }) => {
      console.log(url, shallow);
      nProgress.start();
    });

    return () => {
      nProgress.done();
    };
  }, []);
  return (
    <>
      <Head>
        <title>Favorites</title>
      </Head>
      <section className="w-full min-h-half">this is a favoprites page</section>
    </>
  );
};

export default Favorites;
