// store.ts

import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './posts/postsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    // other reducers...
  },
});

export default store;
