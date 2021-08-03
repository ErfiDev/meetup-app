import Image from "next/image";

function Main({ dataArray }) {
  return (
    <main className="w-full min-h-half flex flex-col justify-around items-center">
      {dataArray.map((item) => (
        <div
          key={item.key}
          className="w-3/4 h-auto flex flex-col justify-around items-center p-10 m-10 shadow-lg shadow-inner rounded-lg"
        >
          <Image
            width="750px"
            height="250px"
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
