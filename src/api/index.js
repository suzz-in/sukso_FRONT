import axios from "axios";

//axios.defaults.baseURL=

// const API = axios.create({
//   baseURL:
//     "https://a358bdec-994d-43d3-9c5d-094e23523748.mock.pstmn.io/api/user",
//   headers: {
//     "Content-Type": "application/json",
//   },
//});

const refresh = false;
axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response.status === 400 && !refresh) {
      refresh = true;
      const response = await axios.post(
        "refresh",
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.payload.accessToken}`;
        return axios(error.config);
      }
    }
  }
);

export default API;
