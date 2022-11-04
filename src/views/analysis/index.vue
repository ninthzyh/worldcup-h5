<template>
  <div class="analysis">
    <div class="header">
      <div class="back" @click="onBack"></div>
      <div class="label">葡萄牙 vs 乌拉圭</div>
    </div>
    <div class="screen"></div>
    <analysis-tab />
    <div class="tab-content">
      <Forecast />
    </div>
  </div>
</template>
<script>
import AnalysisTab from "./components/analysisTab";
import Forecast from "./forecast";
export default {
  components: {
    AnalysisTab,
    Forecast,
  },
  methods: {
    onBack() {
      this.$router.push("/home");
    },
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
      font-family: "PingFang SC";
      font-style: normal;
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
    background: url("~@/assets/images/bg.svg") no-repeat center/contain;
    padding: vw(24) vw(32);
  }
}
</style>