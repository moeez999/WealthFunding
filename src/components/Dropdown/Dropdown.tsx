import { InputLabel, MenuItem, Select, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Dropdown = () => {
  const theme = useTheme();
  const options: { label: string; value: string }[] = [
    { label: "Select a date", value: "" },
    { label: "22", value: "english" },
    { label: "23", value: "spanish" },
    { label: "25", value: "french" },
  ];
  return (
    <>
      <Select
        IconComponent={() => (
          <ExpandMoreIcon
            fontSize="small"
            sx={{ color: theme.palette.mode === "light" ? "black" : "#DEDEDE" }}
          />
        )}
        // name={name}
        // value={value}
        // onChange={onChange}
        displayEmpty
        sx={{
          backgroundColor: "#303343",
          // width: { xs: 250, sm: 230, lg: 270 },
          width: { xs: "100%", sm: 230, lg: 270 },
          height: 46,
          borderRadius: "12px",
          border: "1px solid white",
          px: 1,

          "& .MuiOutlinedInput-input": {
            fontSize: "16px",
            fontFamily: "Montserrat",
            fontWeight: 400,
            color: "white",
          },

          "& .MuiSelect-icon": {
            fontSize: 32,
          },
        }}
      >
        <InputLabel
          sx={{
            "& .MuiInputLabel-rootcolor": {
              color: "white",
              fontWeight: 400,
              fontSize: 10,
            },
          }}
          htmlFor="select-placeholder"
          className="bg-[#212330]"
        >
          Account 568761
        </InputLabel>
        {options.map((option) => (
          <MenuItem
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 400,
              fontSize: 16,
              color: theme.palette.mode === "light" ? "black" : "#DEDEDE",

              "&:hover": {
                bgcolor: theme.palette.mode === "light" ? "white" : "#061D39",
                color: theme.palette.mode === "light" ? "black" : "#DEDEDE",
              },

              "&.Mui-selected, &.Mui-selected:hover": {
                bgcolor: theme.palette.mode === "light" ? "white" : "#061D39",
                color: theme.palette.mode === "light" ? "black" : "#DEDEDE",
              },
            }}
            className="bg-[#212330] hover:bg-[rgba(255,255,255,0.3)]"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default Dropdown;
