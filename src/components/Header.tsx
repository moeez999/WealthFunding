import { useState } from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";

import { TextField, InputAdornment } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useAuth } from "../hooks/useAuth";

import HeaderSearchIcon from "../assets/icons/HeaderSearchIcon";
import SidebarOpen from "../assets/icons/sidebarOpen.svg";
import SidebarClosed from "../assets/icons/sidebarClosed.svg";

interface MenuItem {
  id: number;
  path: string;
  name: string;
  activeIcon: string;
  icon?: string;
}

interface HeaderProps {
  menuItem: MenuItem[];
  toggleSidebar: any;
  isSidebarToggleOpen: any;
}

const Header: React.FC<HeaderProps> = ({
  menuItem,
  toggleSidebar,
  isSidebarToggleOpen,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const isNavLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="px-1 mx-2   lg:mx-4 py-5 ">
        <div className="flex md:hidden justify-between   md:gap-16 items-center">
          <IconButton onClick={handleMenuClick}>
            <MenuIcon
              sx={{
                color: "#FF8F1F",
              }}
            />
          </IconButton>
          <button
            onClick={() => navigate("/challenges")}
            className="bg-[#FF8F1F]  gap-2 p-3 rounded-xl"
          >
            <img src="/Images/cup.png" />
          </button>
          <div className="relative inline-block text-left">
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              type="button"
              className="text-white bg-[#212330]  font-medium rounded-xl text-sm px-3 gap-2 text-center inline-flex items-center border "
            >
              <img src="/Images/profile.png" />

              <IconButton>
                <KeyboardArrowDownIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <div
                id="dropdown"
                className="z-10 bg-[#212330] divide-y divide-gray-100 rounded-lg shadow w-28  absolute mt-2"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li onClick={() => setIsOpen(false)}>
                    <Link
                      to="/profile"
                      className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Profile
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/auth/login"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <IconButton
            onClick={() => {
              logout();
              navigate("/web");
            }}
            color="inherit"
          >
            <LogoutIcon />
          </IconButton>
        </div>

        <div className="hidden justify-between md:flex flex-col md:flex-row gap-6 items-center">
          <button onClick={toggleSidebar}>
            {isSidebarToggleOpen ? (
              <img
                className="hidden lg:block"
                src={SidebarOpen}
                alt="Open Sidebar"
              />
            ) : (
              <img
                className="hidden lg:block"
                src={SidebarClosed}
                alt="Closed Sidebar"
              />
            )}
          </button>

          <div className="flex justify-between items-center gap-6">
            <button
              onClick={() => navigate("/challenges")}
              className="bg-[#00BE64] flex items-center gap-2 p-3 rounded-xl"
            >
              <img src="/Icons/cup.svg" />
              <div className="text-black text-base font-medium">
                Start Challenge
              </div>
            </button>

            <TextField
              placeholder="Search"
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#00BE64",
                  appearance: "none",
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0px 0px 0px 1px white",
                  width: 200,
                  height: 46,
                  // bgcolor: "#303343",
                  // borderColor: "none",

                  "& fieldset": {
                    height: 46,
                    borderColor: "transparent",
                    border: "none !important",
                    color: "",
                  },
                },

                "& input::placeholder": {
                  color: "#00BE64",
                  fontSize: "16px !important",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  transform: "translateY(-5%)"
                },
              }}
              //   onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HeaderSearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <div className="relative inline-block text-left">
              <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                type="button"
                className="text-white bg-[#212330]  font-medium rounded-xl text-sm px-3 gap-2 text-center inline-flex items-center border "
              >
                <img src="/Images/profile.png" />
                <div className="flex flex-col items-start">
                  <div className="text-white text-base font-medium">
                    Joe Mann
                  </div>
                  <div className="text-white text-sm font-normal">
                    joe@mann.com
                  </div>
                </div>
                <IconButton>
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "white",
                    }}
                  />
                </IconButton>
              </button>

              {/* Dropdown menu */}
              {isOpen && (
                <div
                  id="dropdown"
                  className="z-10 bg-[#212330] divide-y divide-gray-100 rounded-lg shadow w-56 lg:w-52 2xl-w-56  absolute mt-2"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li onClick={() => setIsOpen(false)}>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Profile
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/auth/login"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <IconButton
              className="hidden md:block"
              onClick={() => {
                logout();
                navigate("/web");
              }}
              color="inherit"
            >
              <LogoutIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <div className=" bg-[#212330] lg:hidden">
        {isSidebarOpen &&
          menuItem?.map((item) => (
            <div key={item?.id}>
              <NavLink
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`font-[Montserrat] mt-3 font-medium text-lg text-white ${
                  isNavLinkActive(item.path)
                    ? "flex items-center mx-8 bg-[#303343] rounded-[10px]"
                    : "flex items-center mx-8 "
                }`}
              >
                <div className="flex gap-7 items-center py-3  pl-4">
                  {isNavLinkActive(item.path) ? (
                    <img src={item.activeIcon} />
                  ) : (
                    <img src={item.icon} />
                  )}
                  <div className={`link_text ${"text-white"}`}>{item.name}</div>
                </div>
              </NavLink>
            </div>
          ))}
      </div>
    </>
  );
};

export default Header;
