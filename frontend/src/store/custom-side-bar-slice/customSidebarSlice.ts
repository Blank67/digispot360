import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { CustomSidebarSliceState } from "@utils/types";

const pathObject = {
  "/dashboard": "dashboard",
  "/notice-add": "notice",
  "/notice-list": "notice",
  "/template-add": "templates",
  "/template-list": "templates",
  "/clients-add": "clients",
  "/clients-list": "clients",
  "/physical-copies-single-add": "physicalCopies",
  "/physical-copies-bulk-add": "physicalCopies",
  "/physical-copies-list": "physicalCopies",
  "/reports": "reports",
};

const initialState: CustomSidebarSliceState = {
  collapsed: false,
  openSubMenu:
    pathObject[window.location.pathname as keyof typeof pathObject] || null,
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
