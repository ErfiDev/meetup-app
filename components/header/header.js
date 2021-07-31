import Image from "next/image";
// import Router from "next/router";

function Header() {
  // let { asPath } = Router;
  // console.log(asPath);

  let asPath = "/All";

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
        <li
          className={
            asPath === "/All"
              ? "selected header-list-options m-10 cursor-pointer text-base antialiased text-white"
              : "header-list-options m-10 cursor-pointer text-base antialiased text-white"
          }
        >
          All meetups
        </li>
        <li
          className={
            asPath === "/addNew"
              ? "selected header-list-options m-10 cursor-pointer text-base antialiased text-white"
              : "header-list-options m-10 cursor-pointer text-base antialiased text-white"
          }
        >
          Add new meetup
        </li>
        <li
          className={
            asPath === "/favorites"
              ? "selected header-list-options m-10 cursor-pointer text-base antialiased text-white"
              : "header-list-options m-10 cursor-pointer text-base antialiased text-white"
          }
        >
          My favorites
        </li>
      </ul>
    </header>
  );
}

export default Header;
