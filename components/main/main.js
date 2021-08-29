import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { addFavorites } from "services/meetup";
import Toast from "utils/toast";

function Main({ dataArray }) {
  const userStatus = useSelector((state) => state.userStatus);
  const User = useSelector((state) => state.User);

  async function addFavorite(id, meetupId) {
    try {
      const { data } = await addFavorites(id, meetupId);
      console.log(data);
    } catch (err) {
      return Toast("error", "we have the error on the server");
    }
  }

  return (
    <main className="w-full min-h-half flex justify-around items-start flex-wrap">
      {!dataArray ? (
        <h1>empty meetups please add</h1>
      ) : (
        dataArray.map((item) => (
          <div
            key={item.meetup_id}
            className="w-4/5 lg:w-2/5 h-auto flex flex-col justify-around items-center p-5 m-10 backdrop-filter backdrop-blur-md bg-purple-200 rounded-lg"
          >
            <Image
              width="750px"
              height="450px"
              className="w-full rounded overflow-hidden cursor-pointer object-cover"
              src={item.image ? item.image : "/picture.png"}
              alt="image"
              title={item.name}
            />
            <h2 className="overflow-ellipsis text-left p-2 my-2.5">
              <Link href={`/meetup/${item.meetup_id}`}>{item.name}</Link>
            </h2>
            <address className="overflow-ellipsis text-left p-2 ">
              {item.address}
            </address>
            <p className="text-base mt-10 text-purple-700 no-underline hover:underline">
              <Link href={`/meetup/${item.meetup_id}`}>Show details</Link>
            </p>
            {userStatus ? (
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={() => addFavorite(User.id, item.meetup_id)}
              >
                Add to favorite
              </button>
            ) : (
              ""
            )}
          </div>
        ))
      )}
    </main>
  );
}

export default Main;
