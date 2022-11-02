<template>
  <div class="schedule-list">
    <div class="schedule-item" v-for="(item,index) in dataList" :key="index">
      <div class="item-left">
        <div class="team">
          <national-flag :width="`${$vw(28)}`" :height="`${$vw(28)}`"   :img="item.homeFlag"/>
          <div class="team-name">{{item.homeName}}</div>
          <div class="team-score">{{item.homeScore}}</div>
        </div>
        <div class="team">
          <national-flag :width="`${$vw(28)}`" :height="`${$vw(28)}`"   :img="item.awayFlag"/>
          <div class="team-name">{{item.awayName}}</div>
          <div class="team-score">{{item.awayScore}}</div>
        </div>
      </div>
      <div class="item-right">
        <div class="time">{{item.matchDatetime}}</div>
        <div class="status live" v-if="item.matchStatus==='Playing'">LIVE</div>
        <div class="status" v-else>{{$matchStatus[item.matchStatus]}}</div>
      </div>
    </div>

  </div>
</template>
<script>
import NationalFlag from "./NationalFlag";
export default {
  props: {
    dataList: {
      type: Array,
      default: [],
    },
  },
  components: {
    NationalFlag,
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.schedule-list {
  padding: vw(8) vw(18) vw(16) vw(18);
  font-family: "PingFang SC";
  font-style: normal;
  color: #ffffff;
  font-size: vw(14);
  .schedule-item {
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: vw(16);
    padding: vw(20);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item-left {
      flex: 1;
      .team {
        display: flex;
        align-items: center;
        .team-name {
          margin-left: vw(16);
          font-weight: 400;
          line-height: vw(20);
        }
        .team-score {
          flex: 1;
          text-align: right;
          margin-right: vw(16);
        }
      }
      .team:not(:last-child) {
        margin-bottom: vw(16);
      }
    }
    .item-right {
      border-left: 1px solid rgba(255, 255, 255, 0.24);
      padding: vw(13) vw(20) vw(13) vw(40);
      text-align: center;
      .time {
        line-height: vw(17);
        font-weight: 500;
        padding-bottom: vw(4);
      }
      .status {
        line-height: vw(17);
        font-weight: 400;
      }
      .live {
        font-family: "Inter";
        font-weight: 600;
        line-height: vw(17);
        color: #bd223b;
      }
    }
    &:not(:last-child) {
      margin-bottom: vw(16);
    }
  }
}
</style>