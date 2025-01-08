import axios from "axios";

const useFetchAxiosOrders = async (accountId, accNum) => {
  try {
    const accessToken = localStorage.getItem("token");
    const response = await axios.post(
      `http://localhost:4000/api/accounts/get-all-orders/${accountId}`,
      {
        headers: {
          "access-token": accessToken,
          "acc-num": accNum,
        },
      }
    );
    let res = {};
    res.data = response.data.d.orders; // Stocke la partie `d` de la réponse
    res.id = accountId; // Ajoute l'identifiant du compte
    
    return res; // Retourne les données des ordres
  } catch (error) {
    console.error("Error fetching orders:", error.response?.data || error.message);
    throw error; // Relance l'erreur pour une gestion en amont
  }
};

export default useFetchAxiosOrders;
