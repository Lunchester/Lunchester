<template>
  <div class="items">
    <Header title="Stock" />
    <Search :hasAddButton="true" addButtonLink="stock-add" />
    <Item
      v-for="product in products"
      :key="product.id"
      :product="product"
      :quantityControls="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Search from "@/components/shared/BaseSearchComponent.vue";
import Header from "@/components/shared/BaseHeaderComponent.vue";
import Item from "@/components/stock/StockItemComponent.vue";

export default Vue.extend({
  components: {
    Item,
    Search,
    Header
  },
  created() {
    this.$store.dispatch("stock/fetchStockItems");
  },
  computed: {
    ...mapGetters({
      products: "stock/getStockProducts"
    })
  }
});
</script>

<style scoped>
.items {
  margin-bottom: 60px;
}

.item:nth-child(odd) {
  background: #f5f5f5;
}
</style>
