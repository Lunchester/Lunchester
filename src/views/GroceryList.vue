<template>
  <div>
    <Header title="Grocery list" />
    <Search hasAddButton="true" addButtonLink="grocery-add" />

    <div class="products">
      <Item
        title="Boeren tarwe tijger"
        body="€2,60"
        image="/img/boeren-tarwe-tijger-half.png"
        quantityControls="true"
      />
      <Item
        title="Boeren tarwe tijger"
        body="€2,60"
        image="/img/boeren-tarwe-tijger-half.png"
        quantityControls="true"
      />
      <Item
        title="Boeren tarwe tijger"
        body="€2,60"
        image="/img/boeren-tarwe-tijger-half.png"
        quantityControls="true"
      />
      <Item
        title="Boeren tarwe tijger"
        body="€2,60"
        image="/img/boeren-tarwe-tijger-half.png"
        quantityControls="true"
      />
      <Item
        title="Boeren tarwe tijger"
        body="€2,60"
        image="/img/boeren-tarwe-tijger-half.png"
        quantityControls="true"
      />
      <Item
        title="Boeren tarwe tijger"
        body="€2,60"
        image="/img/boeren-tarwe-tijger-half.png"
        quantityControls="true"
      />
      <Item
        title="Boeren tarwe tijger"
        body="€2,60"
        image="/img/boeren-tarwe-tijger-half.png"
        quantityControls="true"
      />
      <Item
        title="Boeren tarwe tijger"
        body="€2,60"
        image="/img/boeren-tarwe-tijger-half.png"
        quantityControls="true"
      />
      <Item
        title="Boeren tarwe tijger"
        body="€2,60"
        image="/img/boeren-tarwe-tijger-half.png"
        quantityControls="true"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Item from "@/components/shared/BaseItemComponent.vue";
import Search from "@/components/shared/BaseSearchComponent.vue";
import Header from "@/components/shared/BaseHeaderComponent.vue";

export default Vue.extend({
  components: {
    Item,
    Search,
    Header
  }
});
</script>

<style scoped>
.product:nth-child(odd) {
  background: #f5f5f5;
}
</style>
