<template>
  <svg class="feather-icon" :width="width" :height="height">
    <use v-bind="{ 'xlink:href': '/img/feather-sprite.svg#' + name }" />
  </svg>
</template>

<script>
export default {
  name: "Icon",
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
};
</script>

<style scoped>
.feather-icon {
  stroke: currentColor;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  display: inline-block;
}
</style>
