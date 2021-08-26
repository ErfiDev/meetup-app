import { Register } from "components/account";
import Head from "next/head";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";
import Decoder from "utils/decoder";
import Toast from "utils/toast";
import { registerUser } from "services/user";

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
      const { data: res } = await registerUser(data);
      if (res.status !== 201) {
        return Toast("error", res.msg);
      } else {
        Toast(null, "user created!");
        Toast(null, "please sign in");
        router.push("/account");
      }
    } catch (err) {
      return Toast("error", "we have the error on the server");
    }
  }

  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <Register formHandler={formHandler} />
    </>
  );
};

export async function getServerSideProps({ params, req }) {
  const { user } = req.cookies;
  const decode = Decoder(user);

  if (!decode) {
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

  return {
    notFound: true,
  };
}

export default AccountPage;
