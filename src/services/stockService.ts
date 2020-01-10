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
  // Fetch all stock items from database
  getStockItems() {
    return apiClient.get("/stock");
  },
  // Add stock item to database
  postStockItem(product: any) {
    return apiClient.post("/stock", product);
  },
  // Update stock item in database
  patchStockItem(product: any, newQuantity: number) {
    return apiClient.patch("/stock/" + product.id, { quantity: newQuantity });
  },
  // Delete stock item from database
  deleteStockItem(product: any) {
    return apiClient.delete("/stock/" + product.id);
  }
};
