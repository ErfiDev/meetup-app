import AddNewCom from "components/addNew";
import Head from "next/head";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";
import Decoder from "utils/decoder";

const AddNew = () => {
  const router = useRouter();

  async function submitHandler(event, data) {
    event.preventDefault();
    console.log(data);
  }
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
        <title>Add New Meet Up</title>
      </Head>
      <AddNewCom submitHandler={submitHandler} />
    </>
  );
};

export async function getServerSideProps({ req, res }) {
  const { user } = req.cookies;
  const decode = Decoder(user);
  if (!decode) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      auth: true,
    },
  };
}

export default AddNew;
