import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./Slices/authSlice"
import recipeReducer from "./Slices/recipeSlice"

export const store = configureStore({
    reducer: {
        authorizationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;