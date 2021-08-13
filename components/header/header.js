import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

function Header() {
  let { asPath } = useRouter();
  return (
    <header className="header block bg-purple-700 w-full h-auto min-h-forHeader">
      <div className="header-logo-container">
        <Link href="/" passHref>
          <Image
            className="header-logo cursor-pointer"
            src="/meetup-logo.png"
            width="60px"
            height="60px"
            alt="logo"
          />
        </Link>
      </div>
      <ul className="header-list flex flex-row flex-wrap justify-center items-center m-0 p-0">
        <li
          className={
            asPath === "/"
              ? "selected header-list-options m-5 cursor-pointer text-base antialiased text-white"
              : "header-list-options m-5 cursor-pointer text-base antialiased text-white"
          }
        >
          <Link href="/">All meetups</Link>
        </li>
        <li
          className={
            asPath === "/addNew"
              ? "selected header-list-options m-5 cursor-pointer text-base antialiased text-white"
              : "header-list-options m-5 cursor-pointer text-base antialiased text-white"
          }
        >
          <Link href="/addNew">Add new meetup</Link>
        </li>
        <li
          className={
            asPath === "/favorites"
              ? "selected header-list-options m-5 cursor-pointer text-base antialiased text-white"
              : "header-list-options m-5 cursor-pointer text-base antialiased text-white"
          }
        >
          <Link href="/favorites">My favorites</Link>
        </li>
        <li
          className={
            "li-signin m-5 cursor-pointer text-base antialiased text-white"
          }
        >
          <Link href="/account" passHref>
            <a className="flex flex-row">
              sign in &nbsp;
              <Image src="/right.png" alt="right" width="20px" height="15px" />
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
