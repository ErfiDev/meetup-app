import { SignIn } from "components/account";
import Head from "next/head";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";
import Decoder from "utils/decoder";
import { loginUser } from "services/user";
import Toast from "utils/toast";
import { useDispatch, useSelector } from "react-redux";

const AccountPage = () => {
  const router = useRouter();
  const dis = useDispatch();
  const user = useSelector((state) => state.User);

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
        return Toast("error", res.msg);
      }
      let decode = await Decoder(res.token);
      dis({ type: "USER_STATUS_TRUE" });
      dis({ type: "SET_USER", payload: decode.payload });
      document.cookie = `user = ${res.token}`;
      Toast(null, "login successful");
      router.push("/");
    } catch (err) {
      Toast("error", "we have the error on the server");
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
