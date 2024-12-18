import { NavLink } from "react-router-dom";

// import { Typography } from "@mui/material";

import FullLogo from "../../assets/images/fullLogo.svg";
import HeaderEllipseLeft from "../../assets/images/headerEllipseLeft.png";
import HeaderEllipseRight from "../../assets/images/headerEllipseRight.png";

// import { webHeaderMenuItems } from "../../constants/webHeaderMenuItems";

import AuthButton from "./AuthButton";

const WebDesktopHeader = () => {
  // const location = useLocation();

  // const isNavLinkActive = (path: string) => {
  //   return location.pathname === path;
  // };

  return (
    <section
      className="py-[20px] xl:py-[30px] relative"
      style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}
    >
      <div className="absolute top-0 left-0">
        <img src={HeaderEllipseLeft} height="100%" />
      </div>
      <div
        className="md:px-8 2xl:px-12 w-full flex justify-between items-center"
        id="toolbar"
      >
        <div className="flex items-center">
          <div
            className="flex justify-start xl:justify-center items-center w-[90px] xl:w-[150px] h-[34px]"
            id="logo"
          >
            <NavLink to="/web" className="logo-link cursor-pointer z-10">
              <img src={FullLogo} alt="tuffx" width="82px" height="70.12px" />
            </NavLink>
          </div>
          {/* <div className="w-[1px] h-[66px] opacity-10 bg-white" /> */}
          {/* <div className="flex justify-center items-center" id="navbar">
            {webHeaderMenuItems?.map((item) => (
              <div className="md:px-1 2xl:px-3 z-10" key={item?.id}>
                <NavLink
                  to={item.path}
                  className={`font-[Montserrat] font-medium text-lg text-white ${
                    isNavLinkActive(item.path)
                      ? "flex items-center bg-white bg-opacity-30 rounded-full m-1 h-10"
                      : ""
                  }`}
                >
                  <div className="md:px-1 2xl:px-4 md:py-1 2xl:py-4 flex gap-4 items-center">
                    <div className="link_text text-white">
                      <Typography
                        sx={{
                          color: "white",
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
          </div> */}
        </div>

        <div
          className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4"
          id="register"
        >
          <div className="hidden lg:flex gap-2 z-10">
            <AuthButton path="/auth/sign-up" text="Sign up" />
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
