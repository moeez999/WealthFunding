import { Typography, useTheme } from "@mui/material";

import ActiveCard from "./ActiveCard";

import { stylesMui } from "./styles";
import InactiveCard from "./InactiveCard";

const ContestsPageComponent = () => {
  const theme = useTheme();
  return (
    <section className="w-full">
      <div
        className="mt-16 md:mt-[8rem] xl:mt-[11.88rem] w-full flex flex-col items-center justify-center"
        id="active"
      >
        <Typography
          sx={{
            ...stylesMui.featuredChallenge,
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Active Challenge
        </Typography>
        <div className="mt-4 md:mt-8 xl:mt-11 w-full md:w-[65%]">
          <ActiveCard
            challengeTitle="Flowers"
            challengeDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
            submissionsCount="100"
            maxScore="28"
            difficulty="20"
          />
        </div>
      </div>

      <div className="mt-8 md:mt-14 xl:mt-[5.38rem]" id="in-active">
        <div className="ml-4 md:ml-[4rem] xl:ml-[7rem]" id="challenges">
          <Typography sx={stylesMui.challenges}>Challenges</Typography>
          <Typography sx={stylesMui.challengesSubtext}>
            Set up the profit targets & draw-down limits.
          </Typography>
        </div>
        <div
          className="p-4 md:p-0 mt-4 md:mt-8 xl:mt-[2.12rem] w-full flex flex-wrap gap-4 justify-center"
          id="challenges-grid"
        >
          <div
            className={`w-full md:w-[45%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <InactiveCard
              challengeTitle="Flowers"
              challengeDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
              contestantsCount="100"
              enrolledCount="28"
              winner="Okkaynym"
            />
          </div>
          <div
            className={`w-full md:w-[45%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <InactiveCard
              challengeTitle="Flowers"
              challengeDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
              contestantsCount="100"
              enrolledCount="28"
              winner="Okkaynym"
            />
          </div>
          <div
            className={`w-full md:w-[45%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <InactiveCard
              challengeTitle="Flowers"
              challengeDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
              contestantsCount="100"
              enrolledCount="28"
              winner="Okkaynym"
            />
          </div>
          <div
            className={`w-full md:w-[45%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <InactiveCard
              challengeTitle="Flowers"
              challengeDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
              contestantsCount="100"
              enrolledCount="28"
              winner="Okkaynym"
            />
          </div>
          <div
            className={`w-full md:w-[45%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <InactiveCard
              challengeTitle="Flowers"
              challengeDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
              contestantsCount="100"
              enrolledCount="28"
              winner="Okkaynym"
            />
          </div>
          <div
            className={`w-full md:w-[45%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <InactiveCard
              challengeTitle="Flowers"
              challengeDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
              contestantsCount="100"
              enrolledCount="28"
              winner="Okkaynym"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContestsPageComponent;
