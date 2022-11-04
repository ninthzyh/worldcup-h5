<template>
  <div class="schedule-list">
    <div class="schedule-item" v-for="(item,index) in dataList" :key="index" @click="()=>onClick(item)">
      <div class="item-left">
        <div class="team">
          <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" :img="item.homeFlag" />
          <div class="team-name">{{item.homeName}}</div>
          <div class="team-score">{{item.homeScore}}</div>
        </div>
        <div class="team">
          <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" :img="item.awayFlag" />
          <div class="team-name">{{item.awayName}}</div>
          <div class="team-score">{{item.awayScore}}</div>
        </div>
      </div>
      <div class="item-right">
        <div class="time">{{item.matchDatetime}}</div>
        <div class="status live" v-if="item.matchStatus==='Playing'">LIVE</div>
        <div class="status postponed" v-if="item.matchStatus==='Postponed'">
          <div class="info"></div>延迟
        </div>
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
  methods:{
    onClick(item){
      this.$router.push({
        path:'/analysis',
        query:{}
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.schedule-list {
  font-family: "PingFang SC";
  font-style: normal;
  color: #ffffff;
  font-size: vw(14);
  .schedule-item {
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(#{vw(8)});
    border-radius: vw(16);
    padding: vw(15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
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
      padding: vw(13) vw(26) vw(13) vw(42);
      text-align: center;
      font-family: "Inter";
      font-weight: 600;
      .time {
        line-height: vw(17);
        font-weight: 600;
        padding-bottom: vw(4);
      }
      .status {
        line-height: vw(17);
        font-weight: 400;
        font-family: "Formular";
      }
      .live {
        line-height: vw(17);
        color: #bd223b;
      }
      .postponed {
        font-weight: 400;
        font-family: "PingFang SC";
        color: #42c0b3;
        display: flex;
        align-items: center;
        line-height: vw(20);
        .info {
          margin-right: vw(4);
          width: vw(16);
          height: vw(16);
          background: url("~@/assets/images/info.svg") no-repeat center/contain;
        }
      }
    }
    &:not(:last-child) {
      margin-bottom: vw(16);
    }
  }
}
</style>