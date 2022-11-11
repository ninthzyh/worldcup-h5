<template>
    <div class="match-data-container">
        <overview-stat-list v-if="overviewStatList && overviewStatList.length" :cardList="overviewStatList" :matchInfo="matchInfo" />
        <technology-statistic v-if="detailStatList && detailStatList.length" :cardList="detailStatList" :matchInfo="matchInfo" />
        <advertisement></advertisement>
        <Event v-if="eventList && eventList.length" :eventData="eventList" :matchInfo="matchInfo" />
        <Squad v-if="lineupMap && Object.values(lineupMap).length" :lineupMap="lineupMap" :matchInfo="matchInfo" />
    </div>
</template>
<script>
import Squad from "./squad";
import Event from "./event";
import TechnologyStatistic from "./technologyStatistic";
import OverviewStatList from "./overviewStatList";
import Advertisement from "../components/advertisement";

export default {
    props: ["matchData"],
    components: {
        Advertisement,
        Squad,
        Event,
        TechnologyStatistic,
        OverviewStatList,
    },
    computed: {
        overviewStatList() {
            return this.matchData
                ? this.matchData.overviewStatList
                : [];
        },
        detailStatList() {
            return this.matchData ? this.matchData.detailStatList : [];
        },
        eventList() {
            return this.matchData ? this.matchData.eventList : [];
        },
        lineupMap() {
            return this.matchData ? this.matchData.lineupMap : {};
        },
        matchInfo() {
            return this.matchData ? this.matchData.matchInfo : {};
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/vw";
@media screen and (min-device-width: 600px) {
    .match-data-container {
        padding: vwPad(16) calc((100% - #{vwPad(1024)}) / 2);
    }
}
</style>
