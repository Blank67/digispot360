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
import { useSelector } from "react-redux";

export const CustomSidebar = () => {
  const { collapsed } = useSelector(
    (state: RootState) => state.customSideBarReducer
  );
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
          component={<Link to="/dashboard" />}
        >
          Dashboard
        </MenuItem>
        <SubMenu icon={<RiApps2Line />} label="Notice">
          <MenuItem
            icon={<RiSubtractLine />}
            component={<Link to="/notice-add" />}
          >
            Add
          </MenuItem>
          <MenuItem
            icon={<RiSubtractLine />}
            component={<Link to="/notice-list" />}
          >
            List
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<RiPagesLine />} label="Templates">
          <MenuItem
            icon={<RiSubtractLine />}
            component={<Link to="/template-add" />}
          >
            Add
          </MenuItem>
          <MenuItem
            icon={<RiSubtractLine />}
            component={<Link to="/template-list" />}
          >
            List
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<RiPagesLine />} label="Clients">
          <MenuItem
            icon={<RiSubtractLine />}
            component={<Link to="/clients-add" />}
          >
            Add
          </MenuItem>
          <MenuItem
            icon={<RiSubtractLine />}
            component={<Link to="/clients-list" />}
          >
            List
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<RiPagesLine />} label="Physical Copies">
          <MenuItem
            icon={<RiSubtractLine />}
            component={<Link to="/physical-copies-single-add" />}
          >
            Single Upload
          </MenuItem>
          <MenuItem
            icon={<RiSubtractLine />}
            component={<Link to="/physical-copies-bulk-add" />}
          >
            Bulk Upload
          </MenuItem>
          <MenuItem
            icon={<RiSubtractLine />}
            component={<Link to="/physical-copies-list" />}
          >
            List
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<RiPagesLine />} component={<Link to="/reports" />}>
          Reports
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};
