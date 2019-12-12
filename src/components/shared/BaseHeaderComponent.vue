<template>
  <div class="header">
    <Icon
      @click.native="$router.go(-1)"
      class="header__back"
      v-if="hasBackButton"
      name="chevron-left"
      width="28"
      height="28"
      strokeWidth="2"
    />
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "@/components/shared/BaseIconComponent.vue";

export default Vue.extend({
  components: {
    Icon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    hasBackButton: {
      type: Boolean,
      default: false
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

.header__back {
  position: absolute;
  left: 24px;
  top: 18px;
}
</style>
