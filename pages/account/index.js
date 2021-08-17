import { SignIn } from "../../components/account";
import Head from "next/head";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";

const AccountPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", (url, { shallow }) => {
      nProgress.start();
    });

    return () => {
      nProgress.done();
    };
  }, []);

  async function formHandler(event, data) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>Account / sign in</title>
      </Head>
      <SignIn formHandler={formHandler} />
    </>
  );
};

export default AccountPage;
