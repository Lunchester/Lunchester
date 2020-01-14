<template>
  <div class="product">
    <div class="product__image">
      <img :src="image" :alt="title" />
    </div>
    <div>
      <h4 class="product__title">{{ title }}</h4>
      <span class="product__date">{{ body }}</span>
    </div>
    <div v-if="quantityControls" class="product__quantity">
      <Icon
        class="quantity__icon"
        name="minus"
        width="20"
        height="20"
        strokeWidth="2"
      />
      <span class="quantity__number">{{ quantity }}</span>
      <Icon
        class="quantity__icon"
        name="plus"
        width="20"
        height="20"
        strokeWidth="2"
      />
    </div>
    <template v-if="addControls">
      <Icon
        class="product__add"
        name="plus"
        width="20"
        height="20"
        strokeWidth="2"
      />
    </template>
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
    body: {
      type: String
    },
    image: {
      type: String
    },
    quantity: {
      type: Number
    },
    quantityControls: {
      type: Boolean,
      default: false
    },
    addControls: {
      type: Boolean,
      default: false
    }
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

.product__add {
  background: #7ecf95;
  border-radius: 999px;
  color: #fff;
  padding: 2px;
  margin-left: auto;
}
</style>
