<template>
  <div class="technology-card">
    <div class="card-header">
      <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`"
        :border="`${$vw(0.5)} solid rgba(255, 255, 255, 0.12)`" :padding="`${$vw(8)}`"
        :img="matchInfo&&matchInfo.homeFlag" />
      <div class="card-title">{{this.$lang.matchData.topStats}}</div>
      <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`"
        :border="`${$vw(0.5)} solid rgba(255, 255, 255, 0.12)`" :padding="`${$vw(8)}`"
        :img="matchInfo&&matchInfo.awayFlag" />
    </div>
    <div class="technology-content">
      <div class="card-subtitle">{{cardList&&cardList[0].statName}}</div>
      <div class="progress-bar-wrap">
        <div class="left-bar" :style="`width:${cardList&&cardList[0].homeValueStr}`">
          <div class="bar-percent">{{cardList&&cardList[0].homeValueStr}}</div>
        </div>
        <div class="right-bar" :style="`width:${cardList&&cardList[0].awayValueStr}`">
          <div class="bar-percent">{{cardList&&cardList[0].awayValueStr}}</div>
        </div>
      </div>
      <div class="detail-item" v-for="(item,index) in cardList&&cardList.slice(1)" :key="index">
        <div class="left-num">
          <span :class="`${true?'left-bg':''}`">{{item.homeValue}}</span>
        </div>
        <div class="technology-name">{{item.statName}}</div>
        <div class="right-num">
          <span :class="`${true?'right-bg':''}`">{{item.awayValue}}</span>
        </div>
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
@media screen and (max-device-width: 600px) {
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
        .left-num {
          flex: 0 0 vw(40);
          .left-bg {
            background: #7a293f;
            @extend %common-bg;
          }
        }
        %common-bg {
          font-family: "Inter";
          font-weight: 600;
          font-size: vw(12);
          line-height: vw(22);
          height: vw(22);
          border-radius: vw(4);
          padding: vw(3) vw(5);
        }
        .right-num {
          flex: 0 0 vw(40);
          text-align: right;
          .right-bg {
            background: #7996bc;
            @extend %common-bg;
          }
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
        &:not(:last-child) {
          padding-bottom: vw(12);
        }
      }
    }
  }
}
@media screen and (min-device-width: 600px) {
  .technology-card {
    background: rgba(0, 0, 0, 0.04);
    border: vwPad(1) solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(#{vwPad(8)});
    border-radius: vwPad(16);
    padding: vwPad(16);
    margin-bottom: vwPad(16);
    .card-header {
      font-style: normal;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: vwPad(16);
      .card-title {
        font-weight: 500;
        font-size: vwPad(14);
        line-height: 110%;
      }
      .bold {
        font-weight: 600;
        font-size: vwPad(16);
        line-height: vwPad(24);
      }
    }
    .technology-content {
      .card-subtitle {
        font-weight: 500;
        font-size: vwPad(12);
        line-height: vwPad(17);
        padding-bottom: vwPad(12);
        text-align: center;
      }
      .progress-bar-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: vwPad(12);
        @mixin progress-bar($radius, $background) {
          border-radius: vwPad(4);
          line-height: vwPad(24);
          font-style: normal;
          font-weight: 600;
          font-size: vwPad(12);
          height: vwPad(24);
          background: $background;
          border-radius: $radius;
          .bar-percent {
            font-weight: 600;
            line-height: vwPad(24);
            height: vwPad(24);
            padding: 0 vwPad(6);
          }
        }
        .left-bar {
          @include progress-bar(vwPad(4) 0 0 vwPad(4), #7a293f);
          margin-right: vwPad(4);
        }
        .right-bar {
          @include progress-bar(0 vwPad(4) vwPad(4) 0, #7996bc);
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
          font-weight: 600;
          font-size: vwPad(12);
          line-height: vwPad(12);
          border-radius: vwPad(4);
          padding: vwPad(5);
        }
        .left-bg {
          background: #7a293f;
        }
        .technology-name {
          flex: 1 0 vwPad(80);
          text-align: center;
          font-family: "PingFang SC";
          font-weight: 500;
          font-size: vwPad(12);
          line-height: vwPad(17);
          color: rgba(255, 255, 255, 0.54);
        }
        .right-bg {
          background: #7996bc;
        }
        &:not(:last-child) {
          padding-bottom: vwPad(12);
        }
      }
    }
  }
}
</style>
