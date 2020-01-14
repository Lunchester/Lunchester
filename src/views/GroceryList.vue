<template>
  <div class="groceries">
    <Header title="Grocery list" />
    <Search :hasAddButton="true" addButtonLink="grocery-add" />

    <Item
      v-for="product in products"
      :key="product.id"
      :product="product"
      :quantityControls="true"
    />

    <div class="tax">
      <span>Tax</span>
      <span>€{{ totalTax.toFixed(2) }}</span>
    </div>

    <div class="price">
      <span>Total</span>
      <span>€{{ totalPrice.toFixed(2) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Item from "@/components/grocery/GroceryItemComponent.vue";
import Search from "@/components/shared/BaseSearchComponent.vue";
import Header from "@/components/shared/BaseHeaderComponent.vue";

export default Vue.extend({
  components: {
    Item,
    Search,
    Header
  },
  created() {
    this.$store.dispatch("grocery/fetchGroceryItems");
  },
  computed: {
    ...mapGetters({
      products: "grocery/getGroceryProducts",
      totalPrice: "grocery/getGroceryTotalPrice",
      totalTax: "grocery/getGroceryTaxPrice"
    })
  }
});
</script>

<style scoped>
.groceries {
  margin-bottom: 120px;
}

.item:nth-child(odd) {
  background: #f5f5f5;
}

.tax {
  display: flex;
  justify-content: space-between;
  margin: 16px 24px 0;
  padding: 16px 0;
  border-top: 1px solid #cccccc;
  color: #cccccc;
  font-size: 18px;
}

.price {
  display: flex;
  justify-content: space-between;
  margin: 0 24px;
  font-size: 24px;
  font-weight: 600;
}
</style>
