import { useSelector } from "react-redux";
import Image from "next/image";

export const FlexsibleMenu = () => {
  const toggle = useSelector((state) => state.toggleManu);

  return (
    <div
      className="flexible-menu"
      style={{ display: toggle ? "flex" : "none" }}
    >
      flexuble menu
    </div>
  );
};

export const FlexibleMenuButton = () => {
  return (
    <div className="flexible-menu-button">
      <Image src="/hamburger.png" alt="hamburger" width="50px" height="50px" />
    </div>
  );
};
