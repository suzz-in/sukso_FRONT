import axios from "axios";

const API = axios.create({
  baseURL: "https://a358bdec-994d-43d3-9c5d-094e23523748.mock.pstmn.io",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
});

export default API;
