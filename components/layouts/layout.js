import Header from "../header/header";
import Footer from "../footer/footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Decoder from "utils/decoder";
import getCookie from "utils/cookie";

function Layout({ children }) {
  const dis = useDispatch();

  useEffect(() => {
    function auth() {
      const get = getCookie("user");
      if (!get) {
        return dis({ type: "USER_STATUS_FALSE" });
      } else {
        const value = Decoder(get);
        if (!value) {
          return dis({ type: "USER_STATUS_FALSE" });
        }
        const now = new Date().now / 1000;
        if (value.iat < now) {
          document.cookie = "user = ";
        } else {
          dis({ type: "USER_STATUS_TRUE" });
          dis({ type: "SET_USER", payload: value.payload });
        }
      }
    }

    auth();
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
