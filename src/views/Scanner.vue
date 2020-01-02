<template>
  <div>
    <Header title="Scanner" />
    <img
      style="width: 100vw; border-radius:24px;  bottom: -711px; position: absolute;  "
      src="@/assets/scanner.gif"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Header from "@/components/shared/BaseHeaderComponent.vue";

export default Vue.extend({
  components: {
    Header
  }
});
</script>
