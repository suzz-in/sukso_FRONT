import { configureStore } from "@reduxjs/toolkit";
import post from "./slice/postSlice";
import comment from "./slice/commentSlice";
import like from "./slice/likeSlice";
import postLike from "./slice/postLikeSlice";

const store = configureStore({
  reducer: { post, comment, like, postLike },
});

export default store;
