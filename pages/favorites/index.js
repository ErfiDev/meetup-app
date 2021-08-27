import Head from "next/head";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";
import Decoder from "utils/decoder";
import getFavorites from "redux/actions/getFavorites";
import { useSelector } from "react-redux";

const Favorites = ({ favorites }) => {
  const router = useRouter();
  const favorite = useSelector((state) => state.Favorites);
  console.log(favorite);

  useEffect(() => {
    router.events.on("routeChangeStart", (url, { shallow }) => {
      nProgress.start();
    });

    getFavorites(favorites);

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
        favorites: decode.payload.data.favorites,
      },
    };
  }
  return {
    notFound: true,
  };
}

export default Favorites;
