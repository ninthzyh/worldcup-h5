<template>
  <div class="ai">
    <ForecastCard :title="`${$lang.forecast.aIInsight}`" cus-class="bold">
      <template v-slot:title-right>
        <div class="title-icon"></div>
      </template>
      <template v-slot:card-content>
        <div class="ai-content">
          <div class="start-forecast">
            <div class="start-forecast-box">
              <div class="start"></div>
              <div>{{$lang.forecast.starPrediction}}</div>
            </div>
            <div class="line"></div>
          </div>
          <div class="match-10">
            <div class="match-10-above">
              <div class="label">
                <span>{{$lang.forecast.recently}}</span>
                <span>{{cardList&&cardList.matchNum}}</span>
                <span>{{$lang.forecast.turn}}</span>
              </div>
              <div class="red-bg">
                <div class="red" v-for="(item,index) in (cardList&&cardList.predictedList)" :key="index">{{item}}</div>
              </div>
            </div>
            <div class="match-10-hit">
              <div class="hit-label">
                <span>{{$lang.forecast.recently}}</span>
                <span>{{cardList&&cardList.matchNumCn}}</span>
                <span>{{$lang.forecast.turn}}</span>
                <span>{{$lang.forecast.hit}}</span>
              </div>
              <div class="percent">
                <div class="number">{{cardList&&cardList.successRatio}}</div>
                <div class="unit">%</div>
              </div>
            </div>
          </div>
          <div class="brain">
            <div class="brain-bg"></div>
            <div class="brain-icon"></div>
            <div class="brain-text">
              <div>{{$lang.forecast.describe1}}</div>
              <div>{{$lang.forecast.describe2}}</div>
              <div>{{$lang.forecast.describe3}}</div>
            </div>
            <div class="gradient"></div>
          </div>
          <div class="lock-bar">
            <div class="lock-text">
              <span>{{$lang.forecast.lockDescribe}}</span>
              <span class="lock-num">8</span>
              <span>{{$lang.forecast.perMatch}}</span>
            </div>
            <div class="lock-btn">
              <div class="unlock">{{$lang.forecast.unlock}}</div>
              <div class="arrow-circle"></div>
            </div>
          </div>
          <div class="ai-transparent"></div>
        </div>
      </template>
    </ForecastCard>
  </div>
</template>
<script>
import ForecastCard from "../components/forecastCard";
export default {
  props: ["cardList"],
  components: { ForecastCard },
  watch: {
    cardList: {
      immediate: true,
      handler(newData) {
        this.cardList = newData;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.ai {
  margin-bottom: vw(16);
  .title-icon {
    height: vw(15);
    width: vw(67);
    background: url("~@/assets/images/stats-perform.svg") no-repeat
      center/contain;
  }
  .ai-content {
    padding: 0 vw(16);
    margin-top: vw(-4);
    position: relative;
    .start-forecast {
      display: flex;
      align-items: center;
      .start-forecast-box {
        // font-family: "PingFang SC";
        font-style: normal;
        padding: vw(4) vw(8);
        font-weight: 400;
        font-size: vw(10);
        line-height: vw(14);
        display: flex;
        align-items: center;
        border: vw(1) solid transparent;
        border-radius: vw(12);
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        background-image: linear-gradient(
            90deg,
            #0c0e11 0%,
            #0c0e11 48.86%,
            #0c0e11 100%
          ),
          linear-gradient((90deg, #8d3588 0%, #d1383b 48.86%, #e49640 100%));
        .start {
          height: vw(12);
          width: vw(12);
          background: url("~@/assets/images/star.svg") no-repeat center/contain;
          margin-right: vw(2);
        }
      }
      .line {
        flex: 1;
        margin-left: vw(16);
        height: vw(0.5);
        background: rgba(255, 255, 255, 0.12);
      }
    }
    .match-10 {
      border: vw(0.5) solid rgba(255, 255, 255, 0.24);
      border-radius: vw(8);
      padding: vw(24) 0 vw(19) 0;
      margin-top: vw(16);
      .match-10-above {
        display: flex;
        align-items: center;
        justify-content: center;
        .label {
          // font-family: "PingFang SC";
          font-style: normal;
          font-weight: 500;
          font-size: vw(10);
          line-height: vw(12);
          color: rgba(255, 255, 255, 0.54);
          margin-right: vw(8);
          transform: scale(0.9737);
          transform-origin: 0 0;
        }
        .red-bg {
          display: flex;
          align-items: center;
          .red {
            font-size: vw(12);
            width: vw(16);
            height: vw(16);
            background: #bd3853;
            border-radius: vw(4);
            text-align: center;
            line-height: vw(16);
            &:not(:last-child) {
              margin-right: vw(4);
            }
          }
        }
      }
      .match-10-hit {
        display: flex;
        justify-content: center;
        padding-top: vw(12);
        .hit-label {
          // font-family: "PingFang SC";
          font-style: normal;
          font-weight: 600;
          font-size: vw(12);
          margin-right: vw(6);
        }
        .percent {
          color: #e49640;
          display: flex;
          align-items: start;
          .number {
            font-weight: 700;
            font-size: vw(24);
            line-height: vw(17);
          }
          .unit {
            font-weight: 400;
            font-size: vw(12);
            line-height: vw(10);
          }
        }
      }
    }
    .brain {
      display: flex;
      justify-content: center;
      margin-top: vw(16);
      position: relative;
      .brain-icon {
        height: vw(56);
        width: vw(103);
        background: url("~@/assets/images/brain.svg") no-repeat center/contain;
        margin-left: vw(16);
      }
      .brain-text {
        > div {
          // font-family: "PingFang SC";
          font-style: normal;
          font-weight: 500;
          font-size: vw(10);
          line-height: vw(18);
          color: rgba(255, 255, 255, 0.87);
          transform: scale(0.87);
          transform-origin: 0 50%;
          &:not(:last-child) {
            margin-bottom: vw(4);
          }
        }
      }
      .gradient {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        height: vw(58);
        width: vw(53);
        background: linear-gradient(
          112.13deg,
          #a108a8 3.05%,
          #e7292d 53.54%,
          #faa51a 100%
        );
      }
    }
    .lock-bar {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.16) 0%,
        rgba(255, 255, 255, 0) 104%
      );
      border-radius: vw(30);
      padding-left: vw(8);
      margin: vw(10) 0 vw(15) 0;
      display: flex;
      justify-content: space-between;
      height: vw(24);
      line-height: vw(24);
      .lock-text {
        // font-family: "PingFang SC";
        font-style: normal;
        font-weight: 400;
        font-size: vw(10);
        transform: scale(0.73);
        transform-origin: 0 50%;
        zoom: 0.97;
        flex: 1 0 vw(202);
        .lock-num {
          font-size: vw(18);
          padding: 0 vw(5);
        }
      }
      .lock-btn {
        flex: 0 0 vw(72);
        background: linear-gradient(
          90deg,
          #8d3588 0%,
          #d1383b 48.86%,
          #e49640 100%
        );
        border-radius: vw(28);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: vw(2) 0;
        transform: scale(1);
        transform-origin: 0 50%;
        .unlock {
          // font-family: "PingFang SC";
          font-style: normal;
          font-weight: 500;
          font-size: vw(10);
          text-transform: uppercase;
          transform: scale(0.8333);
          transform-origin: 100% 50%;
        }
        .arrow-circle {
          height: vw(14);
          width: vw(14);
          background: url("~@/assets/images/arrow-circle.svg") no-repeat
            center/contain;
          margin-right: vw(8);
          margin-left: vw(2);
        }
      }
    }
    .ai-transparent {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.04);
      backdrop-filter: blur(#{vw(32)});
      z-index: -1;
    }
  }
}
</style>