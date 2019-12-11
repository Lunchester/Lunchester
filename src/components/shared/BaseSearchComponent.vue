<template>
  <div class="search">
    <input
      class="search__input"
      :class="{ 'search__input--full': !hasAddButton }"
      type="text"
      placeholder="Search"
    />
    <router-link
      class="search__button"
      v-if="hasAddButton"
      :to="{ name: addButtonLink }"
    >
      Add
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    hasAddButton: {
      type: Boolean,
      default: false
    },
    addButtonLink: {
      type: String
    }
  }
});
</script>

<style scoped>
.search {
  margin: 0 24px;
  background-color: #fff;
  padding: 0 0 24px 0;
  position: relative;
}

.search__input {
  border: none;
  background: #f5f5f5;
  border-radius: 999px;
  height: 48px;
  width: calc(100% - 138px);
  font-size: 18px;
  padding-left: 48px;
  background-image: url("/img/search.svg");
  background-repeat: no-repeat;
  background-position: 12px center;
  background-size: 28px 28px;
}

.search__input--full {
  width: calc(100% - 48px);
}

.search__button {
  background: #7ecf95;
  border-radius: 999px;
  color: #fff;
  height: 48px;
  font-size: 18px;
  padding: 0 24px;
  margin-left: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
</style>
