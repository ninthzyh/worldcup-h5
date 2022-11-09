<template>
<div class="groups-container">
  <div v-for="row in topMatchList" class="match-list" :key="row.key">
    <template v-if="row.key.indexOf('row') !== -1">
      <MatchItem v-for="(item, index) in row.list" :key="index" :match-item="item"/>
    </template>
    <template v-if="row.key.indexOf('line') !== -1">
      <MatchLine position="top" :width="row.width" v-for="(item, index) in row.list" :key="index"/>
    </template>
  </div>
  <MatchLine position="middle" :width="375"/>
  <div class="center-container">
    <MatchItem tips="3/4名决赛" :match-item="thirdFinal"/>
    <MatchItem tips="决赛" :tips-width="48" :match-item="firstFinal"/>
    <div v-if="champion && champion.championName" class="champion-container">
      <div class="champion">
        <NationalFlag v-if="champion.championFlag" />
        <span v-else>?</span>
      </div>
      <p>{{ champion.championName }}</p>
    </div>
  </div>
  <MatchLine position="middle" :width="375"/>
  <div v-for="row in bottomMatchList" class="match-list" :key="row.key">
    <template v-if="row.key.indexOf('line') !== -1">
      <MatchLine position="bottom" :width="row.width" v-for="(item, index) in row.list" :key="index"/>
    </template>
    <template v-if="row.key.indexOf('row') !== -1">
      <MatchItem v-for="(item, index) in row.list" :key="index" :match-item="item"/>
    </template>
  </div>
</div>
</template>

<script>
import MatchItem from "./MatchItem";
import MatchLine from "./MatchLine";
import NationalFlag from "../../components/NationalFlag";
import {rise} from "../../api";
export default {
  name: "index",
  components: {NationalFlag, MatchItem, MatchLine},
  data(){
    return{
      topMatchList: [],
      bottomMatchList: [],
      thirdFinal: {},
      firstFinal: {},
      champion:{},
      defaultTeamItem: {
        stageName: "",
        homeGroup: null,
        homeId: "",
        homeName: "",
        homeFlag: "",
        homeGoals: null,
        isHomePromoted: true,
        awayGroup: null,
        awayId: "",
        awayName: "",
        awayFlag: "",
        awayGoals: null,
        isAwayPromoted: false,
      }
    }
  },
  mounted() {
    this.getList()
  },
  methods:{
    getList(){
      new Promise((resolve)=>{resolve(require('./request.json'))}).then(res=>{
        let matchList = res.data;
        const topMatchList = [];
        const bottomMatchList = [];
        topMatchList.push({
          key: "topArea_row1",
          list: this._rowMatchFormatHandler(4, matchList.eighthUp),
        });
        topMatchList.push({
          key: "topArea_line1",
          width: 88,
          list: [null,null],
        });
        topMatchList.push({
          key: "topArea_row2",
          list: this._rowMatchFormatHandler(2, matchList.quarterUp),
        });
        topMatchList.push({
          key: "topArea_line2",
          width: 176,
          list: [null],
        });
        topMatchList.push({
          key: "topArea_row3",
          list: [matchList.semifinalsUp?matchList.semifinalsUp:this.defaultTeamItem],
        });
        bottomMatchList.push({
          key: "bottomArea_row3",
          list: [matchList.semifinalsDown?matchList.semifinalsDown:this.defaultTeamItem],
        });
        bottomMatchList.push({
          key: "bottomArea_line2",
          width: 176,
          list: [null],
        });
        bottomMatchList.push({
          key: "bottomArea_row2",
          list: this._rowMatchFormatHandler(2, matchList.quarterDown),
        });
        bottomMatchList.push({
          key: "bottomArea_line1",
          width: 88,
          list: [null,null],
        });
        bottomMatchList.push({
          key: "bottomArea_row1",
          list: this._rowMatchFormatHandler(4, matchList.eighthDown),
        });
        this.topMatchList = topMatchList;
        this.bottomMatchList = bottomMatchList;
        this.thirdFinal = matchList.thirdFinal,
        this.firstFinal = matchList.firstFinal,
        this.champion = {
          championName: matchList.championName,
          championFlag: matchList.championFlag,
        }
      })
    },
    _rowMatchFormatHandler(num, arr) {
      let rowMatchList = [];
      if (arr && arr instanceof Array && arr.length == 4) {
        rowMatchList = arr;
      } else {
        let len = num;
        if (arr && arr instanceof Array && arr.length > 0) {
          len = len - arr.length;
          rowMatchList = arr;
        }
        for (let i = 0; i < len; i++) {
          rowMatchList.push(this.defaultTeamItem);
        }
      }
      return rowMatchList;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/vw";

@media screen and (max-device-width: 600px) {
  .groups-container{
    height: calc(100vh - #{vw(116)});
    overflow: auto;
    padding: vw(48) 0;
    box-sizing: border-box;
    .match-list{
      display: flex;
      justify-content: space-around;
    }
    .center-container{
      display: flex;
      justify-content: space-around;
      .champion-container{
        width: vw(80);
        text-align: center;
        .champion{
          display: inline-block;
          box-sizing: border-box;
          width: vw(62);
          height: vw(62);
          border-radius: 50%;
          border: vw(4) solid #4a1e26;
          background-color: #404040;
          text-align: center;
          >span{
            line-height: vw(62);
            font-size: vw(24);
          }
        }
      }
    }
  }
}
@media screen and (min-device-width: 600px) {
  .groups-container{
    height: calc(100vh - #{vwPad(116)});
    overflow: auto;
    padding: vwPad(48) 0;
    box-sizing: border-box;
    .match-list{
      display: flex;
      justify-content: space-around;
    }
    .center-container{
      display: flex;
      justify-content: space-around;
      .champion-container{
        width: vwPad(160);
        text-align: center;
        .champion{
          display: inline-block;
          box-sizing: border-box;
          width: vwPad(62);
          height: vwPad(62);
          border-radius: 50%;
          border: vwPad(4) solid #4a1e26;
          background-color: #404040;
          text-align: center;
          >span{
            line-height: vwPad(62);
            font-size: vwPad(24);
          }
        }
      }
    }
  }
}

</style>
