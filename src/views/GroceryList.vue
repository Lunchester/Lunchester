<template>
  <div>
    <Header title="Grocery list" />
    <Search :hasAddButton="true" addButtonLink="grocery-add" />

    <div class="products">
      <Item
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :body="product.price"
        :image="product.image"
        :quantity="product.quantity"
        :quantityControls="true"
      />
    </div>
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
