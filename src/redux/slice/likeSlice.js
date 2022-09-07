import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLikeCount = createAsyncThunk("get/likeCount", async () => {
  const { data } = await axios.get("http://localhost:3001/likeList/0");
  return data;
});
export const postLikeCount = createAsyncThunk(
  "post/likeCount",
  async (likedata) => {
    console.log(likedata);
    const { data } = await axios.patch("http://localhost:3001/likeList/0", {
      liked: likedata.liked,
      count: likedata.count,
    });
    return data;
  }
);

const initialState = { likeList: {} };

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getLikeCount.fulfilled, (state, action) => {
      state.likeList = action.payload;
    });
    builder.addCase(postLikeCount.fulfilled, (state, action) => {
      state.likeList = action.payload;
      console.log(action.payload);
      action.payload.liked
        ? (state.likeList.count = state.likeList.count--)
        : (state.likeList.count = state.likeList.count++);
    });
  },
});

export const {} = likeSlice.actions;
export default likeSlice.reducer;
