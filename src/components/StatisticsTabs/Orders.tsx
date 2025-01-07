import { Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Pagination from "../Pagination";
import { useEffect, useState } from "react";
import useFetchOrders from "../../hooks/useFetchOrders";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 150,
    editable: false,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
    editable: false,
  },
  {
    field: "side",
    headerName: "Side",
    width: 100,
    editable: false,
  },
  {
    field: "symbol",
    headerName: "Symbol",
    width: 150,
    editable: false,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
    editable: false,
  },
  {
    field: "stopLoss",
    headerName: "Stop Loss",
    width: 150,
    editable: false,
  },
  {
    field: "takeProfit",
    headerName: "Take Profit",
    width: 150,
    editable: false,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 250,
  }
 

];

const rows = [
  {
    id: 1,
    Time: "Open Time 1",
    Message: 100.5,
    Details: 105.2,
  },
];

const Orders = () => {
  const theme = useTheme();
  const [accountId, setAccountId] = useState("1169186"); // ID du compte
  const [accNum, setAccNum] = useState("1"); // Numéro de compte
  const [dataOrders, setDataOrders] = useState([]);
  const [formattedOrders, setFormattedOrders] = useState([]);
  const {data}=useFetchOrders(accountId, accNum);

  useEffect(() => {
    if (data) {
      setDataOrders(data);
      setFormattedOrders(
        data?.d?.orders?.map((order) => ({
          id: order[0],
          symbol: order[1],
          quantity: order[3] || "N/A", // Valeur par défaut si non disponible
          side: order[4] || "N/A", // Valeur par défaut
          type: order[5] || "N/A", // Valeur par défaut
          status: order[6] || "Unknown", // Valeur par défaut
          price: order[9] || null, // Null si le prix n'est pas disponible
          stopLoss: order[17] || null, // Null par défaut pour Stop Loss
          takeProfit: order[19] || null, // Null par défaut pour Take Profit
          timeInForce: order[12] || "GTC", // Valeur par défaut
          createdAt: order[13]
            ? new Date(Number(order[13])).toLocaleString("en-US")
            : "Invalid Date", // Gérer les dates invalides
          expireAt: order[14] || null, // Null si non disponible
        })) || [] // Retourner un tableau vide si `data?.d.orders` est invalide
      );
      
    }
  }, [accountId, accNum, data]);
  return (
    <>
      <div className="p-3 md:p-6 rounded-[8px] bg-[#212330]">
        <Typography
          sx={{
            fontSize: 24,
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Closed Trades
        </Typography>

        <DataGrid
          sx={{
            border: "none",
            ".MuiDataGrid-cell": {
              border: "none",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: "14px",
              fontFamily: "Montserrat",
              fontWeight: 500,
            },
            ".MuiDataGrid-columnHeaders": {
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: "14px",
              fontFamily: "Montserrat",
              fontWeight: 500,
              borderRadius: "8px",
            },
            ".MuiDataGrid-row": {},
          }}
          rows={formattedOrders}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          getRowId={(row: any) => {
            return row?.id;
          }}
          columns={columns}
          hideFooter
          // checkboxSelection
          // disableRowSelectionOnClick
        />
      </div>
      <Pagination />
    </>
  );
};

export default Orders;
