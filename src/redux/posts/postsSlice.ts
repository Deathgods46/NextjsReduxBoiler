// postsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    fetchPostsStart(state) {
      state.status = 'loading';
    },
    fetchPostsSuccess(state, action) {
      state.status = 'succeeded';
      state.posts = action.payload;
    },
    fetchPostsFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = postsSlice.actions;

export default postsSlice.reducer;
