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
  postGroceryItem(product) {
    return apiClient.post("/groceries", product);
  },
  // Update grocery item in database
  patchGroceryItem(product, newQuantity) {
    return apiClient.patch("/groceries/" + product.id, {
      quantity: newQuantity
    });
  },
  // Delete grocery item from database
  deleteGroceryItem(product) {
    return apiClient.delete("/groceries/" + product.id);
  }
};
