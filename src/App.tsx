import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// pages
import Contact from "./pages/Contact";
import Cookie from "./pages/Cookie";
import Disclaimer from "./pages/Disclaimer";
import Faqs from "./pages/Faqs";
import Landing from "./pages/Landing";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Returns from "./pages/Returns";
import Terms from "./pages/Terms";
import Forgot from "./pages/authentication/Forgot";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";

// components
import { Layout } from "./components/Layout/Layout";
import Statistics from "./components/Statistics";
import WebFooter from "./components/WebFooter";
import WebHeader from "./components/WebHeader";

import AffiliatePortal from "./components/AffiliatePortal";
import Billing from "./components/Billing";
import Certificates from "./components/Certificates";
import Competitions from "./components/Competitions";

import Faq from "./components/Faq";
import HowITWorks from "./components/HowITWorks";
import Leaderboard from "./components/LeaderBoard/Leaderboard";
import Profit from "./components/Profit";
import RegistrationDetails from "./components/RegistrationDetails";

import { useEffect } from "react";
import Challenges from "./components/Challenges/Challenges";
import Profile from "./components/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const WebRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/faqs" element={<Faqs />} />
    <Route path="/legal" element={<Legal />} />
    <Route path="/terms-and-conditions" element={<Terms />} />
    <Route path="/return-policy" element={<Returns />} />
    <Route path="/privacy-policy" element={<Privacy />} />
    <Route path="/disclaimer" element={<Disclaimer />} />
    <Route path="/cookie-policy" element={<Cookie />} />
    <Route path="*" element={<Navigate to="/web" />} />
  </Routes>
);

function App() {
  const { isLoggedIn } = useAuth();
  const queryClient = new QueryClient();
  useEffect(() => {
    console.log("Is logged in?", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <HashRouter>
          {/* {window.location.pathname.includes("/web") && <WebHeader />} */}
          {/* {isLoggedIn && window.location.pathname.includes("/web") && ( */}
          {/* {!isLoggedIn && <WebHeader />} */}
          {!isLoggedIn && !window.location.pathname.startsWith("/auth") && (
            <WebHeader />
          )}
          <Routes>
            <Route path="/web/*" element={<WebRoutes />} />
            <Route
              path="/registration-details"
              element={<RegistrationDetails />}
            />
            <Route
              path="/auth/*"
              element={
                <Routes>
                  <Route path="/sign-up" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<Forgot />} />
                </Routes>
              }
            />
            <Route
              path="/*"
              element={
                <Layout
                  children={
                    <Routes>
                      <Route path="/" element={<Statistics />} />
                      <Route path="/challenges" element={<Challenges />} />
                      <Route path="/statistics" element={<Statistics />} />
                      <Route path="/competitions" element={<Competitions />} />
                      <Route path="/leaderboards" element={<Leaderboard />} />
                      <Route path="/certificates" element={<Certificates />} />
                      <Route path="/billing" element={<Billing />} />
                      <Route path="/profit" element={<Profit />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/faq" element={<Faq />} />
                      <Route path="/howitworks" element={<HowITWorks />} />
                      <Route
                        path="/affiliate-portal"
                        element={<AffiliatePortal />}
                      />
                    </Routes>
                  }
                />
              }
            />
          </Routes>
          {/* {window.location.pathname.includes("/web") && <WebFooter />} */}
          {!isLoggedIn && <WebFooter />}
        </HashRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
