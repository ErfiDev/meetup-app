import Head from "next/head";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";
import Decoder from "utils/decoder";

const Favorites = () => {
  const router = useRouter();
  useEffect(() => {
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
        <title>Favorites</title>
      </Head>
      <section className="w-full min-h-half">this is a favoprites page</section>
    </>
  );
};

export async function getServerSideProps({ req, res }) {
  const { user } = req.cookies;
  const decode = Decoder(user);
  if (decode) {
    return {
      props: {
        auth: true,
      },
    };
  }
  return {
    notFound: true,
  };
}

export default Favorites;
