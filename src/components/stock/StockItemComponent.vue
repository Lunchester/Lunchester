<template>
  <div class="item">
    <div class="item__image">
      <img :src="product.imgLink" :alt="product.title" />
    </div>
    <div>
      <h4 class="item__title">{{ product.title }}</h4>
      <span class="item__date">{{ product.body }}</span>
    </div>
    <div v-if="quantityControls" class="item__quantity">
      <Icon
        class="quantity__icon"
        name="minus"
        width="20"
        height="20"
        strokeWidth="2"
        @click.native="removeItemFromStock(product)"
      />
      <span class="quantity__number">{{ product.quantity }}</span>
      <Icon
        class="quantity__icon"
        name="plus"
        width="20"
        height="20"
        strokeWidth="2"
        @click.native="addItemToStock(product)"
      />
    </div>
    <template v-if="addControls">
      <Icon
        class="item__add"
        name="plus"
        width="20"
        height="20"
        strokeWidth="2"
        @click.native="addItemToStock(product)"
      />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import Icon from "@/components/shared/BaseIconComponent.vue";

export default Vue.extend({
  components: {
    Icon
  },
  props: {
    product: {
      type: Object
    },
    quantityControls: {
      type: Boolean,
      default: false
    },
    addControls: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions("stock", ["addItemToStock", "removeItemFromStock"])
  }
});
</script>

<style scoped>
.item {
  width: calc(100% - 48px);
  padding: 8px 24px;
  display: flex;
  align-items: center;
}

.item__image {
  background: #ffffff;
  border-radius: 9999px;
  padding: 8px;
  margin-right: 16px;
}

.item__image img {
  width: 56px;
  height: 56px;
}

.item__title {
  margin-bottom: 4px;
  font-size: 18px;
}

.item__date {
  font-weight: 300;
  font-size: 14px;
}

.item__quantity {
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
  cursor: pointer;
}

.quantity__number {
  margin: 0 14px;
  font-size: 18px;
}

.item__add {
  background: #7ecf95;
  border-radius: 999px;
  color: #fff;
  padding: 2px;
  margin-left: auto;
}
</style>
