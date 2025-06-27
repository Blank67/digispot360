import { configureStore } from "@reduxjs/toolkit";
import { customSideBarReducer } from "@store/custom-side-bar-slice/customSidebarSlice";

export const store = configureStore({
    reducer: {
        customSideBarReducer: customSideBarReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;