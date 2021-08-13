import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

export const FlexibleMenuButton = () => {
  const dis = useDispatch();
  const toggle = useSelector((state) => state.Toggle);
  function changeToggle() {
    if (toggle) {
      dis({ type: "FALSE_TOGGLE" });
    } else {
      dis({ type: "TRUE_TOGGLE" });
    }
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
      <div className="flexible-menu" style={{ left: toggle ? "0" : "-100vw" }}>
        flexuble menu
      </div>
    </>
  );
};
