<template>
  <div>
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
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
.product:nth-child(even) {
  background: #f5f5f5;
}
</style>
