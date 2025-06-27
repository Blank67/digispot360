import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  RiApps2Line,
  RiDashboard2Line,
  RiPagesLine,
  RiSubtractLine,
} from "@remixicon/react";
import "./CustomSidebar.scss";
import type { RootState } from "@store/index";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSubMenu } from "@store/custom-side-bar-slice/customSidebarSlice";

export const CustomSidebar = () => {
  const { collapsed, openSubMenu } = useSelector(
    (state: RootState) => state.customSideBarReducer
  );
  const dispatch = useDispatch();

  const isLinkActive = (path: string) => {
    const currentPath = window.location.pathname;
    return currentPath === path ? "active" : "";
  };

  return (
    <Sidebar
      collapsed={collapsed}
      breakPoint="md"
      className="custom-sidebar"
      backgroundColor="#405189"
    >
      <div className="sidebar-header">
        <div>Digispot 360 Panel</div>
        <div>Menu</div>
      </div>
      <Menu>
        <MenuItem
          icon={<RiDashboard2Line />}
          component={
            <Link to="/dashboard" className={isLinkActive("/dashboard")} />
          }
          onClick={() => {
            dispatch(setOpenSubMenu(null));
          }}
        >
          Dashboard
        </MenuItem>
        <SubMenu
          icon={<RiApps2Line />}
          label="Notice"
          open={openSubMenu === "notice"}
          onClick={() => {
            dispatch(setOpenSubMenu("notice"));
          }}
        >
          <MenuItem
            icon={<RiSubtractLine />}
            component={
              <Link to="/notice-add" className={isLinkActive("/notice-add")} />
            }
          >
            Add
          </MenuItem>
          <MenuItem
            icon={<RiSubtractLine />}
            component={
              <Link
                to="/notice-list"
                className={isLinkActive("/notice-list")}
              />
            }
          >
            List
          </MenuItem>
        </SubMenu>
        <SubMenu
          icon={<RiPagesLine />}
          label="Templates"
          open={openSubMenu === "templates"}
          onClick={() => {
            dispatch(setOpenSubMenu("templates"));
          }}
        >
          <MenuItem
            icon={<RiSubtractLine />}
            component={
              <Link
                to="/template-add"
                className={isLinkActive("/template-add")}
              />
            }
          >
            Add
          </MenuItem>
          <MenuItem
            icon={<RiSubtractLine />}
            component={
              <Link
                to="/template-list"
                className={isLinkActive("/template-list")}
              />
            }
          >
            List
          </MenuItem>
        </SubMenu>
        <SubMenu
          icon={<RiPagesLine />}
          label="Clients"
          open={openSubMenu === "clients"}
          onClick={() => {
            dispatch(setOpenSubMenu("clients"));
          }}
        >
          <MenuItem
            icon={<RiSubtractLine />}
            component={
              <Link
                to="/clients-add"
                className={isLinkActive("/clients-add")}
              />
            }
          >
            Add
          </MenuItem>
          <MenuItem
            icon={<RiSubtractLine />}
            component={
              <Link
                to="/clients-list"
                className={isLinkActive("/clients-list")}
              />
            }
          >
            List
          </MenuItem>
        </SubMenu>
        <SubMenu
          icon={<RiPagesLine />}
          label="Physical Copies"
          open={openSubMenu === "physicalCopies"}
          onClick={() => {
            dispatch(setOpenSubMenu("physicalCopies"));
          }}
        >
          <MenuItem
            icon={<RiSubtractLine />}
            component={
              <Link
                to="/physical-copies-single-add"
                className={isLinkActive("/physical-copies-single-add")}
              />
            }
          >
            Single Upload
          </MenuItem>
          <MenuItem
            icon={<RiSubtractLine />}
            component={
              <Link
                to="/physical-copies-bulk-add"
                className={isLinkActive("/physical-copies-bulk-add")}
              />
            }
          >
            Bulk Upload
          </MenuItem>
          <MenuItem
            icon={<RiSubtractLine />}
            component={
              <Link
                to="/physical-copies-list"
                className={isLinkActive("/physical-copies-list")}
              />
            }
          >
            List
          </MenuItem>
        </SubMenu>
        <MenuItem
          icon={<RiPagesLine />}
          component={
            <Link to="/reports" className={isLinkActive("/reports")} />
          }
          onClick={() => {
            dispatch(setOpenSubMenu(null));
          }}
        >
          Reports
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};
