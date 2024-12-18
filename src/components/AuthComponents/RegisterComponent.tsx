import { Typography } from "@mui/material";

import { AuthRegister } from "../AuthForms";

import { stylesMui } from "./styles";

const RegisterComponent = () => {
  return (
    <section className="w-full flex flex-col  items-center">
      <div className="w-full md:[60%] lg:w-[45%] xl:w-[35%] p-8 md:py-[2.88rem]  flex flex-col justify-between bg-[#212330] rounded-3xl">
        <img className="h-20 md:h-28" src="/Icons/authLogo.svg" />
        <div className="w-full py-3 lg:py-6">
          <Typography
            sx={{
              ...stylesMui.headingForm,
              textAlign: "center",
              color: "#00BE64",
            }}
          >
            Create New Account
          </Typography>
        </div>
        <AuthRegister />
      </div>
    </section>
  );
};

export default RegisterComponent;
