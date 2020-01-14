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
  // Fetch all spcial day items from database
  getSpecialDayItems() {
    return apiClient.get("/specialdayitems");
  },
  // Fetchh all special day votes from database
  getSpecialDayVotes() {
    return apiClient.get("/specialdayvotes");
  },
  // Add special day vote to database
  postSpecialDayVote(vote: any) {
    return apiClient.post("/specialdayvotes", vote);
  }
};
