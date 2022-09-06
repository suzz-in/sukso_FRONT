import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCommentList = createAsyncThunk("get/commentList", async () => {
  const { data } = await axios.get("http://localhost:3001/commentList");
  return data;
});

export const addCommentList = createAsyncThunk(
  "add/commentList",
  async (newComment) => {
    const { data } = await axios.post(
      "http://localhost:3001/comment",
      newComment
    );
    return data;
  }
);

export const deleteComment = createAsyncThunk("delete/comment", async (id) => {
  const { data } = await axios.delete(`http://localhost:3001/comment/${id}`);
  return data;
});

export const updateComment = createAsyncThunk(
  "update/comment",
  async (updateData) => {
    const { data } = await axios.patch(
      `http://localhost:3001/comment/${updateData.comment.id}`,
      { comment: updateData.patchValue }
    );

    return data;
  }
);

const initialState = { comment: [] };

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    // deleteSetComment: (state, action) => {
    //   state.comment = state.comment.filter(
    //     (comment) => comment.id !== action.payload
    //   );
    // },
    // updateSetComment: (state, action) => {
    //   state.comment.map((item) => {
    //     if (item.id == action.payload.comment.id) {
    //       item.comment = action.payload.patchValue;
    //     }
    //     return item;
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getCommentList.fulfilled, (state, action) => {
      state.comment = action.payload;
      console.log(action.payload);
    });
    builder.addCase(addCommentList.fulfilled, (state, action) => {
      state.comment.push(action.payload);
    });
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
