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
  postStockItem(product: any) {
    return apiClient.post("/stock", product);
  },
  patchStockItem(product: any, newQuantity: number) {
    return apiClient.patch("/stock/" + product.id, { quantity: newQuantity });
  },
  deleteStockItem(product: any) {
    return apiClient.delete("/stock/" + product.id);
  }
};
