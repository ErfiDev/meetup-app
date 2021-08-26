import Axios from "axios";
import { toast } from "react-toastify";

Axios.defaults.headers.post["Content-Type"] = "application/json";

Axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    toast("We have the error on the server!", {
      position: "bottom-left",
      closeOnClick: true,
    });
  }

  return Promise.reject(error);
});

export default {
  post: Axios.post,
  get: Axios.get,
};
