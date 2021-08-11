import { useRouter } from "next/router";
import { useEffect } from "react";
import DummyData from "../../meetUps.json";
import nProgress from "nprogress";

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
    <section
      key={key}
      className="w-full min-h-half flex flex-col justify-around items-center"
    >
      <h1>{meetup.name}</h1>
      <address>{meetup.adress}</address>
    </section>
  );
};

export async function getServerSideProps({ params }) {
  let { key } = params;
  let condition = DummyData.some(item => item.key === key);
  let filter = DummyData.filter((item) => item.key === key)[0];

  if(!condition){
    return {
      notFound: true
    }
  }

  return {
    props: {
      meetup: filter,
    },
  };
}

export default MeetUp;
