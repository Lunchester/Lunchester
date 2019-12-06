<template>
  <div id="app">
    <router-view />
    <NavBar></NavBar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/components/shared/NavBarComponent.vue";

export default Vue.extend({
  components: {
    NavBar
  }
});
</script>

<style scoped>
#app {
  position: relative;
}
</style>
