<template>
  <div>
    <win-rate :cardList="analysisList.outcomePredicted"></win-rate>
    <advertisement></advertisement>
    <Scoreboard :cardList="analysisList.groupList"></Scoreboard>
    <history-match :cardList="analysisList.historyMeeting"></history-match>
    <final-predicted :cardList="analysisList.finalPredictedList"></final-predicted>
  </div>
</template>
<script>
import Advertisement from "../components/advertisement";
import WinRate from "./winRate";
import HistoryMatch from "./historyMatch";
import Scoreboard from "./scoreboard";
import FinalPredicted from "./finalPredicted";
import json from "./matchanalysis.json";

export default {
  components: { Advertisement, WinRate,HistoryMatch,Scoreboard,FinalPredicted },
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