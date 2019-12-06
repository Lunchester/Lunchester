import Vue from "vue";
import VueRouter from "vue-router";
import StockList from "@/views/StockList.vue";
import StockAdd from "@/views/StockAdd.vue";
import Scanner from "@/views/Scanner.vue";
import SpecialDay from "@/views/SpecialDay.vue";
import GroceryList from "@/views/GroceryList.vue";
import GroceryAdd from "@/views/GroceryAdd.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "stock-list",
    component: StockList
  },
  {
    path: "/stock/add",
    name: "stock-add",
    component: StockAdd
  },
  {
    path: "/scanner",
    name: "scanner",
    component: Scanner
  },
  {
    path: "/special",
    name: "special",
    component: SpecialDay
  },
  {
    path: "/grocery",
    name: "grocery-list",
    component: GroceryList
  },
  {
    path: "/grocery",
    name: "grocery-add",
    component: GroceryAdd
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
