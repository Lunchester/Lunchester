<template>
  <div>
    <Header title="Special Day" />
    <Item />
  </div>
</template>

<script>
import Header from "@/components/shared/BaseHeaderComponent";
import Item from "@/components/special-day/SpecialDayItemComponent";

export default {
  components: {
    Header,
    Item
  },
  created() {
    this.$store.dispatch("user/fetchUsers");
  }
};
</script>

<style scoped></style>
