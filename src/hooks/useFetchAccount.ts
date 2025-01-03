import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useFetchUser from "./useFetchUser";

export default function useFetchAccount() {
  const accessToken= localStorage.getItem("token");
  return useQuery({
    queryKey: ["get-accounts"], // Inclure userId comme dépendance
    queryFn: async () => {
      const response = await axios.post("http://localhost:4000/api/accounts/get-all-accounts", {
        accessToken:accessToken
      });
      return response.data;
    }
  });
}
