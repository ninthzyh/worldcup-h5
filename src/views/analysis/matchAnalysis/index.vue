<template>
  <div>
    <win-rate :cardList="analysisList.outcomePredicted"></win-rate>
    <advertisement></advertisement>
    <history-match></history-match>
  </div>
</template>
<script>
import Advertisement from "../components/advertisement";
import WinRate from "./winRate";
import HistoryMatch from "./historyMatch";
import json from "./matchanalysis.json";

export default {
  components: { Advertisement, WinRate,HistoryMatch },
  data() {
    return {
      analysisList: {},
    };
  },
  mounted() {
    console.log(json);
    this.analysisList = json;
    // const data = {
    //   matchId: "a5bn20ladyztuqtjzv2l57bvt",
    // };
    // matchPredicted(data).then((res) => {
    //   console.log(res);
    // });
  },
};
</script>