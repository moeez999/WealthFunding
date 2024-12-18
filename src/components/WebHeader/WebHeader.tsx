import WebDesktopHeader from "./WebDesktopHeader";
import WebMobileHeader from "./WebMobileHeader";

const WebHeader = () => {
  return (
    <>
      <div className="hidden lg:block">
        <WebDesktopHeader />
      </div>
      <div className="w-full lg:hidden">
        <WebMobileHeader />
      </div>
    </>
  );
};

export default WebHeader;
