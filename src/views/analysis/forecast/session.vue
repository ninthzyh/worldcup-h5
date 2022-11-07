<template>
  <div class="session">
    <ForecastCard title="本场预测">
      <template v-slot:title-right>
        <div class="title-icon">
          <div class="lock-icon"></div>
          <div class="lock-text">已解锁</div>
        </div>
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
.session {
  // font-family: "PingFang SC";
  font-style: normal;
  margin-bottom: vw(16);
  .title-icon {
    background: rgba(255, 255, 255, 0.12);
    border-radius: vw(28);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: vw(2) 0;
    padding: 0 vw(8);
    .lock-icon {
      height: vw(16);
      width: vw(16);
      background: url("~@/assets/images/lock.svg") no-repeat
        center/contain;
      margin-right: vw(4);
    }
    .lock-text {
      font-weight: 400;
      font-size: vw(12);
      line-height: vw(24);
      color: rgba(255, 255, 255, 0.87);
    }
  }
  .session-content {
    padding: 0 vw(16);
    font-size: vw(12);
    font-weight: 400;
    .start-time-title {
      padding: vw(16) 0;
      border-top: vw(1) solid rgba(255, 255, 255, 0.12);
      // font-family: "PingFang SC";
      font-style: normal;
      line-height: 100.02%;
      text-align: center;
    }
    .start-time-content {
      display: flex;
      justify-content: center;
      align-items: flex-end;
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