import Axios from "axios";

Axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    Toast("We have the error on the server!");
  }

  return Promise.reject(error);
});

export default Axios.post;
