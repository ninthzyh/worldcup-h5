<template>
  <div>
    <technology-statistic :cardList="matchDataList.detailStatList" />
    <Squad />
  </div>
</template>
<script>
import Squad from "@/views/squad";
import TechnologyStatistic from "./technologyStatistic";
export default {
  components: {
    Squad,
    TechnologyStatistic,
  },
  data() {
    return {
      matchDataList: {},
    };
  },
};
</script>