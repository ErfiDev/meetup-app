import Image from "next/image";

function Main({ dataArray }) {
  return (
    <main className="w-full min-h-half flex flex-col justify-around align-middle">
      {dataArray.map((item) => (
        <div className="w-64 h-auto p-10 m-0">
          <Image
            width="250px"
            height="250px"
            className="object-cover w-full"
            src={item.image}
            alt="image"
          />
          <h2>{item.name}</h2>
          <address>{item.adress}</address>
        </div>
      ))}
    </main>
  );
}

export default Main;
