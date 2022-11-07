<template>
  <div>
    <technology-statistic :cardList="matchDataList.detailStatList" :matchInfo="matchDataList.matchInfo"/>
    <advertisement></advertisement>
    <Squad />
  </div>
</template>
<script>
import Squad from "@/views/squad";
import TechnologyStatistic from "./technologyStatistic";
import json from "./matchdata.json";
import Advertisement from "../components/advertisement";

export default {
  components: {
    Advertisement,
    Squad,
    TechnologyStatistic,
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