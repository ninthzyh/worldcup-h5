<template>
  <div class="win">
    <ForecastCard title="胜率预测">
      <template v-slot:title-right>
        <div class="title-icon"></div>
      </template>
      <template v-slot:card-content>
        <div class="win-content">
          <div class="win-describe">主队获胜，平局和和客队获胜的概率：</div>
          <div class="win-percent">
            <div class="home-win">
              <div class="percent"><span>{{cardList&&cardList.homeValue}}</span><span class="unit">%</span></div>
              <div class="text">主胜</div>
            </div>
            <div class="draw">
              <div class="percent"><span>{{cardList&&cardList.draw}}</span><span class="unit">%</span></div>
              <div class="text">平</div>
            </div>
            <div class="away-win">
              <div class="away-win-content">
                <div class="percent"><span>{{cardList&&cardList.awayValue}}</span><span class="unit">%</span></div>
                <div class="text">客胜</div>
              </div>
              <div class="away-star">
                <div class="start-icon"></div>
              </div>
            </div>
          </div>
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
.win {
  font-style: normal;
  margin-bottom: vw(16);
  .title-icon {
    height: vw(16);
    width: vw(16);
    background: url("~@/assets/images/info-white.svg") no-repeat center/contain;
  }
  .win-content {
    padding: 0 vw(16);
    // font-family: "PingFang SC";
    font-style: normal;
    .win-describe {
      padding-top: vw(13);
      border-top: vw(1) solid rgba(255, 255, 255, 0.12);
      font-weight: 300;
      font-size: vw(10);
      line-height: 110%;
    }
    .win-percent {
      margin: vw(24) 0;
      display: flex;
      height: vw(120);
      .home-win,
      .draw {
        padding: 0 vw(16);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #111111;
        border: vw(1) solid rgba(255, 255, 255, 0.54);
        border-radius: vw(4);
        margin-right: vw(3);
        .percent {
          font-family: "Inter";
          line-height: vw(18);
          font-weight: 700;
          font-size: vw(16);
          display: flex;
          align-items: baseline;
          margin-bottom: vw(3);
          .unit {
            font-size: vw(12);
            display: block;
            transform: scale(0.8);
            transform-origin: 0 100%;
          }
        }
        .text {
          // font-family: "PingFang SC";
          font-weight: 500;
          font-size: vw(14);
          line-height: vw(15);
          text-align: center;
        }
      }
      .away-win {
        flex: 1 0 vw(142);
        margin-left: vw(2);
        padding: vw(1);
        border: none;
        box-sizing: border-box;
        background-image: linear-gradient(
            (90deg, #111111 0%, #111111 48.86%, #111111 100%)
          ),
          linear-gradient((90deg, #8d3588 0%, #d1383b 48.86%, #e49640 100%));
        border-radius: vw(4);
        background-clip: content-box, padding-box;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .away-win-content {
          .percent {
            font-family: "Inter";
            line-height: vw(26);
            font-weight: 700;
            font-size: vw(24);
            display: flex;
            align-items: baseline;
            margin-bottom: vw(3);
            .unit {
              font-size: vw(12);
              display: block;
            }
          }
          .text {
            // font-family: "PingFang SC";
            font-weight: 500;
            font-size: vw(16);
            line-height: vw(18);
            text-align: center;
          }
        }
        .away-star {
          position: absolute;
          top: 0;
          right: 0;
          background: linear-gradient(
            to top right,
            transparent 0%,
            transparent 49.9%,
            #8d3588 0%,
            #d1383b 48.86%,
            #e49640 100%
          );
          padding: vw(3) vw(3) vw(11) vw(11);
          border-radius: vw(4);
          .start-icon {
            height: vw(8);
            width: vw(8);
            background: url("~@/assets/images/star.svg") no-repeat
              center/contain;
          }
        }
      }
    }
  }
}
</style>