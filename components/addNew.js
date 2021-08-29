import { useState, useEffect } from "react";
import DateUtil from "../utils/date";

const AddNew = ({ submitHandler }) => {
  const [data, setData] = useState({
    name: "",
    address: "",
    image: "",
    date: "",
  });
  const [min, setMin] = useState("");

  useEffect(() => {
    const now = new DateUtil(null, "T");
    setMin(now.getDate());
  }, []);

  const onChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  function previewFile() {
    const input = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
    reader.addEventListener("load", async () => {
      if (input.size > 1000000) {
        const inputS = document.querySelector("input[type=file]");
        inputS.value = "";
        return alert("image size is higher than 1 mb");
      } else {
        await setData({ ...data, image: reader.result });
      }
    });
    if (input) {
      reader.readAsDataURL(input);
    }
  }

  return (
    <section className="w-full min-h-half flex flex-col justify-around items-center p-10">
      <form
        className="w-full max-w-sm"
        onSubmit={(e) => submitHandler(e, data)}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="title"
            >
              Title
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="title"
              type="text"
              placeholder="Title"
              onChange={onChange("name")}
              value={data.name}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="Address"
            >
              Address
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="Address"
              type="text"
              placeholder="Address"
              onChange={onChange("address")}
              value={data.address}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="Image"
            >
              Image
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="Image"
              type="file"
              onChange={previewFile}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="Date"
            >
              Date
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="Date"
              type="datetime-local"
              onChange={onChange("date")}
              value={data.date}
              min={min}
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
              Send
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
};

export default AddNew;
