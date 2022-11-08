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
// import json from "./matchanalysis.json";
import { matchAnalysis } from "@/api/analysis";
export default {
    components: {
        Advertisement,
        WinRate,
        HistoryMatch,
        Scoreboard,
        FinalPredicted,
    },
    mounted() {
        // this.analysisList = json;
        this.getMatchAnalysis();
    },
    data() {
        return {
            analysisList: {},
        };
    },
    methods: {
        // 比赛分析
        getMatchAnalysis() {
            const data = {
                matchId: "7fgtsy0p8qdoexvf3bof98s9g",
            };
            matchAnalysis(data).then((res) => {
                this.analysisList = res;
            });
        },
    },
};
</script>