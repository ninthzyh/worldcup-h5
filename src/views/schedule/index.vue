<template>
  <div class="schedule">
    <div class="calender-wrap">
      <div class="arrow-left" @click="()=>onClick(-1)"></div>
      <div class="calender" @click="show = true">{{dateStr}}</div>
      <div class="arrow-right" @click="()=>onClick(1)"></div>
    </div>
    <div class="schedule-content">
      <div v-for="(item,index) in stageList" :key="index">
        <div class="round-title">{{item.stage}}</div>
        <div v-for="(it,idx) in item.seriesList" :key="idx">
          <div class="group-subtitle">{{it.series}}</div>
          <schedule-list :dataList="it.matchList" />
        </div>
      </div>
    </div>
    <van-calendar ref="calender" class="calender-popup" v-model="show" @confirm="onConfirm" :min-date="minDate"
      :max-date="maxDate" />
  </div>
</template>
<script>
import Vue from "vue";
import { Calendar } from "vant";
import ScheduleList from "../../components/ScheduleList";
Vue.use(Calendar);
export default {
  components: {
    ScheduleList,
  },
  data() {
    return {
      minDate: new Date(2022, 10, 20), //2022-11-20
      maxDate: new Date(2022, 11, 18), //2022-12-18
      dateStr: this.formatDate(new Date(2022, 10, 20)), //日期默认：2022-11-20 string
      date: new Date(2022, 10, 20), // value:Date
      show: false,
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
  methods: {
    // 当前时间＋、-
    onClick(num) {
      // 选中时间不超过限制的最大最小时间，Date类型比较大小
      // date<=最小时间，不能再减少一天
      // date>=最大时间，不能再增加一天
      if (
        (this.date <= this.minDate && num < 0) ||
        (this.date >= this.maxDate && num > 0)
      )
        return;

      this.date = new Date(this.date.setDate(this.date.getDate() + num));
      this.dateStr = this.formatDate(this.date);
      // 修改时间弹窗中选中的日期颜色
      this.$nextTick(() => {
        this.$refs.calender.reset(this.date);
      });
    },
    // 日期选中确定
    onConfirm(date) {
      this.show = false;
      this.date = date;
      this.dateStr = this.formatDate(date);
    },
    // 选中日期，月日星期
    formatDate(date) {
      const dayList = ["日", "一", "二", "三", "四", "五", "六"];
      return `${date.getMonth() + 1}月${date.getDate()}日 星期${
        dayList[date.getDay()]
      }`;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.schedule {
  // font-family: "PingFang SC";
  font-style: normal;
  height: calc(100vh - #{vw(116)});
  background: url("~@/assets/images/bg.png") no-repeat center/contain;
  .calender-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: vw(16) 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    @mixin common-icon($url) {
      width: vw(16);
      height: vw(16);
      background: url($url) no-repeat center/contain;
      margin: 0 vw(18);
    }
    .arrow-left {
      @include common-icon("~@/assets/images/arrow-left.svg");
    }
    .arrow-right {
      @include common-icon("~@/assets/images/arrow-right.svg");
    }
    .calender {
      background: rgba(255, 255, 255, 0.12);
      border-radius: 2px;
      flex: 1;
      height: vw(40);
      text-align: center;
      line-height: vw(40);
    }
  }
  .schedule-content {
    padding: vw(26) vw(16);
    height: calc(100vh - #{vw(241)});
    overflow: auto;
    .round-title {
      font-weight: 500;
      font-size: vw(16);
      line-height: vw(22);
      margin-bottom: vw(-16);
    }
    .group-subtitle {
      font-family: "Formular";
      font-weight: 400;
      font-size: vw(14);
      line-height: vw(17);
      color: rgba(255, 255, 255, 0.7);
      padding: vw(32) 0 vw(16) 0;
    }
  }
  .calender-popup {
    color: #000;
  }
}
</style>