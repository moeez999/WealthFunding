import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface AuthButtonProps {
  text: string;
  path: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ text, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate("/web/sign-up");
    navigate(path);
  };

  return (
    <Button
      color="inherit"
      onClick={handleClick}
      sx={{
        py: { sm: "0.25rem", md: "0.75rem" },
        px: { sm: "0.5rem", md: "1.5rem" },
        borderRadius: "48px",
        backgroundColor: "#00BE64 !important",
      }}
    >
      <Typography
        sx={{
          textTransform: "none",
          color: "white",
          textAlign: "center",
          fontFamily: "Poppins",
          fontSize: "1.125rem",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "1.5rem",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default AuthButton;
