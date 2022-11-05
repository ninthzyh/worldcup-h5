<template>
  <div class="goal-number">
    <ForecastCard title="总进球数预测">
      <template v-slot:title-right>
        <div class="title-icon"></div>
      </template>
      <template v-slot:card-content>
        <div class="goal-number-content">
          <div class="goal-number-item" v-for="(item,index) in 3" :key="index">
            <div class="more-card-item">
              <div class="more-than-card">
                <div class="more-than-star">
                  <div class="start-icon"></div>
                </div>
                <div class="percent">
                  <div>95</div>
                  <div class="unit">%</div>
                </div>
              </div>
              <div class="tip">多于 1.5 个</div>
            </div>
            <div class="less-card-item">
              <div class="less-than-card">
                <div class="percent">
                  <div>95</div>
                  <div class="unit">%</div>
                </div>
              </div>
              <div class="tip">少于 1.5 个</div>
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
.goal-number {
  font-style: normal;
  margin-bottom: vw(16);
  .title-icon {
    height: vw(16);
    width: vw(16);
    background: url("~@/assets/images/info-white.svg") no-repeat center/contain;
  }
  .goal-number-content {
    margin: 0 vw(16);
    padding: vw(24) 0 vw(15) 0;
    font-family: "PingFang SC";
    font-style: normal;
    border-top: vw(1) solid rgba(255, 255, 255, 0.12);
    .goal-number-item {
      display: flex;
      justify-content: space-between;
      .card-item {
        background: #111111;
        border-radius: vw(4);
        .percent {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: vw(16);
          line-height: vw(18);
          height: vw(18);
          padding: vw(4) 0;
          display: flex;
          align-items: center;
          justify-content: center;
          .unit {
            transform: scale(0.7);
            transform-origin: 0 100%;
          }
        }
        .tip {
          font-weight: 500;
          font-size: vw(10);
          line-height: vw(11);
          color: rgba(255, 255, 255, 0.7);
          padding: vw(4) 0 vw(9) 0;
        }
      }
      .more-card-item {
        @extend .card-item;
        flex: 2 0 vw(178);
        margin-right: vw(4);
        .more-than-card {
          padding: vw(1);
          border: none;
          background-image: linear-gradient(
              (90deg, #111111 0%, #111111 48.86%, #111111 100%)
            ),
            linear-gradient((90deg, #8d3588 0%, #d1383b 48.86%, #e49640 100%));
          border-radius: vw(4);
          background-clip: content-box, padding-box;
          position: relative;
          .more-than-star {
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
      .less-card-item {
        @extend .card-item;
        flex: 1 0 vw(96);
        .less-than-card {
          border-radius: vw(4);
          border: vw(1) solid rgba(255, 255, 255, 0.54);
        }
      }
    }
  }
}
</style>