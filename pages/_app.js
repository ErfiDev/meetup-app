import "tailwindcss/tailwind.css";
import "nprogress/nprogress.css";
import "../styles/index.scss";
import Layout from "../components/layouts/layout";
import nProgress from "nprogress";
import { useEffect } from "react";
import { FlexibleMenuButton } from "../components/flexibleMenu";
import { Provider } from "react-redux";
import Store from "../redux/store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    nProgress.configure({ showSpinner: false });
  }, []);
  return (
    <Provider store={Store}>
      <Layout>
        <Component {...pageProps} />
        <FlexibleMenuButton />
      </Layout>
    </Provider>
  );
}

export default MyApp;
