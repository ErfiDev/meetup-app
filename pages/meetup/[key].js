import { useRouter } from "next/router";
import DummyData from "../../meetUps.json";

const MeetUp = ({ meetup }) => {
  const router = useRouter();
  const { key } = router.query;

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

export async function getStaticPaths() {
  let params = DummyData.map((item) => {
    return {
      params: { key: item.key },
    };
  });

  return {
    paths: params,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let { key } = params;
  let filter = DummyData.filter((item) => item.key === key)[0];

  return {
    props: {
      meetup: filter,
    },
  };
}

export default MeetUp;
