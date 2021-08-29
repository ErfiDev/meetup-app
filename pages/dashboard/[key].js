import nProgress from "nprogress";
import { useState, useEffect } from "react";
import { changePass as changePassService } from "services/user";
import { useRouter } from "next/router";
import Decoder from "utils/decoder";
import Toast from "utils/toast";

export default function ChangePass({ user }) {
  const router = useRouter();
  const [data, setData] = useState({
    currentPass: "",
    newPass: "",
  });

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      nProgress.start();
    });

    return () => {
      nProgress.done();
    };
  }, []);

  const onChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  async function formHandle(e) {
    e.preventDefault();

    try {
      const body = {
        currentPass: data.currentPass,
        newPass: data.newPass,
        username: user.username,
      };

      const { data: res } = await changePassService(body);
      if (res.status !== 200) {
        return Toast("error", res.msg);
      }

      Toast(null, "change password success");
    } catch (err) {
      return Toast("error", "we have the error on the server");
    }
  }

  return (
    <section className="min-h-half w-full flex flex-col justify-around items-center ">
      <form className="w-auto min-w-sm mt-10" onSubmit={formHandle}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="currentPass"
            >
              Current Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="currentPass"
              type="text"
              placeholder="Current Password"
              onChange={onChange("currentPass")}
              value={data.currentPass}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="newPass"
            >
              New Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="newPass"
              type="text"
              placeholder="newPass"
              onChange={onChange("newPass")}
              value={data.newPass}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              change
            </button>
          </div>
        </div>
      </form>
      <div className="backlink-container mt-10 w-full flex justify-center items-center min-h-forBackLinks">
        <button
          className="bg-none transition-all outline-none border-none text-2xl"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </section>
  );
}

export async function getServerSideProps({ params, req }) {
  const { key } = params;

  if (key === "changePass") {
    const { user } = req.cookies;
    let decode = Decoder(user);
    if (!user) {
      return {
        notFound: true,
      };
    }
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
