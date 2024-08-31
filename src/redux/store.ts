import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query'; // ???
import counterReducer from './features/counter/counterSlice.ts';
import { authApi } from './services/auth.ts';
import { userApi } from './services/user.ts';
import { postApi } from './services/post.ts';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [postApi.reducerPath]: postApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(
            authApi.middleware,
            userApi.middleware,
            postApi.middleware
        )
});

// setupListeners(store.dispatch); // ???

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
