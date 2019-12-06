<template>
  <svg class="icon" :width="width" :height="height">
    <use v-bind="{ 'xlink:href': '/img/feather-sprite.svg#' + name }" />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Icon" as string,
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
});
</script>

<style scoped>
.icon {
  stroke: currentColor;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  display: inline-block;
}
</style>
