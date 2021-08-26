import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export const FlexibleMenuButton = () => {
  const dis = useDispatch();
  const toggle = useSelector((state) => state.Toggle);
  const router = useRouter();
  let { asPath } = router;
  const userStatus = useSelector((state) => state.userStatus);

  function changeToggle() {
    if (toggle) {
      dis({ type: "FALSE_TOGGLE" });
    } else {
      dis({ type: "TRUE_TOGGLE" });
    }
  }

  function toFalse() {
    return dis({
      type: "FALSE_TOGGLE",
    });
  }

  return (
    <>
      <div className="flexible-menu-button" onClick={changeToggle}>
        <Image
          src="/hamburger.png"
          alt="hamburger"
          width="50px"
          height="50px"
        />
      </div>
      <div
        className="flexible-menu flex justify-center items-center"
        style={{ left: toggle ? "0" : "-100vw" }}
      >
        <ul className="m-0 p-0 flex flex-col justify-center items-center">
          <li
            className={
              asPath === "/"
                ? "selected m-5 text-base antialiased text-white cursor-pointer header-list-options"
                : "m-5 text-base antialiased text-white cursor-pointer header-list-options"
            }
            onClick={toFalse}
          >
            <Link href="/">All meetups</Link>
          </li>
          {!userStatus ? (
            <li
              className={
                "li-signin m-5 cursor-pointer text-base antialiased text-white"
              }
              onClick={toFalse}
            >
              <Link href="/account" passHref>
                <a className="flex flex-row">
                  sign in &nbsp;
                  <Image
                    src="/right.png"
                    alt="right"
                    width="20px"
                    height="15px"
                  />
                </a>
              </Link>
            </li>
          ) : (
            <>
              <li
                className={
                  asPath === "/addNew"
                    ? "selected header-list-options m-5 cursor-pointer text-base antialiased text-white"
                    : "header-list-options m-5 cursor-pointer text-base antialiased text-white"
                }
                onClick={toFalse}
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
                onClick={toFalse}
              >
                <Link href="/dashboard" passHref>
                  <a className="flex flex-row">
                    Account &nbsp;
                    <Image
                      src="/right.png"
                      alt="right"
                      width="20px"
                      height="15px"
                    />
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};
