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
  getGroceryItems() {
    return apiClient.get("/groceries");
  },
  postGroceryItem(product: any) {
    return apiClient.post("/groceries", product);
  },
  patchGroceryItem(product: any, newQuantity: number) {
    return apiClient.patch("/groceries/" + product.id, {
      quantity: newQuantity
    });
  },
  deleteGroceryItem(product: any) {
    return apiClient.delete("/groceries/" + product.id);
  }
};
