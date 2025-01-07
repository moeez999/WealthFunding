import { NavLink, useLocation } from "react-router-dom";
import HeaderEllipseLeft from "../../assets/images/headerEllipseLeft.png";
import HeaderEllipseRight from "../../assets/images/headerEllipseRight.png";

import { webHeaderMenuItems } from "../../constants/webHeaderMenuItems";

import AuthButton from "./AuthButton";
import { Typography } from "@mui/material";

const WebDesktopHeader = () => {
  const location = useLocation();

  const isNavLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <section className="py-[20px] xl:py-[30px] relative">
      <div className="absolute top-0 left-0">
        <img src={HeaderEllipseLeft} height="100%" />
      </div>
      <div
        className="md:px-8 2xl:px-12 w-full flex justify-between items-center"
        id="toolbar"
      >
        <div className="flex items-center">
          <div
            className="flex justify-start xl:justify-center items-center w-[90px] xl:w-[150px] h-[34px] border-r border-white pr-4"
            id="logo"
          >
            <NavLink to="/web" className="logo-link cursor-pointer z-10">
              <img
                src="../../../Icons/mainlogo.png"
                alt="tuffx"
                width="150px"
                height="120.12px"
              />
            </NavLink>
          </div>
          {/* <div className="w-[1px] h-[66px] opacity-10 bg-white" /> */}
          <div
            className="flex justify-center gap-6 items-center pl-4"
            id="navbar"
          >
            {webHeaderMenuItems?.map((item) => (
              <div className="md:px-1 2xl:px-3 z-10" key={item?.id}>
                <NavLink
                  to={item.path}
                  className={`font-[Montserrat] font-medium text-sm text-white ${
                    isNavLinkActive(item.path)
                      ? "flex items-center bg-white bg-opacity-30 rounded-md px-4 m-1 h-10"
                      : ""
                  }`}
                >
                  <div className="md:px-1 2xl:px-4 md:py-1 2xl:py-4 flex gap-4 items-center">
                    <div className="link_text text-white">
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "14px",
                        }}
                        variant="body1"
                      >
                        {item.name}
                      </Typography>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4"
          id="register"
        >
          <div className="hidden lg:flex gap-2 z-10">
            <AuthButton path="/auth/sign-up" text="Register Now" />
            <AuthButton path="/auth/login" text="Login" />
          </div>
        </div>
      </div>
      <div className="absolute -top-10 right-0 z-0">
        <img src={HeaderEllipseRight} width="100%" height="100%" />
      </div>
    </section>
  );
};

export default WebDesktopHeader;
