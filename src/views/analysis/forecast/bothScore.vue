<template>
  <div class="both-score">
    <ForecastCard title="两队都进球">
      <template v-slot:title-right>
        <div class="title-icon"></div>
      </template>
      <template v-slot:card-content>
        <div class="both-score-content">
          <div class="both-score-describe">比赛双方都有进球的概率</div>
          <div class="both-score-percent">
            <div class="has-score">
              <div class="has-score-content">
                <div class="percent"><span>79.53</span><span class="unit">%</span></div>
                <div class="text">是</div>
              </div>
              <div class="has-score-star">
                <div class="start-icon"></div>
              </div>
            </div>
            <div class="no-score">
              <div class="percent"><span>20.47</span><span class="unit">%</span></div>
              <div class="text">否</div>
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
  components: { ForecastCard },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.both-score {
  font-style: normal;
  margin-bottom: vw(16);
  .title-icon {
    height: vw(16);
    width: vw(16);
    background: url("~@/assets/images/info-white.svg") no-repeat center/contain;
  }
  .both-score-content {
    padding: 0 vw(16);
    font-family: "PingFang SC";
    font-style: normal;
    .both-score-describe {
      padding-top: vw(13);
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      font-weight: 300;
      font-size: vw(10);
      line-height: 110%;
    }
    .both-score-percent {
      margin: vw(24) 0;
      display: flex;
      height: vw(120);
      .has-score {
        flex: 1 0 vw(170);
        margin-right: vw(5);
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
        .has-score-content {
          .percent {
            font-family: "Inter";
            line-height: vw(35);
            height: vw(35);
            font-weight: 700;
            font-size: vw(32);
            margin-bottom: vw(3);
            display: flex;
            align-items: baseline;
            .unit {
              font-size: vw(12);
              display: block;
            }
          }
          .text {
            font-family: "PingFang SC";
            font-weight: 500;
            font-size: vw(12);
            line-height: vw(13);
            display: flex;
            justify-content: center;
          }
        }
        .has-score-star {
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
      .no-score {
        padding: vw(40) vw(18);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #111111;
        border: vw(1) solid rgba(255, 255, 255, 0.54);
        border-radius: vw(4);

        .percent {
          font-family: "Inter";
          line-height: vw(22);
          height: vw(22);
          font-weight: 700;
          font-size: vw(20);
          display: flex;
          align-items: baseline;
          margin-bottom: vw(3);
          .unit {
            font-size: vw(12);
              display: block;
          }
        }
        .text {
          font-family: "PingFang SC";
          font-weight: 500;
          font-size: vw(12);
          line-height: vw(13);
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>