import Head from "next/head";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";

export default function Dashboard() {
  const { data } = useSelector((state) => state.User);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      nProgress.start();
    });

    return () => {
      nProgress.done();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard {data ? data.username : ""}</title>
      </Head>
      <section className="container-dashboard w-full min-h-half p-10">
        <div></div>
        <div></div>
      </section>
    </>
  );
}
