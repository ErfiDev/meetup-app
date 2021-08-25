import { SignIn } from "components/account";
import Head from "next/head";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";
import Decoder from "utils/decoder";
import { loginUser } from "services/user";

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
    try {
      const { data: res } = await loginUser(data);
      if (res.status !== 200) {
        return console.log(res.msg);
      }
      console.log(res.token);
    } catch (err) {
      alert("error server");
    }
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

export async function getServerSideProps({ req, res }) {
  const { user } = req.cookies;
  const decode = Decoder(user);
  if (!decode) {
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

export default AccountPage;
