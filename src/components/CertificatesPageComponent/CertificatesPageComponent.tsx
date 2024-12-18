import { useTheme } from "@mui/material";

import CertificateCard from "./CertificateCard";

const CertificatesPageComponent = () => {
  const theme = useTheme();
  return (
    <section className="w-full px-8 md:px-14 xl:px-20">
      <div className="mt-8 md:mt-14 xl:mt-[5.38rem]" id="in-active">
        <div
          className="p-4 md:p-0 mt-4 md:mt-8 xl:mt-[2.12rem] w-full flex flex-wrap gap-8 md:gap-10 xl:gap-14 justify-between"
          id="certificates-grid"
        >
          <div
            className={`w-full md:w-[30%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <CertificateCard
              certificateId="1"
              certificateTitle="Cameron"
              certificateDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
            />
          </div>
          <div
            className={`w-full md:w-[30%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <CertificateCard
              certificateId="2"
              certificateTitle="Cameron"
              certificateDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
            />
          </div>
          <div
            className={`w-full md:w-[30%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <CertificateCard
              certificateId="3"
              certificateTitle="Cameron"
              certificateDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
            />
          </div>
          <div
            className={`w-full md:w-[30%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <CertificateCard
              certificateId="4"
              certificateTitle="Cameron"
              certificateDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
            />
          </div>
          <div
            className={`w-full md:w-[30%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <CertificateCard
              certificateId="5"
              certificateTitle="Cameron"
              certificateDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
            />
          </div>
          <div
            className={`w-full md:w-[30%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <CertificateCard
              certificateId="6"
              certificateTitle="Cameron"
              certificateDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesPageComponent;
