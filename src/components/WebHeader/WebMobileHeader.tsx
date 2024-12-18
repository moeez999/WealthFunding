import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Menu, MenuItem as MuiMenuItem, Typography } from "@mui/material";

import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import FullLogo from "../../assets/images/fullLogo.svg";
import HeaderEllipseRight from "../../assets/images/headerEllipseRight.png";

import { webHeaderMenuItems } from "../../constants/webHeaderMenuItems";
import AuthButton from "./AuthButton";

const WebMobileHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const location = useLocation();

  const isNavLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <div
        className="relative px-4 w-full h-[75px] flex justify-between items-center"
        id="toolbar"
      >
        <div
          className="flex justify-start items-center w-[229] h-[34px] z-10"
          id="logo"
        >
          <NavLink to="/web" className="logo-link p-2">
            <img src={FullLogo} alt="tuffx" width="72px" height="60.12px" />
          </NavLink>
        </div>

        <div className="absolute -top-16">
          <img src={HeaderEllipseRight} height="100%" />
        </div>

        <div className="flex justify-end">
          <div className="flex gap-2 mx-2">
            <AuthButton path="/auth/sign-up" text="Sign up" />
            <AuthButton path="/auth/login" text="Login" />
          </div>
          <div className="flex items-center gap-2 z-10" id="register-hamburger">
            <button
              className="bg-transparent border-none"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          {webHeaderMenuItems?.map((item) => (
            <MuiMenuItem
              key={item?.id}
              onClick={() => setAnchorEl(null)}
              selected={isNavLinkActive(item.path)}
            >
              <NavLink
                to={item.path}
                className="font-[Montserrat] font-medium text-lg text-black"
              >
                <Typography variant="body1">{item.name}</Typography>
              </NavLink>
            </MuiMenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
};

export default WebMobileHeader;
