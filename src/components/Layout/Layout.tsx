import { useEffect, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";

// import LegalIcon from "../LegalIcon";

interface MenuItem {
  id: number;
  path: string;
  name: string;
  activeIcon: string;
  icon?: string;
}

export function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isLoggedIn = localStorage.getItem("islogin") === "true";
  const navigate=useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/web");
    }
  }, [isLoggedIn]);
  const menuItem: MenuItem[] = [
    {
      id: 1,
      path: "/",
      name: "Dashboard",
      activeIcon: "/Icons/dashboard.svg",
      icon: "/Icons/dashboardActive.svg",
    },
    {
      id: 2,
      path: "/challenges",
      name: "Challenges",
      activeIcon: "/Icons/challengesIconActive.svg",
      icon: "/Icons/challengesIcon.svg",
    },
    {
      id: 3,
      path: "/competitions",
      name: "Competitions",
      activeIcon: "/Icons/competitionActive.svg",
      icon: "/Icons/competition.svg",
    },
    {
      id: 4,
      path: "/statistics",
      name: "Statistics",
      activeIcon: "/Icons/statisticsActive.svg",
      icon: "/Icons/statistics.svg",
    },
    {
      id: 5,
      path: "/leaderboards",
      name: "Leaderboards",
      activeIcon: "/Icons/leaderboardActive.svg",
      icon: "/Icons/leaderboard.svg",
    },
    {
      id: 6,
      path: "/certificates",
      name: "Certificates",
      activeIcon: "/Icons/certificatesActive.svg",
      icon: "/Icons/certificates.svg",
    },
    {
      id: 7,
      path: "/billing",
      name: "Billing",
      activeIcon: "/Icons/billingActive.svg",
      icon: "/Icons/billing.svg",
    },
    {
      id: 8,
      path: "/affiliate-portal",
      name: "Affiliate Portal",
      activeIcon: "/Icons/portalActive.svg",
      icon: "/Icons/portal.svg",
    },
    {
      id: 9,
      path: "/profit",
      name: "Profits",
      activeIcon: "Icons/profitsActive.svg",
      icon: "/Icons/profits.svg",
    },
    {
      id: 10,
      path: "/profile",
      name: "Profile",
      activeIcon: "/Icons/profileActive.svg",
      icon: "/Icons/profile.svg",
    },
    {
      id: 999, //!important to be 999
      path: "",
      name: "",
      activeIcon: "",
      icon: "",
    },
    // {
    //   id: ,
    //   path: "/setting",
    //   name: "Setting",
    //   activeIcon: "/Icons/settingActive.svg",
    //   icon: "/Icons/setting.svg",
    // },
    {
      id: 11,
      path: "/faq",
      name: "Help/Faq",
      activeIcon: "/Icons/faqActive.svg",
      icon: "/Icons/faq.svg",
    },
    // {
    //   id: 13,
    //   path: "/contact",
    //   name: "Contact Us",
    //   activeIcon: "/Icons/contactusActive.svg",
    //   icon: "/Icons/contactus.svg",
    // },
    // {
    //   id: 14,
    //   path: "/legal",
    //   name: "Legal",
    //   activeIcon: "/Icons/legalActive.svg",
    //   icon: "/Icons/legal.svg",
    // },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isLoggedIn) {
  

  return (
    <div className="lg:flex ">
      {/* <div className="w-full lg:w-[25%] xl:w-[20%] bg-[#212330]"> */}
      <div
        className={`w-full ${
          isSidebarOpen
            ? "lg:w-[33%] xl:w-[25%]  2xl:w-[20%]"
            : "lg:w-[90px] xl:w-[90px]"
        } bg-[#212330]`}
      >
        <Sidebar menuItem={menuItem} isSidebarOpen={isSidebarOpen} />
      </div>
      <div className="w-full lg:w-[100%] xl:w-[100%] bg-[#212330]">
        <Header
          menuItem={menuItem}
          toggleSidebar={toggleSidebar}
          isSidebarToggleOpen={isSidebarOpen}
        />

        <main className="bg-[#303343] min-h-[100vh] py-6">{children}</main>
      </div>
    </div>
  );
}else{  
  return null;
}
}
