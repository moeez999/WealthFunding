import { InputLabel, MenuItem, Select, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useFetchAccount from "../../hooks/useFetchAccount";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const Dropdown = ({ items }) => {
  const theme = useTheme();
  const [accounts, setAccounts] = useState([]);
  const [selectedValue, setSelectedValue] = useState(""); // État pour la valeur sélectionnée
  const { data, isLoading } = useFetchAccount();

  const { account, setValueAccount } = useAuth();

  useEffect(() => {
    if (data) {
      const formattedAccounts = data.accounts.map((dt) => ({
        label: `Account ${dt.id}`,
        value: JSON.stringify({ id: dt.id, accNum: dt.accNum }), // Formater les données
      }));
      setAccounts(formattedAccounts);

      // Définir une valeur par défaut si les comptes existent
      if (formattedAccounts.length > 0) {
        setSelectedValue(formattedAccounts[0].value); // Prendre le premier élément comme valeur par défaut
        setValueAccount(JSON.parse(formattedAccounts[0].value)); // Mettre à jour le contexte avec la valeur par défaut
      }
    }
  }, [data]); // Réagit uniquement lorsque `data` change

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Met à jour la valeur sélectionnée
    setValueAccount(JSON.parse(event.target.value)); // Mettre à jour le contexte avec la nouvelle valeur
    console.log("Selected account: ", account);
  };

  return (
    <>
      <Select
        IconComponent={() => (
          <ExpandMoreIcon
            fontSize="small"
            sx={{ color: theme.palette.mode === "light" ? "black" : "#DEDEDE" }}
          />
        )}
        value={selectedValue} // Définir la valeur sélectionnée
        onChange={handleChange} // Gestion du changement de sélection
        displayEmpty
        sx={{
          backgroundColor: "#303343",
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
        {accounts.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value} // Associe la valeur à chaque option
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
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default Dropdown;
