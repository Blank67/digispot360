import { useDispatch, useSelector } from "react-redux";
import "./CustomPageHeader.scss";
import type { RootState } from "@store/index";
import { toggleSidebarCollapse } from "@store/custom-side-bar-slice/customSidebarSlice";

export const CustomPageHeader = () => {
  const dispatch = useDispatch();
  const { collapsed } = useSelector(
    (state: RootState) => state.customSideBarReducer
  );
  return (
    <button
      onClick={() => {
        dispatch(toggleSidebarCollapse(!collapsed));
      }}
    >
      Toggle Sidebar
    </button>
  );
};
