<template>
  <div class="final-predicted">
    <div class="final-predicted-header">
      <div class="logo"></div>
      <div class="title-wrap">
        <div class="subtitle">夺冠预测 %</div>
        <div class="title">2022 卡塔尔世界杯</div>
      </div>
    </div>
    <div class="final-predicted-content">
      <div class="final-predicted-item" v-for="(item,index) in cardList" :key="index">
        <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" :img="item.teamFlag" />
        <div class="team-name">{{item.teamName}}</div>
        <div class="progress-bg">
          <div class="progress" :style="`width:${$vw(item.simulationValue)}`"></div>
        </div>
        <div class="final-predicted-percent">{{item.simulationValue}}<span>%</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import NationalFlag from "../../../components/NationalFlag";

export default {
  props: ["cardList"],
  components: {
    NationalFlag,
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.final-predicted {
  background: rgba(0, 0, 0, 0.04);
  border: vw(1) solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(#{vw(8)});
  border-radius: vw(16);
  padding: vw(22) vw(16);
  .final-predicted-header {
    display: flex;
    align-items: center;
    padding-bottom: vw(27);
    font-family: "Sahar";
    font-weight: 700;
    .logo {
      margin-right: vw(16);
      width: vw(48);
      height: vw(48);
      background: url("~@/assets/images/group-logo.svg") no-repeat
        center/contain;
    }
    .subtitle {
      font-size: vw(12);
      line-height: vw(16);
      margin-bottom: vw(4);
    }
    .title {
      font-size: vw(16);
      line-height: vw(16);
    }
  }
  .final-predicted-content {
    height: vw(300);
    overflow: auto;
    .final-predicted-item {
      line-height: vw(24);
      font-size: vw(14);
      display: flex;
      &:not(:last-child) {
        padding-bottom: vw(16);
      }
      .team-name {
        font-weight: 600;
        flex: 0 0 vw(62);
        padding: 0 vw(8);
      }
      .progress-bg {
        flex: 1;
        background: rgba(255, 255, 255, 0.32);
        border-radius: vw(4);
        .progress {
          background: #fff;
          height: 100%;
          border-top-left-radius: vw(4);
          border-bottom-left-radius: vw(4);
        }
      }
      .final-predicted-percent {
        font-family: "Sahar";
        font-weight: 700;
        flex: 0 0 vw(47);
        padding-left: vw(8);
      }
    }
  }
}
</style>