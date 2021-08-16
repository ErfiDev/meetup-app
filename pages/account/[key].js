import { Register } from "../../components/account";
import Head from "next/head";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";

const AccountPage = () => {
  const router = useRouter();
  const asPath = router.asPath;
  console.log(asPath);
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
        <title>Account</title>
      </Head>
      <Register />
    </>
  );
};

export async function getServerSideProps({ params }) {
  let { key } = params;
  if (key !== "register") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      name: "register",
    },
  };
}

export default AccountPage;
