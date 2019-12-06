<template>
  <nav class="navbar">
    <ul class="navbar__items">
      <li>
        <router-link class="navbar__item" :to="{ name: 'stock-list' }">
          <Icon name="package" width="30" height="30"></Icon>
        </router-link>
      </li>
      <li>
        <router-link class="navbar__item" :to="{ name: 'scanner' }">
          <Icon name="camera" width="30" height="30"></Icon>
        </router-link>
      </li>
      <li>
        <router-link class="navbar__item" :to="{ name: 'special-day' }">
          <Icon name="gift" width="30" height="30"></Icon>
        </router-link>
      </li>
      <li>
        <router-link class="navbar__item" :to="{ name: 'grocery-list' }">
          <Icon name="shopping-cart" width="30" height="30"></Icon>
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
  padding: 16px 16px 8px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 16px 16px 0px 0px;
  background: #ffffff;
}

.navbar__items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.navbar__item {
  color: #000;
}
</style>
