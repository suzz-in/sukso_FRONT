import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostLike = createAsyncThunk("get/postLike", async () => {
  const { data } = await axios.get("http://localhost:3001/postLikeList");
  return console.log(data);
});

export const UpdatePostLike = createAsyncThunk(
  "post/updateLike",
  async (postLikeData) => {
    const { data } = await axios.patch("http://localhost:3001/postLikeList", {
      // liked: postLikeData.liked,
      // count: postLikeData.count,
    });
    console.log(data, postLikeData);
    return console.log(postLikeData);
  }
);

const initialState = { postLikeList: [] };

const postLikeSlice = createSlice({
  name: "postLike",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPostLike.fulfilled, (state, action) => {
      state.postLikeList = action.payload;
    });
    builder.addCase(UpdatePostLike.fulfilled, (state, action) => {
      state.postLikeList = action.payload;
      // console.log(action.payload);
      // action.payload.liked
      //   ? (state.likeList.count = state.likeList.count--)
      //   : (state.likeList.count = state.likeList.count++);
    });
  },
});

export const {} = postLikeSlice.actions;
export default postLikeSlice.reducer;
