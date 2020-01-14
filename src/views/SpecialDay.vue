<template>
  <div>
    <Header title="Special Day" />
    <Item v-for="item in items" :key="item.id" :specialDayItem="item" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Header from "@/components/shared/BaseHeaderComponent.vue";
import Item from "@/components/special-day/SpecialDayItemComponent.vue";

export default Vue.extend({
  components: {
    Header,
    Item
  },
  created() {
    this.$store.dispatch("specialDay/fetchSpecialDayItems");
  },
  computed: {
    ...mapState("specialDay", ["items"])
  }
});
</script>

<style scoped>
.item:nth-child(odd) {
  background: #f6f6f6;
}
</style>
