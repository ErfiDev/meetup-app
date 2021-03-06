import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export const SignIn = ({ formHandler }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  let [toggle, setToggle] = useState(false);
  const router = useRouter();

  const onChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  return (
    <section className="w-full min-h-half h-auto flex justify-center items-center flex-col">
      <form
        className="w-auto min-w-sm mt-10"
        onSubmit={(e) => formHandler(e, data)}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="username"
            >
              username
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="username"
              type="text"
              placeholder="Username"
              onChange={onChange("username")}
              value={data.username}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3 flex justify-center items-center">
            <input
              className="input-signin-pass bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="password"
              type="password"
              placeholder="Password"
              onChange={onChange("password")}
              value={data.password}
            />
            <div
              onClick={() => {
                const input = document.querySelector(".input-signin-pass");
                if (input.type === "password") {
                  setToggle(true);
                  return (input.type = "text");
                } else {
                  setToggle(false);
                  input.type = "password";
                }
              }}
              className="cursor-pointer ml-2"
            >
              <Image
                src={toggle ? "/eye.png" : "/closed.png"}
                alt="eye"
                width="30px"
                height="30px"
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
      <hr className="w-2/5 h-1 mt-10 mb-10 bg-purple-700" />
      <div className="md:w-2/5 w-3/4 flex justify-around items-center">
        <button className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          <Link href="/account/register">Register</Link>
        </button>
        <button className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Forget password!
        </button>
      </div>
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
};

export const Register = ({ formHandler }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const onChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  return (
    <section className="w-full min-h-half h-auto flex justify-center items-center flex-col">
      <form
        className="w-auto min-w-sm mt-10"
        onSubmit={(e) => formHandler(e, data)}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="username"
            >
              username
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="username"
              type="text"
              placeholder="Username"
              onChange={onChange("username")}
              value={data.username}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="email"
              type="text"
              placeholder="Email"
              onChange={onChange("email")}
              value={data.email}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3 flex justify-center items-center">
            <input
              className="input-register-pass bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="password"
              type="password"
              placeholder="Password"
              onChange={onChange("password")}
              value={data.password}
            />
            <div
              onClick={async () => {
                const input = document.querySelector(".input-register-pass");
                if (input.type === "password") {
                  setToggle(true);
                  return (input.type = "text");
                } else {
                  setToggle(false);
                  input.type = "password";
                }
              }}
              className="cursor-pointer ml-2"
            >
              <Image
                src={toggle ? "/eye.png" : "/closed.png"}
                alt="eye"
                width="30px"
                height="30px"
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
      </form>
      <hr className="w-2/5 h-1 mt-10 mb-10 bg-purple-700" />
      <div className="md:w-2/5 w-3/4 flex justify-around items-center">
        <button className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          <Link href="/account">Sign in</Link>
        </button>
        <button className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Forget password!
        </button>
      </div>
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
};
