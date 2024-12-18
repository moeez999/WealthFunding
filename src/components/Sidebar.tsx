import { NavLink, useLocation } from "react-router-dom";

import { MenuItem } from "@mui/material";

import Logo from "../assets/icons/logo.svg";

interface MenuItem {
  id: number;
  path: string;
  name: string;
  icon?: string;
  activeIcon: string;
}

interface SidebarProps {
  menuItem: MenuItem[];
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItem, isSidebarOpen }) => {
  const location = useLocation();

  const isNavLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="hidden lg:block">
      <NavLink to="/">
        <div className={`mt-6 mb-8 px-4 h-9 flex items-center gap-1 ${isSidebarOpen ? "ml-3":"ml-1"}`}>
          <img src={Logo} alt="logo" className="w-10 h-10" />
          <img
            className={`${!isSidebarOpen ? "opacity-0" : "opacity-100"} h-9`}
            src="../../Icons/tuffxLogoText.svg"
          />
        </div>
      </NavLink>
      <div className="h-full">
        {menuItem?.map((item) => {
          if (item?.id === 999) return <hr className={`mx-auto my-4 ${isSidebarOpen ? "w-[90%]" : "w-12 ml-5"}`} />;
          return (
            <div key={item?.id} className={isSidebarOpen ? "w-auto":"w-12 mx-auto"}>
              <NavLink
                to={item.path}
                className={`font-[Montserrat] mt-3 font-medium text-lg text-white h-12 rounded-[10px] flex justify-start items-center mx-6 hover:bg-[#00BE64] ${isNavLinkActive(item.path)
                    ? "bg-[#00BE64]"
                    : ""
                  } ${isSidebarOpen ? "mx-8 w-[85%] " : "mx-auto justify-center group hover:rounded-r-none"}`}
              >
                <div className={`relative flex gap-7 items-center py-3 ${isSidebarOpen ? "pl-4" : "pl-0"} ${item.id===3 && isSidebarOpen ? "ml-0.5":"ml-0"}`} title={item.name}>
                  {isNavLinkActive(item.path) ? (
                    <img src={item.activeIcon} />
                  ) : (
                    <img src={item.icon} />
                  )}
                  <div
                    className={`link_text ${"text-white"} ${isSidebarOpen ? "block" : "hidden"
                      } group-hover:!block group-hover:absolute group-hover:w-40 group-hover:z-50 group-hover:left-8 group-hover:p-2.5 group-hover:bg-[#00BE64] group-hover:rounded-r-[10px]`}
                  >
                    {item.name}
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
