import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './posts/posts'; // Import the generated API service

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    // other reducers...
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;
