import AddNewCom from "../../components/addNew";
import Head from "next/head";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";
import swr from "swr";

const AddNew = () => {
  async function submitHandler(event, data) {
    event.preventDefault();
    console.log(data);
  }
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
        <title>Add New Meet Up</title>
      </Head>
      <AddNewCom submitHandler={submitHandler} />
    </>
  );
};

export default AddNew;
