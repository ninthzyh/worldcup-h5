<template>
  <div class="analysis">
    <div class="header">
      <div class="back" @click="onBack"></div>
      <div class="label">葡萄牙 vs 乌拉圭</div>
    </div>
    <div class="screen"></div>
    <analysis-tab @select-index-event="selectIndexEvent"/>
    <div class="tab-content">
      <match-data v-if="type===0"/>
      <match-analysis v-if="type===1"/>
      <Forecast v-if="type===2"/>
    </div>
  </div>
</template>
<script>
import AnalysisTab from "./components/analysisTab";
import MatchData from "./matchData";
import Forecast from "./forecast";
import MatchAnalysis from "./matchAnalysis";
export default {
  components: {
    AnalysisTab,
    MatchData,
    Forecast,
    MatchAnalysis,
  },
  data(){
    return{
      type:null,
    }
  },
  methods: {
    onBack() {
      this.$router.push("/home");
    },
    selectIndexEvent(type){
      this.type=type
    }
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.analysis {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    height: vw(52);
    background: #000000;
    display: flex;
    align-items: center;
    padding: vw(0) vw(34) vw(0) vw(8);
    .back {
      height: vw(24);
      width: vw(24);
      background: url("~@/assets/images/back.svg") no-repeat center/contain;
    }
    .label {
      margin: 0 auto;
      font-weight: 500;
      font-size: vw(14);
      line-height: vw(24);
    }
  }
  .screen {
    height: vw(194);
  }
  .tab-content {
    flex: 1;
    background: url("~@/assets/images/bg.png") no-repeat center/contain;
    padding: 0 vw(32);
    margin: vw(24) 0;
    overflow: auto;
  }
}
</style>