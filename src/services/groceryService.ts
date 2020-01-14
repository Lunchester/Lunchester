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
  // Fetch all grocery items from database
  getGroceryItems() {
    return apiClient.get("/groceries");
  },
  // Add grocery item to database
  postGroceryItem(product: any) {
    return apiClient.post("/groceries", product);
  },
  // Update grocery item in database
  patchGroceryItem(product: any, newQuantity: number) {
    return apiClient.patch("/groceries/" + product.id, {
      quantity: newQuantity
    });
  },
  // Delete grocery item from database
  deleteGroceryItem(product: any) {
    return apiClient.delete("/groceries/" + product.id);
  }
};
