<template>
    <div class="scoreboard">
        <div class="scoreboard-card-title">
            <div class="logo2"></div>
            <div>{{$lang.matchAnalysis.scoreboard}}</div>
        </div>
        <div class="switch-group">
            <div class="switch-left" @click="onSwitch(-1)"></div>
            <div class="switch-label">{{cardList&&cardList[switchIndex].groupName}}</div>
            <div class="switch-right" @click="onSwitch(1)"></div>
        </div>
        <div class="table">
            <div class="table-header">
                <div class="label-first"><span class="icon">#</span><span>{{$lang.matchAnalysis.team}}</span></div>
                <div class="label-1">{{$lang.matchAnalysis.PL}}</div>
                <div class="label-3">{{$lang.matchAnalysis.WDL}}</div>
                <div class="label-3">{{$lang.matchAnalysis.goalStatus}}</div>
                <div class="label-1">{{$lang.matchAnalysis.PTS}}</div>
            </div>
            <div :class="`${idx%2?'':'odd'} table-content`" v-for="(it,idx) in (cardList&&cardList[switchIndex].dataList)" :key="idx">
                <div :class="`${idx<2?'line':''}`"></div>
                <div class="rows-first">
                    <div class="index">{{idx+1}}</div>
                    <national-flag :width="`${$vw(16)}`" :height="`${$vw(16)}`" :margin="`0 ${$vw(8)}`" :img="it.teamFlag" />
                    <div class="team-name">{{it.teamName}}</div>
                </div>
                <div class="score-1">{{it.matchesPlayed}}</div>
                <div class="score-3">{{it.matchesWon}}/{{it.matchesDrawn}}/{{it.matchesLost}}
                </div>
                <div class="score-3">
                    {{it.goalsFor}}/{{it.goalsAgainst}}
                </div>
                <div class="score-1"><span>{{it.points}}</span></div>
            </div>
        </div>
        <div class="tips">
            <div class="legend"></div>
            <div>{{$lang.matchAnalysis.playOff}}</div>
        </div>
    </div>
</template>
<script>
import NationalFlag from "@/components/NationalFlag";

export default {
    props: ["cardList"],
    components: {
        NationalFlag,
    },
    watch: {
        cardList: {
            immediate: true,
            handler(newData) {
                this.cardList = newData;
            },
        },
    },
    data() {
        return {
            switchIndex: 0,
        };
    },
    methods: {
        onSwitch(count) {
            this.switchIndex = this.switchIndex + count;
            // -?????????????????????=??????????????????
            if (this.switchIndex < 0 && count < 0) {
                this.switchIndex = this.cardList.length - 1;
            }
            // +?????????????????????=0
            if (this.switchIndex > this.cardList.length - 1 && count > 0) {
                this.switchIndex = 0;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
@media screen and (max-device-width: 600px) {
  .scoreboard {
    background: rgba(0, 0, 0, 0.04);
    border: vw(1) solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(vw(8));
    border-radius: vw(16);
    padding: vw(16);
    margin-bottom: vw(16);

    .scoreboard-card-title {
      font-weight: 500;
      font-size: vw(14);
      line-height: vw(24);
      display: flex;
      align-items: center;
      .logo2 {
        width: vw(24);
        height: vw(24);
        background: url("~@/assets/images/logo2.svg") no-repeat
        center/contain;
        margin-right: vw(4);
      }
    }
    .switch-group {
      border: vw(1) solid rgba(255, 255, 255, 0.12);
      border-radius: vw(8);
      padding: 0 vw(8);
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: vw(16) 0;
      height: vw(32);
      line-height: vw(32);

      @mixin common-icon($url) {
        width: vw(16);
        height: vw(16);
        background: url($url) no-repeat center/contain;
      }
      .switch-left {
        @include common-icon("~@/assets/images/arrow-left.svg");
      }
      .switch-right {
        @include common-icon("~@/assets/images/arrow-right.svg");
      }
      .switch-label {
        font-weight: 500;
        font-size: vw(14);
      }
    }
    .table {
      .table-header {
        color: rgba(255, 255, 255, 0.54);
        font-weight: 400;
        font-size: vw(10);
        line-height: vw(24);
        display: flex;
        align-items: center;
        text-align: center;
        padding: vw(4) vw(8);
        border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
        .label-first {
          flex-basis: vw(108);
          text-align: left;
          transform: scale(0.9);
          transform-origin: 0 50%;
          .icon {
            margin-right: vw(14);
          }
        }
        .label-1 {
          text-align: center;
          transform: scale(0.9);
          transform-origin: 50% 50%;
          flex: 1 0 vw(24);
          word-break: break-all;
        }
        .label-3 {
          text-align: center;
          transform: scale(0.9);
          transform-origin: 50% 50%;
          flex: 1 0 vw(48);
          word-break: break-all;
        }
      }
      .odd {
        background: rgba(255, 255, 255, 0.06);
      }
      .table-content {
        display: flex;
        align-items: center;
        padding: vw(12) vw(8);
        line-height: vw(24);
        font-weight: 500;
        font-family: "Formular";
        font-size: vw(14);
        border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);

        .line {
          width: vw(3);
          height: vw(42);
          position: absolute;
          left: 0;
          background: #bd223b;
          border-radius: vw(2);
        }
        .rows-first {
          flex-basis: vw(108);
          display: flex;
          align-items: center;
          .index {
            font-family: "Inter";
          }
          .team-name {
            font-weight: 500;
            font-size: vw(12);
            line-height: vw(24);
          }
        }
        .score-1 {
          text-align: center;
          font-weight: 400;
          font-size: vw(12);
          line-height: vw(24);
          flex: 1 0 vw(15);
          word-break: break-all;
        }
        .score-3 {
          text-align: center;
          font-weight: 400;
          font-size: vw(12);
          line-height: vw(24);
          flex: 1 0 vw(35);
          word-break: break-all;
        }
      }
    }
    .tips {
      font-weight: 400;
      font-size: vw(10);
      line-height: vw(16);
      color: rgba(255, 255, 255, 0.7);
      display: flex;
      align-items: center;
      padding-top: vw(12);
      .legend {
        width: vw(8);
        height: vw(8);
        background: #bd223b;
        border-radius: 50%;
        margin-right: vw(4);
      }
    }
  }
}
@media screen and (min-device-width: 600px) {
  .scoreboard {
    background: rgba(0, 0, 0, 0.04);
    border: vwPad(1) solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(vwPad(8));
    border-radius: vwPad(16);
    padding: vwPad(16);
    margin-bottom: vwPad(16);

    .scoreboard-card-title {
      font-weight: 500;
      font-size: vwPad(14);
      line-height: vwPad(24);
      display: flex;
      align-items: center;
      .logo2 {
        width: vwPad(24);
        height: vwPad(24);
        background: url("~@/assets/images/logo2.svg") no-repeat
        center/contain;
        margin-right: vwPad(4);
      }
    }
    .switch-group {
      border: vwPad(1) solid rgba(255, 255, 255, 0.12);
      border-radius: vwPad(8);
      padding: 0 vwPad(8);
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: vwPad(16) 0;
      height: vwPad(32);
      line-height: vwPad(32);

      @mixin common-icon($url) {
        width: vwPad(16);
        height: vwPad(16);
        background: url($url) no-repeat center/contain;
      }
      .switch-left {
        @include common-icon("~@/assets/images/arrow-left.svg");
      }
      .switch-right {
        @include common-icon("~@/assets/images/arrow-right.svg");
      }
      .switch-label {
        font-weight: 500;
        font-size: vwPad(14);
      }
    }
    .table {
      .table-header {
        color: rgba(255, 255, 255, 0.54);
        font-weight: 400;
        font-size: vwPad(10);
        line-height: vwPad(24);
        display: flex;
        align-items: center;
        text-align: center;
        padding: vwPad(4) vwPad(8);
        border-bottom: vwPad(1) solid rgba(255, 255, 255, 0.12);
        .label-first {
          flex: 1 1 vwPad(108);
          text-align: left;
          transform: scale(0.9);
          transform-origin: 0 50%;
          .icon {
            margin-right: vwPad(14);
          }
        }
        .label-1 {
          text-align: center;
          transform: scale(0.9);
          transform-origin: 50% 50%;
          flex: 0 0 vwPad(45);
          word-break: break-all;
        }
        .label-3 {
          text-align: center;
          transform: scale(0.9);
          transform-origin: 50% 50%;
          flex: 0 0 vwPad(90);
          word-break: break-all;
        }
      }
      .odd {
        background: rgba(255, 255, 255, 0.06);
      }
      .table-content {
        display: flex;
        align-items: center;
        padding: vwPad(12) vwPad(8);
        line-height: vwPad(24);
        font-weight: 500;
        font-family: "Formular";
        font-size: vwPad(14);
        border-bottom: vwPad(1) solid rgba(255, 255, 255, 0.12);

        .line {
          width: vwPad(3);
          height: vwPad(42);
          position: absolute;
          left: 0;
          background: #bd223b;
          border-radius: vwPad(2);
        }
        .rows-first {
          flex: 1 1 vwPad(108);
          display: flex;
          align-items: center;
          .index {
            font-family: "Inter";
          }
          .team-name {
            font-weight: 500;
            font-size: vwPad(12);
            line-height: vwPad(24);
          }
        }
        .score-1 {
          text-align: center;
          font-weight: 400;
          font-size: vwPad(12);
          line-height: vwPad(24);
          flex: 0 0 vwPad(45);
          word-break: break-all;
        }
        .score-3 {
          text-align: center;
          font-weight: 400;
          font-size: vwPad(12);
          line-height: vwPad(24);
          flex: 0 0 vwPad(90);
          word-break: break-all;
        }
      }
    }
    .tips {
      font-weight: 400;
      font-size: vwPad(10);
      line-height: vwPad(16);
      color: rgba(255, 255, 255, 0.7);
      display: flex;
      align-items: center;
      padding-top: vwPad(12);
      .legend {
        width: vwPad(8);
        height: vwPad(8);
        background: #bd223b;
        border-radius: 50%;
        margin-right: vwPad(4);
      }
    }
  }
}
</style>
