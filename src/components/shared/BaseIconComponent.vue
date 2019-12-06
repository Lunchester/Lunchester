<template>
  <svg class="icon" :width="width" :height="height" :stroke-width="strokeWidth">
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
    },
    strokeWidth: {
      type: [Number, String],
      default: 1
    }
  }
});
</script>

<style scoped>
.icon {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  display: inline-block;
}
</style>
