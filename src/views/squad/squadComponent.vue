<!--
    * 前端定义关键事件包括： 点球，进球，乌龙球，下场，黄牌，红牌，上场（eventCodeWeb: 0~6）
    * 球队名字最多展示6个字，大于6个字时候，js手动5个字+1个字（...）处理
    * 如果格式化完的主客队不满足11球员，则哪个队不满足，哪个队隐藏
    * 每个球员自带事件,但事件不能有重复；如果同一个人有红黄牌时，只取红牌舍得黄牌
    * 球员点击事件已加
    * 事件id前后端已经同步
-->

<template>
  <div class="startLineup">
    <div
      class="teamInforArea"
      :class="[index === 0 ? 'home' : '', index === 1 ? 'away' : '']"
      v-for="(item, index) in teamInfors"
      :key="item.teamId"
    >
      <span class="teamLineup">
        <span
          v-if="item.lineup"
          class="lineupText"
          v-text="_lineupFormatHandler(item.lineup)"
        ></span>
      </span>
    </div>
    <div
      class="playerPos"
      v-show="
        list &&
        list instanceof Array &&
        list.length == 2 &&
        classLineupList.length == 2
      "
    >
      <span
        v-for="(team, tIndex) in allStartPlayerList"
        :key="tIndex"
        :class="[
          'topTeam',
          classLineupList[tIndex] ? `lineupType${classLineupList[tIndex]}` : '',
        ]"
      >
        <span
          v-show="!isThemeFlagArr.includes(tIndex == 0 ? 'home' : 'away')"
          class="playerItem"
          v-for="player in team"
          :key="player.playerId"
          @click="clickPlayer(player)"
        >
          <span class="playerItem_res">
            <span
              class="playerNum"
              v-text="_valFormatHandler(player.shirtNumber)"
            ></span>
            <span
              class="playerName"
              v-text="_valFormatHandler(player.playerName)"
            ></span>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
// 首发阵容
import TeamLogo from "@/components/NationalFlag";
import lineupLayoutMap from "./lineup_layout.json";
export default {
  name: "lineup",
  components: {
    TeamLogo,
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
    teamInfors: {
      type: Array,
      default: () => {
        return [
          {
            teamName: "",
            teamId: null,
            teamLogo: "",
            coach: "",
            lineup: null,
          },
          {
            teamName: "",
            teamId: null,
            teamLogo: "",
            coach: "",
            lineup: null,
          },
        ];
      },
    },
  },
  data() {
    return {
      isThemeFlagArr: [],
      yellowCode: 4,
      redCode: 5,
      goalCode: 1,
      offStageCode: 3,
      // teamInfors: [
      //   {
      //     teamName: "主队名称主队名称",
      //     teamId: 1,
      //     teamLogo: "",
      //     coach: "主教练",
      //     lineup: "41212",
      //   },
      //   {
      //     teamName: "客队",
      //     teamId: 1,
      //     teamLogo: "",
      //     coach: "主教练",
      //     lineup: "41212",
      //   },
      // ],
    };
  },
  watch: {
    list: {
      handler(newVal) {
        this.formatData(newVal);
      },
      immediate: true,
      // deep: true,
    },
    teamInfors: {
      handler(newVal) {
        this.formatData(newVal);
      },
      immediate: true,
      // deep: true,
    },
  },
  computed: {
    classLineupList() {
      if (this.teamInfors) {
        let homeLineup = this._lineupFormatHandler(
          this.teamInfors[0] && this.teamInfors[0].lineup
            ? this.teamInfors[0].lineup
            : ""
        );
        let awayLineup = this._lineupFormatHandler(
          this.teamInfors[1] && this.teamInfors[1].lineup
            ? this.teamInfors[1].lineup
            : ""
        );
        return [homeLineup, awayLineup];
      } else {
        return ["", ""];
      }
    },
  },
  methods: {
    clickPlayer(item) {
      console.debug(item);
      this.$emit('shwoPopPlayer',item)
    },
    formatData() {
      let startPlayerList = [];
      let allStartPlayerList = [];
      let formatStartLineups = [];
      if (this.teamInfors && this.list) {
        this.list.forEach((teams) => {
          const formatTeams = [];
          teams.forEach((player) => {
            let newPlayer = {};
            newPlayer = player;
            if (newPlayer.playerEventList) {
              let eventCodeWebs = {
                  topLeftEvent: [],
                  topRightEvent: [],
                  bottomLeftEvent: [],
                },
                topLeftCode = [this.goalCode], //前端eventCode： 进球
                topRightCode = [this.yellowCode, this.redCode], // 黄牌 红牌
                bottomLeftCode = [this.offStageCode]; //下场
              newPlayer.playerEventList.forEach((event) => {
                const eventCode = this.eventCode2eventCodeWeb(
                  event.eventType - 0
                );
                if (topLeftCode.includes(eventCode)) {
                  event.eventCode = eventCode;
                  eventCodeWebs.topLeftEvent.push(event);
                }
                if (topRightCode.includes(eventCode)) {
                  event.eventCode = eventCode;
                  eventCodeWebs.topRightEvent.push(event);
                }
                if (bottomLeftCode.includes(eventCode)) {
                  event.eventCode = eventCode;
                  eventCodeWebs.bottomLeftEvent.push(event);
                }
              });
              if (
                eventCodeWebs.topRightEvent &&
                eventCodeWebs.topRightEvent.length > 1
              ) {
                // 如果同一个人有红黄牌时，只取红牌舍得黄牌
                const topRightEvent = [];
                eventCodeWebs.topRightEvent.forEach((event) => {
                  if (
                    event.eventCode == this.redCode &&
                    topRightEvent.length == 0
                  ) {
                    topRightEvent.push(event);
                  }
                });
                if (topRightEvent.length == 1) {
                  eventCodeWebs.topRightEvent = topRightEvent;
                } else {
                  eventCodeWebs.topRightEvent.length = 1;
                }
              }
              newPlayer.eventCodeWebs = eventCodeWebs;
              if (newPlayer.playerId && newPlayer.formationPlace) {
                // 过滤没有playerId、阵容位置的球员，这球员有问题，因此首发阵容不展示
                formatTeams.push(newPlayer);
              }
            }
          });
          formatStartLineups.push(formatTeams);
        });

        this.isThemeFlagArr = [];
        this.teamInfors.forEach((tab, tabIndex) => {
          console.debug("formatStartLineups:", formatStartLineups);
          let homeAway = tabIndex == 0 ? "home" : "away";
          startPlayerList =
            formatStartLineups && formatStartLineups.length == 2
              ? formatStartLineups[tabIndex]
              : [];

          allStartPlayerList.push(
            this.sortPlayerPosition(
              startPlayerList,
              lineupLayoutMap.opta[this._lineupFormatHandler(tab.lineup)],
              homeAway
            )
          );
        });
        this.allStartPlayerList = allStartPlayerList;
      }
      startPlayerList = null;
      allStartPlayerList = null;
      formatStartLineups = null;
    },
    sortPlayerPosition(playerArr, lineupArr, homeAway) {
      console.debug(playerArr, lineupArr);
      const arr = [];
      if (
        !playerArr ||
        playerArr.length != 11 ||
        !lineupArr ||
        lineupArr.length != 11
      ) {
        this.isThemeFlagArr.push(homeAway);
        return arr;
      }
      lineupArr.forEach((lineup) => {
        playerArr.forEach((player) => {
          if (player.formationPlace == lineup) {
            arr.push(player);
          }
        });
      });
      if (arr.length !== 11) {
        this.isThemeFlagArr.push(homeAway);
      }
      console.debug("isThemeFlagArr:", this.isThemeFlagArr, arr.length);
      return arr;
    },
    _valFormatHandler(val) {
      let data;
      console.debug(val, typeof val);
      if (val === undefined || val === null || val === "" || val === " ") {
        data = "";
      } else {
        data = val;
      }
      console.debug(val, data);
      return data;
    },
    _scoreFormatHandler(val) {
      let data;
      console.debug(val, typeof val);
      if (val === undefined || val === null || val === "" || val === " ") {
        data = "";
      } else {
        data = val.toFixed() ? val.toFixed(1) : val;
      }
      console.debug(val, data);
      return data;
    },
    _teamNameFormatHandler(val) {
      let data;
      console.debug(val, typeof val);
      if (val === undefined || val === null || val === "" || val === " ") {
        data = "-";
      } else {
        data = val.length > 7 ? `${val.substring(0, 6)}...` : val;
      }
      console.debug(val, data);
      return data;
    },
    _lineupFormatHandler(val) {
      let data;
      console.debug(val, typeof val);
      if (val === undefined || val === null || val === "" || val === " ") {
        data = "";
      } else {
        if (val.indexOf("d") > -1) {
          data = "3-4-3d";
        } else {
          data = val.split("").join("-");
        }
      }
      console.log(val, data);
      return data;
    },
    eventCode2eventCodeWeb(num) {
      //后端code to 前端code
      // 前端code: 点球，进球，乌龙球，下场，黄牌，红牌，上场(0~6)
      let key = null;
      switch (num) {
        case 1:
          key = 1;
          break;
        case 2:
          key = 4;
          break;
        case 3:
          key = 5;
          break;
        case 4:
          key = 3;
          break;
        case 5:
          key = 6;
          break;
        default:
          key = null;
          break;
      }
      return key;
    },
    eventCodeWeb2eventKey(num) {
      let key = "";
      switch (num) {
        case 0:
          key = "point";
          break;
        case 1:
          key = "goal";
          break;
        case 2:
          key = "ownGoal";
          break;
        case 3:
          key = "offStage";
          break;
        case 4:
          key = "yellowCard";
          break;
        case 5:
          key = "redCard";
          break;
        case 6:
          key = "onStage";
          break;
        default:
          key = null;
          break;
      }
      return key;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/vw";
.startLineup {
  position: relative;
  width: 100%;
  height: vw(562);
  //background-image: url(../view/img/lineup_bg.png);
  background-size: 100% 100%;
  background-position: left top;
  background-repeat: no-repeat;
  * {
    box-sizing: border-box;
  }
  .teamInforArea {
    position: absolute;
    left: 0;
    z-index: 2;
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    &.home {
      top: vw(6);
      .teamInfor {
        .teamInfor_main {
          border-radius: 0 vw(11) vw(11) 0;
        }
      }
      .teamCoach {
        text-align: right;
      }
    }
    &.away {
      bottom: vw(6);
      flex-direction: row-reverse;
      .teamInfor {
        justify-content: flex-end;
        .teamInfor_main {
          border-radius: vw(11) 0 0 vw(11);
          flex-direction: row-reverse;
        }
      }
    }
    .teamCoach {
      width: calc(50% - #{vw(40)});
      padding: 0 vw(5);
      font-size: vw(12);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .teamLineup {
      width: vw(80);
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      align-items: center;
      .lineupText {
        display: inline-block;
        height: vw(20);
        line-height: vw(20);
        padding: 0 vw(8);
        text-align: center;
        font-size: vw(12);
        border-radius: vw(10);
        color: rgba(255, 255, 255, 0.54);
        background: rgba(255, 255, 255, 0.12);
      }
    }
  }
  .playerPos {
    position: absolute;
    top: vw(40);
    left: vw(13);
    z-index: 10;
    width: calc(100% - #{vw(26)});
    height: vw(482);
    .playerItem {
      position: absolute;
      z-index: 20;
      width: vw(30);
      height: vw(40);
      background-size: 100% auto;
      background-position: left top;
      background-repeat: no-repeat;
      .playerItem_res {
        display: block;
        position: relative;
        width: 100%;
        height: vw(40);
        color: rgba(255, 255, 255, 0.85);
        .playerNum {
          position: absolute;
          display: inline-block;
          top: 0;
          left: 0;
          z-index: 2;
          width: vw(24);
          height: vw(24);
          font-size: vw(12);
          background-color: #7A293F;
          border-radius: 50%;
          line-height: vw(24);
          text-align: center;
        }
        .playerName {
          position: absolute;
          top: vw(20);
          left: 50%;
          z-index: 2;
          transform: translateX(-50%) scale(0.83333);
          width: 200%;
          padding-top: vw(5);
          font-size: vw(9);
          line-height: vw(12);
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    & {
      & .lineupType4-4-2.topTeam .playerItem {
        &:first-child {
          top: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 15%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 15%;
          left: 32%;
        }
        &:nth-child(4) {
          top: 15%;
          right: 32%;
        }
        &:nth-child(5) {
          top: 15%;
          right: 8.25%;
        }
        &:nth-child(6) {
          top: 27%;
          left: 8.25%;
        }
        &:nth-child(7) {
          top: 27%;
          left: 32%;
        }
        &:nth-child(8) {
          top: 27%;
          right: 32%;
        }
        &:nth-child(9) {
          top: 27%;
          right: 8.25%;
        }
        &:nth-child(10) {
          top: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          top: 39%;
          right: 26%;
        }
      }
      & .lineupType4-4-2.bottomTeam .playerItem {
        &:first-child {
          bottom: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 15%;
          left: 8.25%;
        }
        &:nth-child(3) {
          bottom: 15%;
          left: 32%;
        }
        &:nth-child(4) {
          bottom: 15%;
          right: 32%;
        }
        &:nth-child(5) {
          bottom: 15%;
          right: 8.25%;
        }
        &:nth-child(6) {
          bottom: 27%;
          left: 8.25%;
        }
        &:nth-child(7) {
          bottom: 27%;
          left: 32%;
        }
        &:nth-child(8) {
          bottom: 27%;
          right: 32%;
        }
        &:nth-child(9) {
          bottom: 27%;
          right: 8.25%;
        }
        &:nth-child(10) {
          bottom: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          bottom: 39%;
          right: 26%;
        }
      }
    }
    & {
      & .lineupType4-3-3.topTeam .playerItem {
        &:first-child {
          top: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 15%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 15%;
          left: 32%;
        }
        &:nth-child(4) {
          top: 15%;
          right: 32%;
        }
        &:nth-child(5) {
          top: 15%;
          right: 8.25%;
        }
        &:nth-child(6) {
          top: 27%;
          left: 12%;
        }
        &:nth-child(7) {
          top: 27%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          top: 27%;
          right: 12%;
        }
        &:nth-child(9) {
          top: 39%;
          left: 12%;
        }
        &:nth-child(10) {
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(11) {
          top: 39%;
          right: 12%;
        }
      }
      & .lineupType4-3-3.bottomTeam .playerItem {
        &:first-child {
          bottom: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 15%;
          left: 8.25%;
        }
        &:nth-child(3) {
          bottom: 15%;
          left: 32%;
        }
        &:nth-child(4) {
          bottom: 15%;
          right: 32%;
        }
        &:nth-child(5) {
          bottom: 15%;
          right: 8.25%;
        }
        &:nth-child(6) {
          bottom: 27%;
          left: 12%;
        }
        &:nth-child(7) {
          bottom: 27%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          bottom: 27%;
          right: 12%;
        }
        &:nth-child(9) {
          bottom: 39%;
          left: 12%;
        }
        &:nth-child(10) {
          bottom: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(11) {
          bottom: 39%;
          right: 12%;
        }
      }
    }
    & {
      & .lineupType4-5-1.topTeam .playerItem {
        &:first-child {
          top: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 13%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 13%;
          left: 32%;
        }
        &:nth-child(4) {
          top: 13%;
          right: 32%;
        }
        &:nth-child(5) {
          top: 13%;
          right: 8.25%;
        }
        &:nth-child(6) {
          top: 32%;
          left: 6%;
        }
        &:nth-child(7) {
          top: 23.5%;
          left: 20%;
        }
        &:nth-child(8) {
          top: 23.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(9) {
          top: 23.5%;
          right: 20%;
        }
        &:nth-child(10) {
          top: 32%;
          right: 6%;
        }
        &:nth-child(11) {
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      & .lineupType4-5-1.bottomTeam .playerItem {
        &:first-child {
          bottom: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 13%;
          left: 8.25%;
        }
        &:nth-child(3) {
          bottom: 13%;
          left: 32%;
        }
        &:nth-child(4) {
          bottom: 13%;
          right: 32%;
        }
        &:nth-child(5) {
          bottom: 13%;
          right: 8.25%;
        }
        &:nth-child(6) {
          bottom: 32%;
          left: 6%;
        }
        &:nth-child(7) {
          bottom: 23.5%;
          left: 20%;
        }
        &:nth-child(8) {
          bottom: 23.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(9) {
          bottom: 23.5%;
          right: 20%;
        }
        &:nth-child(10) {
          bottom: 32%;
          right: 6%;
        }
        &:nth-child(11) {
          bottom: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & {
      & .lineupType5-3-2.topTeam .playerItem {
        &:first-child {
          top: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 12%;
          left: 3.25%;
        }
        &:nth-child(3) {
          top: 14%;
          left: 23.25%;
        }
        &:nth-child(4) {
          top: 16%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(5) {
          top: 14%;
          right: 23.25%;
        }
        &:nth-child(6) {
          top: 12%;
          right: 3.25%;
        }
        &:nth-child(7) {
          top: 27%;
          left: 14%;
        }
        &:nth-child(8) {
          top: 27%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(9) {
          top: 27%;
          right: 20%;
        }
        &:nth-child(10) {
          top: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          top: 39%;
          right: 26%;
        }
      }
      & .lineupType5-3-2.bottomTeam .playerItem {
        &:first-child {
          bottom: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 12%;
          left: 3.25%;
        }
        &:nth-child(3) {
          bottom: 14%;
          left: 23.25%;
        }
        &:nth-child(4) {
          bottom: 16%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(5) {
          bottom: 14%;
          right: 23.25%;
        }
        &:nth-child(6) {
          bottom: 12%;
          right: 3.25%;
        }
        &:nth-child(7) {
          bottom: 27%;
          left: 14%;
        }
        &:nth-child(8) {
          bottom: 27%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(9) {
          bottom: 27%;
          right: 20%;
        }
        &:nth-child(10) {
          bottom: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          bottom: 39%;
          right: 26%;
        }
      }
    }
    & {
      & .lineupType5-4-1.topTeam .playerItem {
        &:first-child {
          top: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 12%;
          left: 3.25%;
        }
        &:nth-child(3) {
          top: 14%;
          left: 23.25%;
        }
        &:nth-child(4) {
          top: 16%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(5) {
          top: 14%;
          right: 23.25%;
        }
        &:nth-child(6) {
          top: 12%;
          right: 3.25%;
        }
        &:nth-child(7) {
          top: 27%;
          left: 8.25%;
        }
        &:nth-child(8) {
          top: 27%;
          left: 32%;
        }
        &:nth-child(9) {
          top: 27%;
          right: 32%;
        }
        &:nth-child(10) {
          top: 27%;
          right: 8.25%;
        }
        &:nth-child(11) {
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      & .lineupType5-4-1.bottomTeam .playerItem {
        &:first-child {
          bottom: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 12%;
          left: 3.25%;
        }
        &:nth-child(3) {
          bottom: 14%;
          left: 23.25%;
        }
        &:nth-child(4) {
          bottom: 16%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(5) {
          bottom: 14%;
          right: 23.25%;
        }
        &:nth-child(6) {
          bottom: 12%;
          right: 3.25%;
        }
        &:nth-child(7) {
          bottom: 27%;
          left: 8.25%;
        }
        &:nth-child(8) {
          bottom: 27%;
          left: 32%;
        }
        &:nth-child(9) {
          bottom: 27%;
          right: 32%;
        }
        &:nth-child(10) {
          bottom: 27%;
          right: 8.25%;
        }
        &:nth-child(11) {
          bottom: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & {
      & .lineupType3-5-2.topTeam .playerItem {
        &:first-child {
          top: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 15%;
          left: 14%;
        }
        &:nth-child(3) {
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          top: 15%;
          right: 14%;
        }
        &:nth-child(5) {
          top: 30%;
          left: 3.25%;
        }
        &:nth-child(6) {
          top: 26%;
          left: 24.45%;
        }
        &:nth-child(7) {
          top: 26%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          top: 26%;
          right: 24.45%;
        }
        &:nth-child(9) {
          top: 30%;
          right: 3.25%;
        }

        &:nth-child(10) {
          top: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          top: 39%;
          right: 26%;
        }
      }
      & .lineupType3-5-2.bottomTeam .playerItem {
        &:first-child {
          bottom: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 15%;
          left: 14%;
        }
        &:nth-child(3) {
          bottom: 15%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          bottom: 15%;
          right: 14%;
        }
        &:nth-child(5) {
          bottom: 30%;
          left: 3.25%;
        }
        &:nth-child(6) {
          bottom: 26%;
          left: 24.45%;
        }
        &:nth-child(7) {
          bottom: 26%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          bottom: 26%;
          right: 24.45%;
        }
        &:nth-child(9) {
          bottom: 30%;
          right: 3.25%;
        }

        &:nth-child(10) {
          bottom: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          bottom: 39%;
          right: 26%;
        }
      }
    }
    & {
      & .lineupType3-4-3.topTeam .playerItem {
        &:first-child {
          top: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 15%;
          left: 20%;
        }
        &:nth-child(3) {
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          top: 15%;
          right: 20%;
        }
        &:nth-child(5) {
          top: 27%;
          left: 8.25%;
        }
        &:nth-child(6) {
          top: 27%;
          left: 32%;
        }
        &:nth-child(7) {
          top: 27%;
          right: 32%;
        }
        &:nth-child(8) {
          top: 27%;
          right: 8.25%;
        }
        &:nth-child(9) {
          top: 39%;
          left: 12%;
        }
        &:nth-child(10) {
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(11) {
          top: 39%;
          right: 12%;
        }
      }
      & .lineupType3-4-3.bottomTeam .playerItem {
        &:first-child {
          bottom: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 15%;
          left: 20%;
        }
        &:nth-child(3) {
          bottom: 15%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          bottom: 15%;
          right: 20%;
        }
        &:nth-child(5) {
          bottom: 27%;
          left: 8.25%;
        }
        &:nth-child(6) {
          bottom: 27%;
          left: 32%;
        }
        &:nth-child(7) {
          bottom: 27%;
          right: 32%;
        }
        &:nth-child(8) {
          bottom: 27%;
          right: 8.25%;
        }
        &:nth-child(9) {
          bottom: 39%;
          left: 12%;
        }
        &:nth-child(10) {
          bottom: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(11) {
          bottom: 39%;
          right: 12%;
        }
      }
    }
    & {
      & .lineupType3-4-3d.topTeam .playerItem {
        &:first-child {
          top: 1%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 11%;
          left: 20%;
        }
        &:nth-child(3) {
          top: 11%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          top: 11%;
          right: 20%;
        }
        &:nth-child(5) {
          top: 26%;
          left: 10%;
        }
        &:nth-child(6) {
          top: 20.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(7) {
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          top: 26%;
          right: 10%;
        }
        &:nth-child(9) {
          top: 39.5%;
          left: 12%;
        }
        &:nth-child(10) {
          top: 39.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(11) {
          top: 39.5%;
          right: 12%;
        }
      }
      & .lineupType3-4-3d.bottomTeam .playerItem {
        &:first-child {
          bottom: 1%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 11%;
          left: 20%;
        }
        &:nth-child(3) {
          bottom: 11%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          bottom: 11%;
          right: 20%;
        }
        &:nth-child(5) {
          bottom: 26%;
          left: 10%;
        }
        &:nth-child(6) {
          bottom: 20.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(7) {
          bottom: 30%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          bottom: 26%;
          right: 10%;
        }
        &:nth-child(9) {
          bottom: 39.5%;
          left: 12%;
        }
        &:nth-child(10) {
          bottom: 39.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(11) {
          bottom: 39.5%;
          right: 12%;
        }
      }
    }
    & {
      & .lineupType4-2-4-0.topTeam .playerItem {
        &:first-child {
          top: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 15%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 15%;
          left: 32%;
        }
        &:nth-child(4) {
          top: 15%;
          right: 32%;
        }
        &:nth-child(5) {
          top: 15%;
          right: 8.25%;
        }
        &:nth-child(6) {
          top: 27%;
          left: 26%;
        }
        &:nth-child(7) {
          top: 27%;
          right: 26%;
        }
        &:nth-child(8) {
          top: 39%;
          left: 8.25%;
        }
        &:nth-child(9) {
          top: 39%;
          left: 32%;
        }
        &:nth-child(10) {
          top: 39%;
          right: 32%;
        }
        &:nth-child(11) {
          top: 39%;
          right: 8.25%;
        }
      }
      & .lineupType4-2-4-0.bottomTeam .playerItem {
        &:first-child {
          bottom: 3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 15%;
          left: 8.25%;
        }
        &:nth-child(3) {
          bottom: 15%;
          left: 32%;
        }
        &:nth-child(4) {
          bottom: 15%;
          right: 32%;
        }
        &:nth-child(5) {
          bottom: 15%;
          right: 8.25%;
        }
        &:nth-child(6) {
          bottom: 27%;
          left: 26%;
        }
        &:nth-child(7) {
          bottom: 27%;
          right: 26%;
        }
        &:nth-child(8) {
          bottom: 39%;
          left: 8.25%;
        }
        &:nth-child(9) {
          bottom: 39%;
          left: 32%;
        }
        &:nth-child(10) {
          bottom: 39%;
          right: 32%;
        }
        &:nth-child(11) {
          bottom: 39%;
          right: 8.25%;
        }
      }
    }
    & {
      & .lineupType4-4-1-1.topTeam .playerItem {
        &:first-child {
          top: 2%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 11%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 11%;
          left: 32%;
        }
        &:nth-child(4) {
          top: 11%;
          right: 32%;
        }
        &:nth-child(5) {
          top: 11%;
          right: 8.25%;
        }
        &:nth-child(6) {
          top: 21%;
          left: 8.25%;
        }
        &:nth-child(7) {
          top: 21%;
          left: 32%;
        }
        &:nth-child(8) {
          top: 21%;
          right: 32%;
        }
        &:nth-child(9) {
          top: 21%;
          right: 8.25%;
        }
        &:nth-child(10) {
          top: 29%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(11) {
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      & .lineupType4-4-1-1.bottomTeam .playerItem {
        &:first-child {
          bottom: 2%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 11%;
          left: 8.25%;
        }
        &:nth-child(3) {
          bottom: 11%;
          left: 32%;
        }
        &:nth-child(4) {
          bottom: 11%;
          right: 32%;
        }
        &:nth-child(5) {
          bottom: 11%;
          right: 8.25%;
        }
        &:nth-child(6) {
          bottom: 21%;
          left: 8.25%;
        }
        &:nth-child(7) {
          bottom: 21%;
          left: 32%;
        }
        &:nth-child(8) {
          bottom: 21%;
          right: 32%;
        }
        &:nth-child(9) {
          bottom: 21%;
          right: 8.25%;
        }
        &:nth-child(10) {
          bottom: 29%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(11) {
          bottom: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & {
      & .lineupType4-1-4-1.topTeam .playerItem {
        &:first-child {
          top: 2%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 11%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 11%;
          left: 32%;
        }
        &:nth-child(4) {
          top: 11%;
          right: 32%;
        }
        &:nth-child(5) {
          top: 11%;
          right: 8.25%;
        }
        &:nth-child(6) {
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(7) {
          top: 29%;
          left: 8.25%;
        }
        &:nth-child(8) {
          top: 29%;
          left: 32%;
        }
        &:nth-child(9) {
          top: 29%;
          right: 32%;
        }
        &:nth-child(10) {
          top: 29%;
          right: 8.25%;
        }

        &:nth-child(11) {
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      & .lineupType4-1-4-1.bottomTeam .playerItem {
        &:first-child {
          bottom: 2%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 11%;
          left: 8.25%;
        }
        &:nth-child(3) {
          bottom: 11%;
          left: 32%;
        }
        &:nth-child(4) {
          bottom: 11%;
          right: 32%;
        }
        &:nth-child(5) {
          bottom: 11%;
          right: 8.25%;
        }
        &:nth-child(6) {
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(7) {
          bottom: 29%;
          left: 8.25%;
        }
        &:nth-child(8) {
          bottom: 29%;
          left: 32%;
        }
        &:nth-child(9) {
          bottom: 29%;
          right: 32%;
        }
        &:nth-child(10) {
          bottom: 29%;
          right: 8.25%;
        }

        &:nth-child(11) {
          bottom: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & {
      & .lineupType4-2-3-1.topTeam .playerItem {
        &:first-child {
          top: 2%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 11%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 11%;
          left: 32%;
        }
        &:nth-child(4) {
          top: 11%;
          right: 32%;
        }
        &:nth-child(5) {
          top: 11%;
          right: 8.25%;
        }
        &:nth-child(6) {
          top: 20.5%;
          left: 27%;
        }
        &:nth-child(7) {
          top: 20.5%;
          right: 27%;
        }
        &:nth-child(8) {
          top: 29%;
          left: 14%;
        }
        &:nth-child(9) {
          top: 29%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          top: 29%;
          right: 14%;
        }

        &:nth-child(11) {
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      & .lineupType4-2-3-1.bottomTeam .playerItem {
        &:first-child {
          bottom: 2%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 11%;
          left: 8.25%;
        }
        &:nth-child(3) {
          bottom: 11%;
          left: 32%;
        }
        &:nth-child(4) {
          bottom: 11%;
          right: 32%;
        }
        &:nth-child(5) {
          bottom: 11%;
          right: 8.25%;
        }
        &:nth-child(6) {
          bottom: 20.5%;
          left: 27%;
        }
        &:nth-child(7) {
          bottom: 20.5%;
          right: 27%;
        }
        &:nth-child(8) {
          bottom: 29%;
          left: 14%;
        }
        &:nth-child(9) {
          bottom: 29%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          bottom: 29%;
          right: 14%;
        }

        &:nth-child(11) {
          bottom: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & {
      & .lineupType4-3-2-1.topTeam .playerItem {
        &:first-child {
          top: 2%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 11%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 11%;
          left: 32%;
        }
        &:nth-child(4) {
          top: 11%;
          right: 32%;
        }
        &:nth-child(5) {
          top: 11%;
          right: 8.25%;
        }

        &:nth-child(6) {
          top: 21%;
          left: 14%;
        }
        &:nth-child(7) {
          top: 21%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          top: 21%;
          right: 14%;
        }
        &:nth-child(9) {
          top: 30%;
          left: 27%;
        }
        &:nth-child(10) {
          top: 30%;
          right: 27%;
        }
        &:nth-child(11) {
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      & .lineupType4-3-2-1.bottomTeam .playerItem {
        &:first-child {
          bottom: 2%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 11%;
          left: 8.25%;
        }
        &:nth-child(3) {
          bottom: 11%;
          left: 32%;
        }
        &:nth-child(4) {
          bottom: 11%;
          right: 32%;
        }
        &:nth-child(5) {
          bottom: 11%;
          right: 8.25%;
        }

        &:nth-child(6) {
          bottom: 21%;
          left: 14%;
        }
        &:nth-child(7) {
          bottom: 21%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          bottom: 21%;
          right: 14%;
        }
        &:nth-child(9) {
          bottom: 30%;
          left: 27%;
        }
        &:nth-child(10) {
          bottom: 30%;
          right: 27%;
        }
        &:nth-child(11) {
          bottom: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & {
      & .lineupType4-2-2-2.topTeam .playerItem {
        &:first-child {
          top: 2%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 11%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 11%;
          left: 32%;
        }
        &:nth-child(4) {
          top: 11%;
          right: 32%;
        }
        &:nth-child(5) {
          top: 11%;
          right: 8.25%;
        }
        &:nth-child(6) {
          top: 21%;
          left: 23%;
        }
        &:nth-child(7) {
          top: 21%;
          right: 23%;
        }
        &:nth-child(8) {
          top: 30%;
          left: 32%;
        }
        &:nth-child(9) {
          top: 30%;
          right: 32%;
        }
        &:nth-child(10) {
          top: 39%;
          left: 23%;
        }
        &:nth-child(11) {
          top: 39%;
          right: 23%;
        }
      }
      & .lineupType4-2-2-2.bottomTeam .playerItem {
        &:first-child {
          bottom: 2%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 11%;
          left: 8.25%;
        }
        &:nth-child(3) {
          bottom: 11%;
          left: 32%;
        }
        &:nth-child(4) {
          bottom: 11%;
          right: 32%;
        }
        &:nth-child(5) {
          bottom: 11%;
          right: 8.25%;
        }
        &:nth-child(6) {
          bottom: 21%;
          left: 23%;
        }
        &:nth-child(7) {
          bottom: 21%;
          right: 23%;
        }
        &:nth-child(8) {
          bottom: 30%;
          left: 32%;
        }
        &:nth-child(9) {
          bottom: 30%;
          right: 32%;
        }
        &:nth-child(10) {
          bottom: 39%;
          left: 23%;
        }
        &:nth-child(11) {
          bottom: 39%;
          right: 23%;
        }
      }
    }
    & {
      & .lineupType3-5-1-1.topTeam .playerItem {
        &:first-child {
          top: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 11%;
          left: 14%;
        }
        &:nth-child(3) {
          top: 11%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          top: 11%;
          right: 14%;
        }
        &:nth-child(5) {
          top: 24%;
          left: 3.25%;
        }
        &:nth-child(6) {
          top: 21%;
          left: 20%;
        }
        &:nth-child(7) {
          top: 21%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          top: 21%;
          right: 20%;
        }
        &:nth-child(9) {
          top: 24%;
          right: 3.25%;
        }

        &:nth-child(10) {
          top: 31%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(11) {
          top: 40%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      & .lineupType3-5-1-1.bottomTeam .playerItem {
        &:first-child {
          bottom: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 11%;
          left: 14%;
        }
        &:nth-child(3) {
          bottom: 11%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          bottom: 11%;
          right: 14%;
        }
        &:nth-child(5) {
          bottom: 24%;
          left: 3.25%;
        }
        &:nth-child(6) {
          bottom: 21%;
          left: 20%;
        }
        &:nth-child(7) {
          bottom: 21%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          bottom: 21%;
          right: 20%;
        }
        &:nth-child(9) {
          bottom: 24%;
          right: 3.25%;
        }

        &:nth-child(10) {
          bottom: 31%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(11) {
          bottom: 40%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & {
      & .lineupType3-4-2-1.topTeam .playerItem {
        &:first-child {
          top: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 12%;
          left: 14%;
        }
        &:nth-child(3) {
          top: 12%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          top: 12%;
          right: 14%;
        }
        &:nth-child(5) {
          top: 22%;
          left: 8.25%;
        }
        &:nth-child(6) {
          top: 22%;
          left: 32%;
        }
        &:nth-child(7) {
          top: 22%;
          right: 32%;
        }
        &:nth-child(8) {
          top: 22%;
          right: 8.25%;
        }
        &:nth-child(9) {
          top: 32%;
          left: 26%;
        }
        &:nth-child(10) {
          top: 32%;
          right: 26%;
        }
        &:nth-child(11) {
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      & .lineupType3-4-2-1.bottomTeam .playerItem {
        &:first-child {
          bottom: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 12%;
          left: 14%;
        }
        &:nth-child(3) {
          bottom: 12%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          bottom: 12%;
          right: 14%;
        }
        &:nth-child(5) {
          bottom: 22%;
          left: 8.25%;
        }
        &:nth-child(6) {
          bottom: 22%;
          left: 32%;
        }
        &:nth-child(7) {
          bottom: 22%;
          right: 32%;
        }
        &:nth-child(8) {
          bottom: 22%;
          right: 8.25%;
        }
        &:nth-child(9) {
          bottom: 32%;
          left: 26%;
        }
        &:nth-child(10) {
          bottom: 32%;
          right: 26%;
        }
        &:nth-child(11) {
          bottom: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & {
      & .lineupType3-4-1-2.topTeam .playerItem {
        &:first-child {
          top: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 12%;
          left: 14%;
        }
        &:nth-child(3) {
          top: 12%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          top: 12%;
          right: 14%;
        }
        &:nth-child(5) {
          top: 22%;
          left: 8.25%;
        }
        &:nth-child(6) {
          top: 22%;
          left: 32%;
        }
        &:nth-child(7) {
          top: 22%;
          right: 32%;
        }
        &:nth-child(8) {
          top: 22%;
          right: 8.25%;
        }
        &:nth-child(9) {
          top: 32%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          top: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          top: 39%;
          right: 26%;
        }
      }
      & .lineupType3-4-1-2.bottomTeam .playerItem {
        &:first-child {
          bottom: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 12%;
          left: 14%;
        }
        &:nth-child(3) {
          bottom: 12%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          bottom: 12%;
          right: 14%;
        }
        &:nth-child(5) {
          bottom: 22%;
          left: 8.25%;
        }
        &:nth-child(6) {
          bottom: 22%;
          left: 32%;
        }
        &:nth-child(7) {
          bottom: 22%;
          right: 32%;
        }
        &:nth-child(8) {
          bottom: 22%;
          right: 8.25%;
        }
        &:nth-child(9) {
          bottom: 32%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          bottom: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          bottom: 39%;
          right: 26%;
        }
      }
    }
    & {
      & .lineupType3-1-4-2.topTeam .playerItem {
        &:first-child {
          top: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 11.5%;
          left: 14%;
        }
        &:nth-child(3) {
          top: 11.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          top: 11.5%;
          right: 14%;
        }
        &:nth-child(5) {
          top: 21%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(6) {
          top: 29%;
          left: 8.25%;
        }
        &:nth-child(7) {
          top: 29%;
          left: 32%;
        }
        &:nth-child(8) {
          top: 29%;
          right: 32%;
        }
        &:nth-child(9) {
          top: 29%;
          right: 8.25%;
        }

        &:nth-child(10) {
          top: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          top: 39%;
          right: 26%;
        }
      }
      & .lineupType3-1-4-2.bottomTeam .playerItem {
        &:first-child {
          bottom: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 11.5%;
          left: 14%;
        }
        &:nth-child(3) {
          bottom: 11.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          bottom: 11.5%;
          right: 14%;
        }
        &:nth-child(5) {
          bottom: 21%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(6) {
          bottom: 29%;
          left: 8.25%;
        }
        &:nth-child(7) {
          bottom: 29%;
          left: 32%;
        }
        &:nth-child(8) {
          bottom: 29%;
          right: 32%;
        }
        &:nth-child(9) {
          bottom: 29%;
          right: 8.25%;
        }

        &:nth-child(10) {
          bottom: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          bottom: 39%;
          right: 26%;
        }
      }
    }
    & {
      & .lineupType4-1-3-2.topTeam .playerItem {
        &:first-child {
          top: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 11.5%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 11.5%;
          left: 32%;
        }
        &:nth-child(4) {
          top: 11.5%;
          right: 32%;
        }
        &:nth-child(5) {
          top: 11.5%;
          right: 8.25%;
        }

        &:nth-child(6) {
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(7) {
          top: 30%;
          left: 14%;
        }
        &:nth-child(8) {
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(9) {
          top: 30%;
          right: 14%;
        }
        &:nth-child(10) {
          top: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          top: 39%;
          right: 26%;
        }
      }
      & .lineupType4-1-3-2.bottomTeam .playerItem {
        &:first-child {
          bottom: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 11.5%;
          left: 8.25%;
        }
        &:nth-child(3) {
          bottom: 11.5%;
          left: 32%;
        }
        &:nth-child(4) {
          bottom: 11.5%;
          right: 32%;
        }
        &:nth-child(5) {
          bottom: 11.5%;
          right: 8.25%;
        }

        &:nth-child(6) {
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(7) {
          bottom: 30%;
          left: 14%;
        }
        &:nth-child(8) {
          bottom: 30%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(9) {
          bottom: 30%;
          right: 14%;
        }
        &:nth-child(10) {
          bottom: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          bottom: 39%;
          right: 26%;
        }
      }
    }
    & {
      & .lineupType4-3-1-2.topTeam .playerItem {
        &:first-child {
          top: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 11.5%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 11.5%;
          left: 32%;
        }
        &:nth-child(4) {
          top: 11.5%;
          right: 32%;
        }
        &:nth-child(5) {
          top: 11.5%;
          right: 8.25%;
        }
        &:nth-child(6) {
          top: 21%;
          left: 14%;
        }
        &:nth-child(7) {
          top: 21%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          top: 21%;
          right: 14%;
        }
        &:nth-child(9) {
          top: 31%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          top: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          top: 39%;
          right: 26%;
        }
      }
      & .lineupType4-3-1-2.bottomTeam .playerItem {
        &:first-child {
          bottom: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 11.5%;
          left: 8.25%;
        }
        &:nth-child(3) {
          bottom: 11.5%;
          left: 32%;
        }
        &:nth-child(4) {
          bottom: 11.5%;
          right: 32%;
        }
        &:nth-child(5) {
          bottom: 11.5%;
          right: 8.25%;
        }
        &:nth-child(6) {
          bottom: 21%;
          left: 14%;
        }
        &:nth-child(7) {
          bottom: 21%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          bottom: 21%;
          right: 14%;
        }
        &:nth-child(9) {
          bottom: 31%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          bottom: 39%;
          left: 26%;
        }
        &:nth-child(11) {
          bottom: 39%;
          right: 26%;
        }
      }
    }
    & {
      & .lineupType3-2-4-1.topTeam .playerItem {
        &:first-child {
          top: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 12%;
          left: 14%;
        }
        &:nth-child(3) {
          top: 12%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          top: 12%;
          right: 14%;
        }
        &:nth-child(5) {
          top: 20.5%;
          left: 26%;
        }
        &:nth-child(6) {
          top: 20.5%;
          right: 26%;
        }
        &:nth-child(7) {
          top: 30.5%;
          left: 8.25%;
        }
        &:nth-child(8) {
          top: 30.5%;
          left: 32%;
        }
        &:nth-child(9) {
          top: 30.5%;
          right: 32%;
        }
        &:nth-child(10) {
          top: 30.5%;
          right: 8.25%;
        }
        &:nth-child(11) {
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      & .lineupType3-2-4-1.bottomTeam .playerItem {
        &:first-child {
          bottom: 1.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 12%;
          left: 14%;
        }
        &:nth-child(3) {
          bottom: 12%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          bottom: 12%;
          right: 14%;
        }
        &:nth-child(5) {
          bottom: 20.5%;
          left: 26%;
        }
        &:nth-child(6) {
          bottom: 20.5%;
          right: 26%;
        }
        &:nth-child(7) {
          bottom: 30.5%;
          left: 8.25%;
        }
        &:nth-child(8) {
          bottom: 30.5%;
          left: 32%;
        }
        &:nth-child(9) {
          bottom: 30.5%;
          right: 32%;
        }
        &:nth-child(10) {
          bottom: 30.5%;
          right: 8.25%;
        }
        &:nth-child(11) {
          bottom: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & {
      & .lineupType3-3-3-1.topTeam .playerItem {
        &:first-child {
          top: 0.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 10%;
          left: 16%;
        }
        &:nth-child(3) {
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          top: 10%;
          right: 16%;
        }
        &:nth-child(5) {
          top: 20%;
          left: 16%;
        }
        &:nth-child(6) {
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(7) {
          top: 20%;
          right: 16%;
        }
        &:nth-child(8) {
          top: 30%;
          left: 6%;
        }
        &:nth-child(9) {
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          top: 30%;
          right: 6%;
        }
        &:nth-child(11) {
          top: 39.5%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      & .lineupType3-3-3-1.bottomTeam .playerItem {
        &:first-child {
          bottom: 0.5%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 10%;
          left: 16%;
        }
        &:nth-child(3) {
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          bottom: 10%;
          right: 16%;
        }
        &:nth-child(5) {
          bottom: 20%;
          left: 16%;
        }
        &:nth-child(6) {
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(7) {
          bottom: 20%;
          right: 16%;
        }
        &:nth-child(8) {
          bottom: 30%;
          left: 6%;
        }
        &:nth-child(9) {
          bottom: 30%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          bottom: 30%;
          right: 6%;
        }
        &:nth-child(11) {
          bottom: 39.5%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & {
      & .lineupType4-1-2-1-2.topTeam .playerItem {
        &:first-child {
          top: 1%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 11%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 11%;
          left: 30%;
        }
        &:nth-child(4) {
          top: 11%;
          right: 30%;
        }
        &:nth-child(5) {
          top: 11%;
          right: 8.25%;
        }
        &:nth-child(6) {
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(7) {
          top: 25%;
          left: 12%;
        }
        &:nth-child(8) {
          top: 25%;
          right: 12%;
        }
        &:nth-child(9) {
          top: 32%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          top: 38%;
          left: 20%;
        }
        &:nth-child(11) {
          top: 38%;
          right: 20%;
        }
      }
      & .lineupType4-1-2-1-2.bottomTeam .playerItem {
        &:first-child {
          bottom: 1%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 11%;
          left: 8.25%;
        }
        &:nth-child(3) {
          bottom: 11%;
          left: 30%;
        }
        &:nth-child(4) {
          bottom: 11%;
          right: 30%;
        }
        &:nth-child(5) {
          bottom: 11%;
          right: 8.25%;
        }
        &:nth-child(6) {
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(7) {
          bottom: 25%;
          left: 12%;
        }
        &:nth-child(8) {
          bottom: 25%;
          right: 12%;
        }
        &:nth-child(9) {
          bottom: 32%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          bottom: 38%;
          left: 20%;
        }
        &:nth-child(11) {
          bottom: 38%;
          right: 20%;
        }
      }
    }
    & {
      & .lineupType3-1-3-1-2.topTeam .playerItem {
        &:first-child {
          top: 0.3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 9%;
          left: 20%;
        }
        &:nth-child(3) {
          top: 9%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          top: 9%;
          right: 20%;
        }
        &:nth-child(5) {
          top: 18%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(6) {
          top: 27%;
          left: 6%;
        }
        &:nth-child(7) {
          top: 27%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          top: 27%;
          right: 6%;
        }
        &:nth-child(9) {
          top: 36%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          top: 40.5%;
          left: 26%;
        }
        &:nth-child(11) {
          top: 40.5%;
          right: 26%;
        }
      }
      & .lineupType3-1-3-1-2.bottomTeam .playerItem {
        &:first-child {
          bottom: 0.3%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          bottom: 9%;
          left: 20%;
        }
        &:nth-child(3) {
          bottom: 9%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          bottom: 9%;
          right: 20%;
        }
        &:nth-child(5) {
          bottom: 18%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(6) {
          bottom: 27%;
          left: 6%;
        }
        &:nth-child(7) {
          bottom: 27%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          bottom: 27%;
          right: 6%;
        }
        &:nth-child(9) {
          bottom: 36%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          bottom: 40.5%;
          left: 26%;
        }
        &:nth-child(11) {
          bottom: 40.5%;
          right: 26%;
        }
      }
    }
  }
}
</style>
