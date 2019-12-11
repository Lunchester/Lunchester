<template>
  <div class="item">
    <span class="item__position">1</span>
    <div class="item__image">
      <img src="https://picsum.photos/100/100" alt="Image" />
    </div>
    <span class="item__title">Burger King</span>
    <div class="item__icon">
      <Icon
        class="icon__heart"
        name="heart"
        width="18"
        height="18"
        strokeWidth="2"
      />
    </div>
    <span class="item__votes">3</span>
  </div>
</template>

<script>
import Icon from "@/components/shared/BaseIconComponent";

export default {
  components: {
    Icon
  },
  props: {
    specialDayItem: {
      type: Object
    }
  }
};
</script>

<style scoped>
.item {
  width: calc(100% - 48px);
  padding: 8px 24px;
  display: flex;
  align-items: center;
}

.item__position {
  margin-right: 16px;
  font-size: 18px;
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
  border-radius: 999px;
}

.item__title {
  margin-bottom: 4px;
  font-size: 18px;
}

.item__icon {
  background: #7ecf95;
  border-radius: 999px;
  color: #fff;
  padding: 6px;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item__votes {
  margin-left: 16px;
  font-size: 18px;
}
</style>
