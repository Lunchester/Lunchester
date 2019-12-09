<template>
  <div class="items">
    <Header title="Add to grocery list" />
    <Search />

    <Item
      v-for="product in products"
      :key="product.id"
      :product="product"
      :addControls="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Item from "@/components/grocery/GroceryItemComponent.vue";
import Search from "@/components/shared/BaseSearchComponent.vue";
import Header from "@/components/shared/BaseHeaderComponent.vue";

export default Vue.extend({
  components: {
    Item,
    Search,
    Header
  },
  computed: {
    ...mapState("product", ["products"])
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
