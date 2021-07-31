import { useEffect } from "react";
import Head from "next/head";
import Main from "../components/main/main";

const HomePage = () => {
  useEffect(() => {
    document.getElementById("__next").className =
      "bg-gray-100 min-h-full w-screen box-border m-0 p-0";
  });
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <Main />
    </>
  );
};

export default HomePage;
