<template>
  <div class="win">
    <ForecastCard title="胜率预测">
      <template v-slot:title-right>
        <div class="title-icon"></div>
      </template>
      <template v-slot:card-content>
        <div class="session-content">
          <div class="start-time-title">距比赛开始</div>
          <div class="start-time-content">
            <div class="start-number">
              <div class="time-label">天</div>
              <div class="time-num">01</div>
            </div>
            <div class="colon">:</div>
            <div class="start-number">
              <div class="time-label">时</div>
              <div class="time-num">12</div>
            </div>
            <div class="colon">:</div>
            <div class="start-number">
              <div class="time-label">分</div>
              <div class="time-num">56</div>
            </div>
            <div class="colon">:</div>
            <div class="start-number">
              <div class="time-label">秒</div>
              <div class="time-num">46</div>
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
.win {
  font-family: "PingFang SC";
  font-style: normal;
  margin-bottom: vw(16);
  .title-icon {
    height: vw(16);
    width: vw(16);
    background: url("~@/assets/images/info-white.svg") no-repeat center/contain;
  }
  .session-content {
    padding: 0 vw(16);
    font-size: vw(12);
    font-weight: 400;
    .start-time-title {
      padding: vw(16) 0;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      font-family: "PingFang SC";
      font-style: normal;
      line-height: 100.02%;
      text-align: center;
    }
    .start-time-content {
      display: flex;
      justify-content: center;
      align-items: end;
      padding-bottom: vw(16);
      .start-number {
        text-align: center;
        .time-label {
          padding-bottom: vw(15);
          line-height: 100.02%;
          color: rgba(255, 255, 255, 0.7);
        }
        .time-num {
          font-family: "Sahar";
          font-weight: 700;
          font-size: vw(24);
        }
      }
      .colon {
        padding: 0 vw(16);
        font-family: "Sahar";
        font-weight: 700;
        font-size: vw(24);
      }
    }
  }
}
</style>