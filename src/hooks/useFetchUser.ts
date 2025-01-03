import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetchUser() {
 var email = localStorage.getItem('user');
  return useQuery({
    queryKey: ["get-user-by-email"], // Identifiant unique pour la requête
    queryFn: async () => {
      const response = await axios.post("http://localhost:4000/api/users/get-user-by-email",{email:email}); // Faites une requête GET à l'API
      return response.data; // Retournez uniquement les données utiles
    },
  });
}
