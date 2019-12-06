<template>
  <div class="product">
    <div class="product__image">
      <img
        src="/img/boeren-tarwe-tijger-half.png"
        alt="Boeren tarwe tijger half"
      />
    </div>
    <div>
      <h4 class="product__title">Boeren tarwe tijger</h4>
      <span class="product__date">Added on 20.11</span>
    </div>
    <div class="product__quantity">
      <Icon
        class="quantity__icon"
        name="minus"
        width="20"
        height="20"
        strokeWidth="2"
      />
      <span class="quantity__number">2</span>
      <Icon
        class="quantity__icon"
        name="plus"
        width="20"
        height="20"
        strokeWidth="2"
      />
    </div>
  </div>
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
.product {
  width: calc(100% - 48px);
  padding: 8px 24px;
  display: flex;
  align-items: center;
}

.product__image {
  background: #ffffff;
  border-radius: 9999px;
  padding: 8px;
  margin-right: 16px;
}

.product__image img {
  width: 56px;
  height: 56px;
}

.product__title {
  margin-bottom: 4px;
  font-size: 18px;
}

.product__date {
  font-weight: 300;
  font-size: 14px;
}

.product__quantity {
  margin-left: auto;
  background: #ffffff;
  border-radius: 999px;
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 4px;
}

.quantity__icon {
  background: #7ecf95;
  border-radius: 999px;
  color: #fff;
  padding: 2px;
}

.quantity__number {
  margin: 0 14px;
  font-size: 18px;
}
</style>
