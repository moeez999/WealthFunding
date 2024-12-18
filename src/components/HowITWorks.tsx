import {
  Card,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import MainTitleComponent from "./MainTitleComponent";
import HeaderSearchIcon from "../assets/icons/HeaderSearchIcon";

interface AdditionalDataInterface {
  id: number;
  image: string;
  title: string;
  description: string;
  monthTime: string;
}
const HowITWorks = () => {
  const theme = useTheme();
  const AdditionalData: AdditionalDataInterface[] = [
    {
      id: 1,
      image: "Icons/Img1.png",
      title: "Who Can I Contact for Technical Support?",
      description:
        "You can contact our technical support team through the following channels:",
      monthTime: "2 month Ago",
    },
    {
      id: 2,
      image: "/Icons/Img1.png",
      title: "Who Can I Contact for Technical Support?",
      description:
        "You can contact our technical support team through the following channels:",
      monthTime: "2 month Ago",
    },
    {
      id: 3,
      image: "/Icons/Img1.png",
      title: "Who Can I Contact for Technical Support?",
      description:
        "You can contact our technical support team through the following channels:",
      monthTime: "2 month Ago",
    },
  ];

  return (
    <div className="mx-4 sm:mx-6 xl:mx-10 py-6">
      <div className="flex flex-col md:flex-row justify-between gap-y-4">
        <MainTitleComponent
          Image="/Icons/HowItWorksIcon.svg"
          title="Additional Information"
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <Typography
          sx={{
            fontSize: 16,
            color: theme.palette.mode === "light" ? "black" : "white",
            mt: 2,
          }}
        >
          Per Page
        </Typography>
        <TextField
          placeholder="Search..."
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: theme.palette.mode === "light" ? "black" : "#dedede",
              border: "none",

              borderColor: "none",
              fontSize: 16,
              fontFamily: "Montserrat",

              height: 44,

              "& fieldset": {
                borderColor: theme.palette.mode === "light" ? "black" : "gray",
                borderRadius: "10px",
              },
            },

            "& input::placeholder": {
              color: theme.palette.mode === "light" ? "black" : "white",

              fontSize: "16px",
              fontWeight: 400,
              fontFamily: "Montserrat",
            },
          }}
          //   onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HeaderSearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="flex flex-wrap gap-6 md:gap-12 mt-10">
        {AdditionalData?.map((item) => (
          <Card
            key={item.id}
            sx={{ width: 320, p: { xs: 1, md: 3 }, borderRadius: "12px" }}
          >
            <img
              className="rounded-[8px]"
              src={item?.image}
              width="100%"
              height={100}
            />
            <Typography
              sx={{
                fontSize: 16,
                color: theme.palette.mode === "light" ? "black" : "white",
                mt: 2,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: "#646464",
                lineHeight: "24.79px",
                mt: 3,
              }}
            >
              {item.description}
            </Typography>

            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                mt: 2,
              }}
            >
              {item.monthTime}
            </Typography>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HowITWorks;
