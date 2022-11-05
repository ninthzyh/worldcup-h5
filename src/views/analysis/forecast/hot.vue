<template>
  <div class="hot">
    <ForecastCard title="其他热点比赛">
      <template v-slot:card-content>
        <div class="hot-content">
          1
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
.hot {
  font-style: normal;
  margin-bottom: vw(16);
  .hot-content {
    margin: 0 vw(16);
    padding: vw(24) 0 vw(15) 0;
    font-family: "PingFang SC";
    font-style: normal;
    border-top: vw(1) solid rgba(255, 255, 255, 0.12);
  }
}
</style>