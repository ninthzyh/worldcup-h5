<template>
  <div class="analysis">
    <div class="header">
      <div class="back" @click="onBack"></div>
      <div class="label">葡萄牙 vs 乌拉圭</div>
    </div>
    <div class="screen"></div>
    <analysis-tab/>
    <div class="tab-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script>
import AnalysisTab from "./components/analysisTab";
export default {
  components: {
    AnalysisTab,
  },
  created() {
    console.log(this.$route.query&&this.$route.query.matchId);
  },
  data(){
    return{
      type:null,
    }
  },
  methods: {
    onBack() {
      this.$router.push("/home");
    }
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
@media screen and (max-device-width: 600px) {
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
}
@media screen and (min-device-width: 600px) {
  .analysis {
    display: flex;
    flex-direction: column;
    height: 100%;
    .header {
      height: vwPad(52);
      background: #000000;
      display: flex;
      align-items: center;
      padding: 0 vwPad(34) 0 vwPad(8);
      .back {
        height: vwPad(24);
        width: vwPad(24);
        background: url("~@/assets/images/back.svg") no-repeat center/contain;
      }
      .label {
        margin: 0 auto;
        font-weight: 500;
        font-size: vwPad(14);
        line-height: vwPad(24);
      }
    }
    .screen {
      height: vwPad(194);
    }
    .tab-content {
      flex: 1;
      background: url("~@/assets/images/bg.png") no-repeat center/contain;
      padding: 0 vwPad(32);
      margin: vwPad(24) 0;
      overflow: auto;
    }
  }
}
</style>
