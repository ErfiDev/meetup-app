import Image from "next/image";

function Header() {
  return (
    <header className="header block bg-purple-700 w-full h-auto min-h-forHeader">
      <div className="header-logo-container">
        <Image
          className="header-logo"
          src="/meetup-logo.png"
          width="60px"
          height="60px"
          alt="logo"
        />
      </div>
      <ul className="header-list flex flex-row flex-wrap justify-center items-center m-0 p-0">
        <li className="header-list-options m-10 cursor-pointer text-base antialiased text-white">
          All meetups
        </li>
        <li className="header-list-options m-10 cursor-pointer text-base antialiased text-white">
          Add new meetup
        </li>
        <li className="header-list-options m-10 cursor-pointer text-base antialiased text-white">
          My favorites
        </li>
      </ul>
    </header>
  );
}

export default Header;
