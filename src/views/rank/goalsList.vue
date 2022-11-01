<template>
  <div class="goals-list">
    <div class="menu-container">
      <div class="menu-header">
        <div class="back" @click="onBack"></div>
        <div class="world-cup-logo"></div>
      </div>
    </div>
    <div class="list-content">
      <rank-card title="进球榜" url='/catalogue/goalsList' />

    </div>
  </div>
</template>
<script>
import RankCard from "./components/rankCard";
export default {
  components: { RankCard },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.goals-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  .menu-container {
    height: vw(156);
    background: linear-gradient(180deg, #96263a 12.77%, #0c0e11 88.3%);
    .menu-header {
      display: flex;
      align-items: center;
      padding: vw(55) vw(34) vw(20) vw(10);
      .back {
        height: vw(24);
        width: vw(24);
        background: url("~@/assets/images/back.svg") no-repeat center/contain;
      }
      .world-cup-logo {
        width: vw(112);
        height: vw(33);
        background: url("~@/assets/images/world-cup-logo.svg") no-repeat
          center/contain;
        margin: 0 auto;
      }
    }
  }
  .list-content {
    flex: 1;
    padding: vw(24) vw(22) vw(80) vw(26);
  }
}
</style>
