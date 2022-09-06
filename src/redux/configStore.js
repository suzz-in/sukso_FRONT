import { configureStore } from "@reduxjs/toolkit";
import post from "./slice/postSlice";
import comment from "./slice/commentSlice";
import like from "./slice/likeSlice";

const store = configureStore({
  reducer: { post, comment, like },
});

export default store;
