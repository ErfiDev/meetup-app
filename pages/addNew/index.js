import AddNewCom from "components/addNew";
import Head from "next/head";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";
import Decoder from "utils/decoder";
import { addMeetup } from "services/meetup";
import Toast from "utils/toast";

const AddNew = ({ id }) => {
  const router = useRouter();

  async function submitHandler(event, data) {
    event.preventDefault();
    try {
      let datas = {
        name: data.name,
        address: data.address,
        image: data.image,
        date: data.date,
        from: id,
      };
      const { data: res } = await addMeetup(datas);
      if (res.status !== 201) {
        return Toast("error", res.msg);
      } else {
        Toast(null, res.msg);
      }
    } catch (err) {
      return Toast("error", "we have the error on the server");
    }
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
      id: decode.payload.data.id,
    },
  };
}

export default AddNew;
