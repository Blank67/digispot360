import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { CustomSidebarSliceState } from "@utils/types";

const initialState: CustomSidebarSliceState = {
  collapsed: false,
  openSubMenu: null,
};

const customSideBarSlice = createSlice({
  name: "Custom Sidebar",
  initialState,
  reducers: {
    toggleSidebarCollapse: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload;
    },
    setOpenSubMenu: (state, action: PayloadAction<string | null>) => {
      state.openSubMenu = action.payload;
    },
    resetSidebar: (state) => {
      state.collapsed = false;
      state.openSubMenu = null;
    },
  },
});

export const { toggleSidebarCollapse, setOpenSubMenu, resetSidebar } =
  customSideBarSlice.actions;

export const customSideBarReducer = customSideBarSlice.reducer;
