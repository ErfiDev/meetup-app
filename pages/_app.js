import "tailwindcss/tailwind.css";
import "../styles/index.scss";
import "nprogress/nprogress.css";
import Layout from "../components/layouts/layout";
import nProgress from "nprogress";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    nProgress.configure({ showSpinner: false });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
