import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchOrders = (accountId, accNum) => {
  let accessToken = localStorage.getItem("token");
  return useQuery({
    queryKey: ["get-all-positions", accountId], // Identifiant unique pour la requête
    queryFn: async () => {
      const response = await axios.post(
        `http://localhost:4000/api/accounts/get-all-orders/${accountId}`,
        {
          headers: {
            "access-token": accessToken,
            "acc-num": accNum,
          },
        }
      );
      return response.data; // Retourne les données des positions
    }
  });
};

export default useFetchOrders;
