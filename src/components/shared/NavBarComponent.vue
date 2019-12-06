<template>
  <nav class="navbar">
    <ul class="navbar__items">
      <li>
        <router-link class="navbar__item" :to="{ name: 'stock-list' }">
          <Icon name="package"></Icon>
        </router-link>
      </li>
      <li>
        <router-link class="navbar__item" :to="{ name: 'scanner' }">
          <Icon name="camera"></Icon>
        </router-link>
      </li>
      <li>
        <router-link class="navbar__item" :to="{ name: 'special-day' }">
          <Icon name="gift"></Icon>
        </router-link>
      </li>
      <li>
        <router-link class="navbar__item" :to="{ name: 'grocery-list' }">
          <Icon name="shopping-cart"></Icon>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "@/components/shared/BaseIconComponent.vue";

export default Vue.extend({
  components: {
    Icon
  }
});
</script>

<style scoped>
.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: calc(100% - 32px);
  padding: 16px 16px;
}

.navbar__items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}

.navbar__item {
  color: #000;
}
</style>
