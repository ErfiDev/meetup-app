import Image from "next/image";

function Header() {
  return (
    <header className="block bg-purple-700 w-full h64 flex flex-row flex-wrap">
      <div className="flex-auto flex 2xl:flex flex-row justify-center items-center ">
        <Image
          className="cursor-pointer"
          src="/shop.png"
          alt="shop"
          width="64px"
          height="64px"
        />
      </div>
      <ul className="flex-auto flex flex-row flex-wrap justify-center items-center m-0 p-0">
        <li className="m-10 cursor-pointer">Home</li>
        <li className="m-10 cursor-pointer">About</li>
        <li className="m-10 cursor-pointer">Contact</li>
      </ul>
    </header>
  );
}

export default Header;
