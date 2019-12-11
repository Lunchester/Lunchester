<template>
  <div class="header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.header {
  text-align: center;
  color: #fff;
  font-size: 18px;
  padding: 24px 0 48px;
  background: #7ecf95;
  position: relative;
}

.header::after {
  content: "";
  display: block;
  background-color: #fff;
  height: 24px;
  width: 100%;
  border-radius: 24px 24px 0 0;
  position: absolute;
  bottom: 0;
}
</style>
