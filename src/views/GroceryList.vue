<template>
  <div>
    <Header title="Grocery list" />
    <Search :hasAddButton="true" addButtonLink="grocery-add" />

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
      products: "grocery/getGroceryProducts"
    })
  }
});
</script>

<style scoped>
.product:nth-child(odd) {
  background: #f5f5f5;
}
</style>
