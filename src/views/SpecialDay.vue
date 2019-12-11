<template>
  <div>
    <Header title="Special Day" />
  </div>
</template>

<script>
import Header from "@/components/shared/BaseHeaderComponent";

export default {
  components: {
    Header
  },
  created() {
    this.$store.dispatch("user/fetchUsers");
  }
};
</script>

<style lang="scss" scoped></style>
