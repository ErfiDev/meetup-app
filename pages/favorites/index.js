import Head from "next/head";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";
import Decoder from "utils/decoder";
import getFavorites from "redux/actions/getFavorites";
import { useSelector, useDispatch } from "react-redux";
import FavoritesComponent from "components/favorites";

const Favorites = ({ id }) => {
  const router = useRouter();
  const dis = useDispatch();
  const favorites = useSelector((state) => state.Favorites);

  useEffect(() => {
    router.events.on("routeChangeStart", (url, { shallow }) => {
      nProgress.start();
    });

    dis(getFavorites(id));

    return () => {
      nProgress.done();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Favorites</title>
      </Head>
      <FavoritesComponent meetUps={favorites} />
    </>
  );
};

export async function getServerSideProps({ req, res }) {
  const { user } = req.cookies;
  const decode = Decoder(user);
  if (decode) {
    return {
      props: {
        id: decode.payload.data.id,
      },
    };
  }
  return {
    notFound: true,
  };
}

export default Favorites;
