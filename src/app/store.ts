import { configureStore } from "@reduxjs/toolkit";
import ArticleReducer from '../feature/articleSlice';
import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        article: ArticleReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Add logger middleware
})

// Export types for usage in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;