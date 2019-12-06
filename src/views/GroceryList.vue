<template>
  <div>
    <div class="header">
      <h1>Grocery List</h1>
    </div>
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

export default Vue.extend({
  components: {
    Item
  }
});
</script>

<style scoped>
.header {
  text-align: center;
  color: #fff;
  font-size: 18px;
  padding: 24px 0;
  background: #7ecf95;
}

.product:nth-child(odd) {
  background: #f5f5f5;
}
</style>
