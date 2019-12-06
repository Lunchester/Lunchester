<template>
  <div class="product">
    <div class="product__image">
      <img
        src="https://www.plus.nl/INTERSHOP/static/WFS/PLUS-Site/-/PLUS/nl_NL/product/M/977982.png"
        alt="Boeren tarwe tijger half"
      />
    </div>
    <div>
      <h4 class="product__title">Boeren tarwe tijger half</h4>
      <span class="product__date">Added on 20.11</span>
    </div>
    <div class="product__quantity">
      <span class="quantity__number">2</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
.product {
  width: calc(100% - 48px);
  padding: 8px 24px;
  display: flex;
  align-items: center;
}

.product__image {
  background: #fff;
  border-radius: 9999px;
  padding: 8px;
  margin-right: 16px;
}

.product__image img {
  width: 56px;
  height: 56px;
}

.product__title {
  margin-bottom: 8px;
}

.product__quantity {
  margin-left: auto;
}
</style>
