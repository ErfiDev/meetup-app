import Head from "next/head";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import nProgress from "nprogress";
import { useRouter } from "next/router";
import Image from "next/image";
import Decoder from "utils/decoder";
import Link from "next/link";

export default function Dashboard({ user }) {
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
        <title>Dashboard {user ? user.username : ""}</title>
      </Head>
      <section className="container-dashboard w-full min-h-half p-10">
        <ul className="flex flex-col justify-between items-center">
          <li className="m-10">username: {user.username}</li>
          <li className="m-10">email: {user.email}</li>
          <li className="m-10">joined date: {user.joinedDate}</li>
        </ul>

        <hr className="w-full h-10" />
        <div className="backlink-container mt-10 w-full flex justify-center items-center min-h-forBackLinks">
          <button className="bg-none transition-all outline-none border-none text-2xl">
            <Link href="/dashboard/changePass">Change Password</Link>
          </button>
        </div>
        <hr className="w-full h-10" />
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
}

export async function getServerSideProps({ req, res }) {
  const { user } = req.cookies;
  const decode = Decoder(user);
  if (decode) {
    return {
      props: {
        user: decode.payload.data,
      },
    };
  }
  return {
    notFound: true,
  };
}
