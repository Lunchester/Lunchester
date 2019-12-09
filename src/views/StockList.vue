<template>
  <div>
    <Header title="Stock" />
    <Search :hasAddButton="true" addButtonLink="stock-add" />
    <Item
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :image="product.image"
      :quantity="product.quantity"
      :quantityControls="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Item from "@/components/shared/BaseItemComponent.vue";
import Search from "@/components/shared/BaseSearchComponent.vue";
import Header from "@/components/shared/BaseHeaderComponent.vue";

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
.product:nth-child(odd) {
  background: #f5f5f5;
}
</style>
