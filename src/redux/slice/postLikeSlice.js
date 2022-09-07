import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostLike = createAsyncThunk("get/postLike", async (postId) => {
  const { data } = await axios.get(
    `https://263d857f-2c45-491b-b56e-450884fb98a0.mock.pstmn.io/heart/post/${postId}`
  );
  console.log(data);
  return data;
});

const initialState = { postLikeList: [] };

const postLikeSlice = createSlice({
  name: "postLike",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPostLike.fulfilled, (state, action) => {
      state.postLikeList = action.payload;
    });
    // builder.addCase(UpdatePostLike.fulfilled, (state, action) => {
    //   state.postLikeList = action.payload;
    // console.log(action.payload);
    // action.payload.liked
    //   ? (state.likeList.count = state.likeList.count--)
    //   : (state.likeList.count = state.likeList.count++);
    //   });
  },
});

export const {} = postLikeSlice.actions;
export default postLikeSlice.reducer;
