import { Button, TextField, Typography } from "@mui/material";

import { stylesMui } from "./styles";

const Subscribe = () => {
  return (
    <div className="w-full h-[2.4375rem] flex justify-center items-center">
      <TextField
        fullWidth
        placeholder="Your email address"
        sx={stylesMui.emailInput}
        inputProps={{
          style: {
            height: "0.75rem",
          },
        }}
      />
      <Button
        color="secondary"
        sx={{
          py: { md: "0.25rem", xl: "0.7rem" },
          px: { md: "0.5rem", lg: "1.1rem", xl: "1.38rem" },
          borderRadius: "0 0.75rem 0.75rem 0",
          backgroundColor: "#FF8F1F !important",
        }}
      >
        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
          Subscribe
        </Typography>
      </Button>
    </div>
  );
};

export default Subscribe;
