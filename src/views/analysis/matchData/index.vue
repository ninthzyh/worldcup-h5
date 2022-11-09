<template>
  <div class="match-data-container">
    <overview-stat-list :cardList="matchDataList.overviewStatList" :matchInfo="matchDataList.matchInfo"/>
    <technology-statistic :cardList="matchDataList.detailStatList" :matchInfo="matchDataList.matchInfo"/>
    <advertisement></advertisement>
    <Event v-if="eventList && eventList.length" :eventData="eventList" :matchInfo="matchInfo" />
    <Squad v-if="lineupMap && Object.values(lineupMap).length" :lineupMap="lineupMap" :matchInfo="matchInfo"  />
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
  computed:{
    eventList(){
      return this.matchDataList ? this.matchDataList.eventList : [];
    },
    lineupMap(){
      return this.matchDataList ? this.matchDataList.lineupMap : {};
    },
    matchInfo(){
      return this.matchDataList ? this.matchDataList.matchInfo : {};
    },
  },
  mounted() {
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
@media screen and (min-device-width: 600px) {
  .match-data-container{
    padding: vwPad(16) calc((100% - #{vwPad(1024)})/2);
  }
}
</style>
