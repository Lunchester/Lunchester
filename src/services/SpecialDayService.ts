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
  getSpecialDayItems() {
    return apiClient.get("/specialdayitems");
  },
  getSpecialDayVotes() {
    return apiClient.get("/specialdayvotes");
  },
  postSpecialDayVote(vote: any) {
    return apiClient.post("/specialdayvotes", vote);
  }
};
