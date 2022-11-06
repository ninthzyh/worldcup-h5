<template>
  <div class="hot">
    <!-- <ForecastCard title="其他热点比赛">
      <template v-slot:card-content> -->
        <div class="hot-content">
          <match-card></match-card>
        </div>
      <!-- </template>
    </ForecastCard> -->
  </div>
</template>
<script>
// import ForecastCard from "../components/forecastCard";
import MatchCard from "../components/matchCard";
export default {
  components: { MatchCard },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.hot {
  .hot-content {
    padding: 0 vw(16);
  }
}
</style>