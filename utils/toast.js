import { toast } from "react-toastify";

export default function Toast(mode, msg) {
  if (mode === "error") {
    return toast.error(msg, {
      position: "bottom-left",
      closeOnClick: true,
    });
  }

  return toast.success(msg, {
    position: "bottom-left",
    closeOnClick: true,
  });
}
