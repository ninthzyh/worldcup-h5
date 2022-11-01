<template>
  <div class="schedule">
    <!-- <v-calendar-mobile :changeMode="true">
        <template slot="dateCell" slot-scope="{day}">
          {{day.day}}
        </template>
      </v-calendar-mobile> -->
    <div class="schedule-content">
      <div v-for="(item,index) in stageList" :key="index">
        <div class="round-title">{{item.stage}}</div>
        <div v-for="(it,idx) in item.seriesList" :key="idx">
          <div class="group-subtitle">{{it.series}}</div>
          <schedule-list :dataList="it.matchList" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ScheduleList from "../../components/ScheduleList";
import vCalendarMobile from "v-calendar-mobile";
// import Vue from 'vue'
// Vue.use(vCalendarMobile);
export default {
  components: {
    ScheduleList,
  },
  data() {
    return {
      stageList: [
        {
          stage: "小组赛",
          seriesList: [
            {
              series: "A组",
              matchList: [
                {
                  matchId: "3f0123w3yjdwtargl0woxj5zo",
                  matchDate: "2022-11-21",
                  matchDatetime: "16:00",
                  homeId: "2wk1549tkz80oet8226euj7jp",
                  homeCode: "SEN",
                  homeName: "塞内加尔",
                  homeShortName: "塞内加尔",
                  homeOfficialName: null,
                  homeFlag: null,
                  awayId: "657oha8nkne1ybba2bouzkbo7",
                  awayCode: "NED",
                  awayName: "荷兰",
                  awayShortName: "荷兰",
                  awayOfficialName: null,
                  awayFlag: null,
                  stageId: "2awryriz2besyqksnv5o9db3e",
                  stageName: "小组赛",
                  seriesId: "2b0dqo56ran2uw0m2lddm63qi",
                  seriesName: "A组",
                  matchStatus: "Fixture",
                  matchOutcome: null,
                  homeScore: null,
                  awayScore: null,
                },
              ],
            },
            {
              series: "B组",
              matchList: [
                {
                  matchId: "bzyh8uc9dcu6mnj4zpx9nh6hg",
                  matchDate: "2022-11-21",
                  matchDatetime: "13:00",
                  homeId: "ck8m1cn23sukwsurgx5qakttk",
                  homeCode: "ENG",
                  homeName: "英格兰",
                  homeShortName: "英格兰",
                  homeOfficialName: null,
                  homeFlag: null,
                  awayId: "cubclbw5k5gdqdau95bnav0nn",
                  awayCode: "IRN",
                  awayName: "伊朗",
                  awayShortName: "伊朗",
                  awayOfficialName: null,
                  awayFlag: null,
                  stageId: "2awryriz2besyqksnv5o9db3e",
                  stageName: "小组赛",
                  seriesId: "2b1930z6tow4xzg7wtpoy47sa",
                  seriesName: "B组",
                  matchStatus: "Fixture",
                  matchOutcome: null,
                  homeScore: null,
                  awayScore: null,
                },
                {
                  matchId: "cqjyb3x9pe0qo4c42e95hxgd0",
                  matchDate: "2022-11-21",
                  matchDatetime: "19:00",
                  homeId: "9vh2u1p4ppm597tjfahst2m3n",
                  homeCode: "USA",
                  homeName: "美国",
                  homeShortName: "United States",
                  homeOfficialName: null,
                  homeFlag: null,
                  awayId: "eyhp0bgsz2deg91xaw4zotn5c",
                  awayCode: "WAL",
                  awayName: "威尔士",
                  awayShortName: "威尔士",
                  awayOfficialName: null,
                  awayFlag: null,
                  stageId: "2awryriz2besyqksnv5o9db3e",
                  stageName: "小组赛",
                  seriesId: "2b1930z6tow4xzg7wtpoy47sa",
                  seriesName: "B组",
                  matchStatus: "Fixture",
                  matchOutcome: null,
                  homeScore: null,
                  awayScore: null,
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.schedule {
  font-family: "PingFang SC";
  font-style: normal;
  color: #ffffff;
  height: calc(100vh - #{vw(156)});
  overflow: auto;
  .schedule-content {
    padding: vw(24) vw(16);
    .round-title {
      font-weight: 500;
      font-size: vw(16);
      line-height: vw(22);
      margin-bottom: vw(-8);
    }
    .group-subtitle {
      font-family: "Formular";
      font-weight: 400;
      font-size: vw(14);
      line-height: vw(17);
      color: rgba(255, 255, 255, 0.7);
      padding-top: vw(16);
    }
  }
}
</style>