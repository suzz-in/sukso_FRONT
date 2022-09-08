import axios from "axios";

// axios.defaults.baseURL=

export const API = axios.create({
  baseURL: "http://15.165.76.244",
  headers: {
    "Content-Type": "application/json",
    // "Cache-Control": "no-cache",
  },
  withCredentials: true,
});
export const token = axios.create({
  baseURL: "http://15.165.76.244",
  headers: { "X-AUTH-TOKEN": localStorage.getItem("Access-Token") },
});

// const refresh = false;
// axios.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     if (error.response.status === 400 && !refresh) {
//       refresh = true;
//       const response = await axios.post(
//         "refresh",
//         {},
//         { withCredentials: true }
//       );
//       if (response.status === 200) {
//         axios.defaults.headers.common[
//           "Authorization"
//         ] = `Bearer ${response.payload.accessToken}`;
//         return axios(error.config);
//       }
//     }
//   }
// );
