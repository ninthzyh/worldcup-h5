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
// import schedulelist from './schedulelist.json';
import { scheduleList } from "@/api/home";

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
      // stageList: schedulelist.stageList,
      stageList: [],
    };
  },
  mounted() {
    this.getScheduleList();
  },
  methods: {
    // 日期赛程
    getScheduleList() {
      const data = {
        currDate: `${this.date.getFullYear()}-${
          this.date.getMonth() + 1
        }-${this.date.getDate()}`,
      };
      scheduleList(data).then((res) => {
        this.stageList = res.stageList;
      });
    },
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
        this.getScheduleList();
      });
    },
    // 日期选中确定
    onConfirm(date) {
      this.show = false;
      this.date = date;
      this.dateStr = this.formatDate(date);
      this.getScheduleList();
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
    border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
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
      border-radius: vw(2);
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