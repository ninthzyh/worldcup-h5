<template>
  <div class="technology-card">
    <div class="card-header">
      <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`"
        :border="`${$vw(0.5)} solid rgba(255, 255, 255, 0.12)`" :padding="`${$vw(8)}`"
        :img="matchInfo&&matchInfo.homeFlag" />
      <div class="card-title">技术统计</div>
      <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`"
        :border="`${$vw(0.5)} solid rgba(255, 255, 255, 0.12)`" :padding="`${$vw(8)}`"
        :img="matchInfo&&matchInfo.awayFlag" />
    </div>
    <div class="technology-content">
      <div class="card-subtitle">控球率</div>
      <div class="progress-bar-wrap">
        <div class="left-bar" :style="`width:${cardList&&cardList[0].homeValueStr}`">
          <div class="bar-percent">{{cardList&&cardList[0].homeValueStr}}</div>
        </div>
        <div class="right-bar" :style="`width:${cardList&&cardList[0].awayValueStr}`">
          <div class="bar-percent">{{cardList&&cardList[0].awayValueStr}}</div>
        </div>
      </div>
      <div class="detail-item" v-for="(item,index) in cardList&&cardList.slice(1)" :key="index">
        <div :class="`${true?'left-bg':''} detail-item-num`">{{item.homeValue}}</div>
        <div class="technology-name">{{item.statName}}</div>
        <div :class="`${true?'':'right-bg'} detail-item-num`">{{item.awayValue}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import NationalFlag from "../../../components/NationalFlag";

export default {
  props: ["cardList", "matchInfo"],
  components: {
    NationalFlag,
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.technology-card {
  background: rgba(0, 0, 0, 0.04);
  border: vw(1) solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(#{vw(8)});
  border-radius: vw(16);
  padding: vw(16);
  margin-bottom: vw(16);
  .card-header {
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: vw(16);
    .card-title {
      font-weight: 500;
      font-size: vw(14);
      line-height: 110%;
    }
    .bold {
      font-weight: 600;
      font-size: vw(16);
      line-height: vw(24);
    }
  }
  .technology-content {
    .card-subtitle {
      font-weight: 500;
      font-size: vw(12);
      line-height: vw(17);
      padding-bottom: vw(12);
      text-align: center;
    }
    .progress-bar-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: vw(12);
      @mixin progress-bar($radius, $background) {
        border-radius: vw(4);
        line-height: vw(24);
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: vw(12);
        line-height: vw(24);
        height: vw(24);
        background: $background;
        border-radius: $radius;
        .bar-percent {
          font-family: "Inter";
          font-weight: 600;
          line-height: vw(24);
          height: vw(24);
          padding: 0 vw(6);
        }
      }
      .left-bar {
        @include progress-bar(vw(4) 0 0 vw(4), #7a293f);
        margin-right: vw(4);
      }
      .right-bar {
        @include progress-bar(0 vw(4) vw(4) 0, #7996bc);
        > div {
          text-align: right;
        }
      }
    }
    .detail-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .detail-item-num {
        font-family: "Inter";
        font-weight: 600;
        font-size: vw(12);
        line-height: vw(12);
        border-radius: vw(4);
        padding: vw(5);
      }
      .left-bg {
        background: #7a293f;
      }
      .technology-name {
        flex: 1 0 vw(80);
        text-align: center;
        font-family: "PingFang SC";
        font-weight: 500;
        font-size: vw(12);
        line-height: vw(17);
        color: rgba(255, 255, 255, 0.54);
      }
      .right-bg {
        background: #7996bc;
      }
      &:not(:last-child) {
        padding-bottom: vw(12);
      }
    }
  }
}
</style>