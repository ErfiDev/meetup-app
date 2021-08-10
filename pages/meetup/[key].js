import { useRouter } from "next/router";

const MeetUp = ({ meetup }) => {
  const router = useRouter();

  return (
    <section className="w-full min-h-half flex flex-col justify-around items-center">
      <h1>{meetup.name}</h1>
      <address>{meetup.adress}</address>
    </section>
  );
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/meetup", {
    method: "GET",
  });
  const data = await res.json();

  let params = data.data.map((item) => {
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
  const res = await fetch("http://localhost:3000/api/meetup/" + key, {
    method: "GET",
  });
  let data = await res.json();

  return {
    props: {
      meetup: JSON.stringify(data.data),
    },
  };
}

export default MeetUp;
