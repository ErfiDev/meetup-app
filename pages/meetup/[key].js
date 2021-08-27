import { useRouter } from "next/router";
import { useEffect } from "react";
import nProgress from "nprogress";
import Image from "next/image";
import { getMeetUps } from "services/meetup";
import Head from "next/head";

const MeetUp = ({ meetup }) => {
  const router = useRouter();
  const { key } = router.query;
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
        <title>{meetup.name}</title>
      </Head>
      <section
        key={key}
        className="w-full min-h-half flex flex-row justify-around items-center flex-wrap"
      >
        <Image
          src={meetup.image ? meetup.image : "/picture.png"}
          alt={meetup.name}
          width="450px"
          height="300px"
          className="object-cover rounded cursor-pointer"
        />
        <div>
          <h1 className="mb-10 text-4xl">{meetup.name}</h1>
          <address className="mb-5">{meetup.address}</address>
          <button className="btn-signin-meetup p-2 pr-6 pl-6 text-white mt-20 text-2xl rounded-full bg-purple-700 transition-all">
            sign in
          </button>
        </div>
        <div className="backlink-container mt-10 w-full flex justify-center items-center min-h-forBackLinks">
          <button
            className="bg-none transition-all outline-none border-none text-2xl"
            onClick={() => router.back()}
          >
            Back
          </button>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps({ params }) {
  let { data } = await getMeetUps();
  let { key } = params;
  let condition = data.data.some((item) => item.meetup_id === key);
  let filter = data.data.filter((item) => item.meetup_id === key)[0];

  if (!condition) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      meetup: filter,
    },
  };
}

export default MeetUp;
