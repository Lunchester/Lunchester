<template>
  <div class="item">
    <span class="item__position">{{ specialDayItem.id }}</span>
    <div class="item__image">
      <img :src="specialDayItem.imgLink" :alt="specialDayItem.title" />
    </div>
    <span class="item__title">{{ specialDayItem.title }}</span>
    <div class="item__icon">
      <Icon
        @click.native="voteOnSpecialDayItem"
        class="icon__heart"
        :class="{ 'icon__heart--full': hasCurrentUserVoted }"
        name="heart"
        width="18"
        height="18"
        strokeWidth="2"
      />
    </div>
    <span class="item__votes">{{ totalVotes ? totalVotes : 0 }}</span>
  </div>
</template>

<script>
import Vue from "vue";
import Icon from "@/components/shared/BaseIconComponent.vue";
import { mapState, mapGetters } from "vuex";

export default Vue.extend({
  components: {
    Icon
  },
  props: {
    specialDayItem: {
      type: Object
    }
  },
  computed: {
    totalVotes() {
      return this.getSpecialDayItemTotalVotes(this.specialDayItem.id);
    },
    hasCurrentUserVoted() {
      return this.votes.some(
        vote =>
          vote.userId === this.user.id && vote.itemId === this.specialDayItem.id
      );
    },
    ...mapState("user", ["user"]),
    ...mapState("specialDay", ["votes"]),
    ...mapGetters("specialDay", ["getSpecialDayItemTotalVotes"])
  },
  methods: {
    voteOnSpecialDayItem() {
      const vote = {
        id: Math.floor(Math.random() * 10000000),
        userId: this.$store.state.user.user.id,
        itemId: this.specialDayItem.id
      };

      this.$store.dispatch("specialDay/addSpecialDayVote", vote);
    }
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

.icon__heart--full {
  fill: #fff;
}

.item__votes {
  margin-left: 16px;
  font-size: 18px;
}
</style>
