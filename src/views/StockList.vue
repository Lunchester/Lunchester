<template>
  <div>
    <Header title="Stock" />
    <Search />
    <Item
      title="Boeren tarwe tijger"
      body="Added on 20.11"
      image="/img/boeren-tarwe-tijger-half.png"
      quantityControls="true"
    />
    <Item
      title="Boeren tarwe tijger"
      body="Added on 20.11"
      image="/img/boeren-tarwe-tijger-half.png"
      quantityControls="true"
    />
    <Item
      title="Boeren tarwe tijger"
      body="Added on 20.11"
      image="/img/boeren-tarwe-tijger-half.png"
      quantityControls="true"
    />
    <Item
      title="Boeren tarwe tijger"
      body="Added on 20.11"
      image="/img/boeren-tarwe-tijger-half.png"
      quantityControls="true"
    />
    <Item
      title="Boeren tarwe tijger"
      body="Added on 20.11"
      image="/img/boeren-tarwe-tijger-half.png"
      quantityControls="true"
    />
    <Item
      title="Boeren tarwe tijger"
      body="Added on 20.11"
      image="/img/boeren-tarwe-tijger-half.png"
      quantityControls="true"
    />
    <Item
      title="Boeren tarwe tijger"
      body="Added on 20.11"
      image="/img/boeren-tarwe-tijger-half.png"
      quantityControls="true"
    />
    <Item
      title="Boeren tarwe tijger"
      body="Added on 20.11"
      image="/img/boeren-tarwe-tijger-half.png"
      quantityControls="true"
    />
    <Item
      title="Boeren tarwe tijger"
      body="Added on 20.11"
      image="/img/boeren-tarwe-tijger-half.png"
      quantityControls="true"
    />
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
