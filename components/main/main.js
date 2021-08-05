import Image from "next/image";

function Main({ dataArray }) {
  return (
    <main className="w-full min-h-half flex justify-around items-start flex-wrap">
      {dataArray.map((item) => (
        <div
          key={item.key}
          className="w-4/5 lg:w-2/5 h-auto flex flex-col justify-around items-center p-5 m-10 backdrop-filter backdrop-blur-md bg-purple-200 rounded-lg"
        >
          <Image
            width="750px"
            height="450px"
            className="object-cover w-full rounded"
            src={item.image}
            alt="image"
          />
          <h2 className="overflow-ellipsis text-left p-2 my-2.5">
            {item.name}
          </h2>
          <address className="overflow-ellipsis text-left p-2 ">
            {item.address}
          </address>
          <button className="w-1/4 p-1 mt-20 bg-purple-700 text-2xl text-white rounded-md delay-300 hover:bg-purple-900">
            Join
          </button>
        </div>
      ))}
    </main>
  );
}

export default Main;
