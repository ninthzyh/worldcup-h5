<template>
  <div class="rank">
    <div class="radio">
      <span :class="`${type==='team'?'is-select':''}`" @click="()=>onRadio('team')">球队</span>
      <span :class="`${type==='player'?'is-select':''}`" @click="()=>onRadio('player')">球员</span>
    </div>
    <div class="rank-content">
      <template v-if="type==='team'">
        <rank-card title="进球榜" url='/catalogue/goalsList'/>
        <rank-card title="助攻榜" url='' />
        <rank-card title="平均控球率" url='' />
      </template>
      <template v-else>
        <rank-card title="进球榜" :subTitle="true"/>
        <rank-card title="助攻榜" :subTitle="true" />
        <rank-card title="进球+助攻" :subTitle="true" />
      </template>
    </div>
  </div>
</template>
<script>
import RankCard from "./components/rankCard";
export default {
  components: { RankCard },
  data() {
    return {
      type: "team", //球队team|球员player
    };
  },
  methods: {
    // 球队|球员radio点击事件
    onRadio(type) {
      this.type = type;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.rank {
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  height: calc(100vh - #{vw(156)});
  overflow: auto;
  .radio {
    font-size: vw(12);
    line-height: vw(32);
    color: rgba(255, 255, 255, 0.54);
    padding: 0 vw(24);
    > span {
      padding: vw(8) vw(16);
    }
    .is-select {
      background: rgba(255, 255, 255, 0.12);
      border-radius: vw(36);
      color: #ffffff;
    }
  }
  .rank-content {
    padding: vw(16) vw(24);
  }
}
</style>