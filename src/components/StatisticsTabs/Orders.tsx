import { Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Pagination from "../Pagination";
import { useEffect, useState } from "react";
import useFetchAccount from "../../hooks/useFetchAccount";
import useFetchAxiosOrders from "../../hooks/useFetchAxiosOrders";
import { useAuth } from "../../hooks/useAuth";

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
  const {account} = useAuth();
  // const [accountId, setAccountId] = useState("1169186"); // ID du compte
  // const [accNum, setAccNum] = useState("1"); // Numéro de compte
  const [formattedOrders, setFormattedOrders] = useState([]);
  //const {data}=useFetchOrders(accountId, accNum);
  const {data: dataAccounts}=useFetchAccount();

  const [ordersData, setOrdersData] = useState([]); // Stocke les ordres
  const [error, setError] = useState(null); // Gestion des erreurs

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        if (dataAccounts?.accounts) {
          const ordersPromises = dataAccounts.accounts.map((account) =>
            useFetchAxiosOrders(account.id, account.accNum)
          );

          const allOrders = await Promise.all(ordersPromises); // Exécute toutes les requêtes en parallèle
          setOrdersData(allOrders.flat()); // Combine les données en un seul tableau
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError(err);
      }
    };
    
    fetchAllOrders();
  }, [dataAccounts]);
  console.log(ordersData)
  
  useEffect(() => {
    if (ordersData && account) {
      console.log("Account:", account);
  
      // Filtrer et formater les ordres
      const filteredOrders = ordersData
        .filter((el) => el.id === account.id) // Vérifie si l'ID correspond
        .flatMap((el) => el.data || []); // Combine toutes les données de `data` si disponibles
  
      const formattedOrders = filteredOrders.map((order) => ({
        id: order[0],
        symbol: order[1],
        quantity: order[3] || "N/A",
        side: order[4] || "N/A",
        type: order[5] || "N/A",
        status: order[6] || "Unknown",
        price: order[9] || null,
        stopLoss: order[17] || null,
        takeProfit: order[19] || null,
        timeInForce: order[12] || "GTC",
        createdAt: order[13]
          ? new Date(Number(order[13])).toLocaleString("en-US")
          : "Invalid Date",
        expireAt: order[14] || null,
      }));
  
      setFormattedOrders(formattedOrders || []); // Met à jour avec les ordres formatés ou un tableau vide
    }
  }, [ordersData, account]);
  
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
