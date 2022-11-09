<template>
  <div class="match-data-container">
    <overview-stat-list :cardList="matchDataList.overviewStatList" :matchInfo="matchDataList.matchInfo"/>
    <technology-statistic :cardList="matchDataList.detailStatList" :matchInfo="matchDataList.matchInfo"/>
    <advertisement></advertisement>
    <Event />
    <Squad />
  </div>
</template>
<script>
import Squad from "./squad";
import Event from "./event";
import TechnologyStatistic from "./technologyStatistic";
import OverviewStatList from "./overviewStatList";
import json from "./matchdata.json";
import Advertisement from "../components/advertisement";

export default {
  components: {
    Advertisement,
    Squad,
    Event,
    TechnologyStatistic,
    OverviewStatList,
  },
  mounted() {
    console.log(json);
    this.matchDataList = json;
  },
  data() {
    return {
      matchDataList: {},
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/vw";

.match-data-container{
  padding: vwPad(16) calc((100% - #{vwPad(1024)})/2);
}
</style>
