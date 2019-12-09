import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 10000
});

export default {
  getStockItems() {
    return apiClient.get("/stock");
  },
  postStockItem(item: object) {
    return apiClient.post("/stock", item);
  }
};
