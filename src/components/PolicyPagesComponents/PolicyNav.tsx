import { NavLink, useLocation } from "react-router-dom";

import { useTheme } from "@mui/material";

const PolicyNav = () => {
  const theme = useTheme();
  const location = useLocation();

  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };

  const activeStyle = {
    color: "#FF8F1F",
  };

  const inactiveStyle = {
    color: theme.palette.mode === "light" ? "black" : "white",
  };

  return (
    <div className="bg-white bg-opacity-5 flex justify-between md:flex-col py-6 px-9 gap-9 w-full relative z-10">
      <NavLink
        to="/web/cookie-policy"
        style={
          isNavLinkActive("/web/cookie-policy") ? activeStyle : inactiveStyle
        }
        className="text-white text-[1.375rem] font-poppins font-medium"
      >
        Cookies Policy
      </NavLink>
      <hr className="border-gray-700" />
      <NavLink
        to="/web/privacy-policy"
        style={
          isNavLinkActive("/web/privacy-policy") ? activeStyle : inactiveStyle
        }
        className="text-white text-[1.375rem] font-poppins font-medium"
      >
        Privacy Policy
      </NavLink>
      <hr className="border-gray-700" />
      <NavLink
        to="/web/disclaimer"
        style={isNavLinkActive("/web/disclaimer") ? activeStyle : inactiveStyle}
        className="text-white text-[1.375rem] font-poppins font-medium"
      >
        Disclaimer
      </NavLink>
      <hr className="border-gray-700" />
      <NavLink
        to="/web/terms-and-conditions"
        style={
          isNavLinkActive("/web/terms-and-conditions")
            ? activeStyle
            : inactiveStyle
        }
        className="text-white text-[1.375rem] font-poppins font-medium"
      >
        Terms & Conditions
      </NavLink>
      <hr className="border-gray-700" />
      <NavLink
        to="/web/return-policy"
        style={
          isNavLinkActive("/web/return-policy") ? activeStyle : inactiveStyle
        }
        className="text-white text-[1.375rem] font-poppins font-medium"
      >
        Return Policy
      </NavLink>
      <hr className="border-gray-700" />
      <NavLink
        to="/web/legal"
        style={isNavLinkActive("/web/legal") ? activeStyle : inactiveStyle}
        className="text-white text-[1.375rem] font-poppins font-medium"
      >
        Legal
      </NavLink>
    </div>
  );
};

export default PolicyNav;
