<template>
  <div class="rank">
    <div class="radio">
      <span :class="`${isSelect?'is-select':''}`" @click="onRadio">球队</span>
      <span :class="`${!isSelect?'is-select':''}`" @click="onRadio">球员</span>
    </div>
    <div class="rank-content">
      <template v-if="isSelect">
        <rank-card :config="teamConfig" title="进球榜" :cardData="teamData" type="goalList" />
        <rank-card :config="teamConfig" title="助攻榜" :cardData="teamData" type="assistList" />
        <rank-card :config="teamConfig" title="平均控球率" :cardData="teamData" type="possessionList" />
      </template>
      <template v-else>
        <rank-card :config="playerConfig" title="进球榜" :cardData="playerData" type="goalList" />
        <rank-card :config="playerConfig" title="助攻榜" :cardData="playerData" type="assistList" />
        <rank-card :config="playerConfig" title="进球+助攻" :cardData="playerData" type="goalAndAssistList" />
      </template>
    </div>
  </div>
</template>
<script>
import RankCard from "./components/rankCard";
import rankplayer from './rankplayer.json';
import rankteam from './rankteam.json';
export default {
  components: { RankCard },
  data() {
    return {
      isSelect: true,
      teamData: rankteam, //球队数据
      playerData: rankplayer, //球员数据
      teamConfig: {
        type: "team",
        name: "teamName",
        flag: "teamFlag",
        score: "statValue",
      },
      playerConfig: {
        type: "player",
        name: "playerName",
        flag: "playerFlag",
        score: "statValue",
        position: "position",
      },
    };
  },
  methods: {
    // 球队|球员radio点击事件
    onRadio() {
      this.isSelect = !this.isSelect;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.rank {
  // font-family: "PingFang SC";
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  height: calc(100vh - #{vw(116)});
  background: url("~@/assets/images/bg.png") no-repeat center/contain;
  .radio {
    font-size: vw(12);
    line-height: vw(32);
    color: rgba(255, 255, 255, 0.54);
    padding: vw(24) vw(24) 0 vw(24);
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
    padding: vw(24);
    overflow: auto;
    height: calc(100% - #{vw(104)});
  }
}
</style>