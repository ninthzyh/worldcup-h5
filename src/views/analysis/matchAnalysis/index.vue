<template>
    <div class="match-analysis-container">
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
    props: ["matchData"],
    components: {
        Advertisement,
        WinRate,
        HistoryMatch,
        Scoreboard,
        FinalPredicted,
    },
    watch: {
        matchData: {
            immediate: true,
            handler(newData) {
                this.analysisList = newData;
            },
            deep: true,
        },
    },
    mounted() {
        // this.analysisList = json;
        // this.getMatchAnalysis();
    },
    data() {
        return {
            analysisList: {},
        };
    },
    methods: {
        // 比赛分析
        getMatchAnalysis() {
            // const { matchId } = this.$route.query;
            const data = {
                matchId: "ak5kkxvpxf1url15gci42ly7e",
            };
            matchAnalysis(data).then((res) => {
                this.analysisList = res;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/vw";
@media screen and (min-device-width: 600px) {
    .match-analysis-container {
        padding: vwPad(16) calc((100% - #{vwPad(1024)}) / 2);
    }
}
</style>
