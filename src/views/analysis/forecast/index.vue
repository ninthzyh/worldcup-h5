<template>
    <div class="forecast">
        <Ai :cardList="predictedList.starPredicted"></Ai>
        <Session :matchInfo="predictedList.matchInfo" :isPaid="predictedList.isPaid"></Session>
        <div class="is-pay">
            <Win :cardList="predictedList.outcomePredicted"></Win>
            <Score :cardList="predictedList.scorePredicted"></Score>
            <goal-number :cardList="predictedList.goalPredicted"></goal-number>
            <both-score :cardList="predictedList.bothGoal"></both-score>
<!--            <div class="pay" v-if="!predictedList.isPaid">-->
<!--                <div class="lock">-->
<!--                    <div class="lock-icon"></div>-->
<!--                </div>-->
<!--                <div class="pay-text">{{$lang.forecast.pay}}</div>-->
<!--            </div>-->
        </div>
    </div>
</template>
<script>
import Ai from "./ai";
import Session from "./session";
import Win from "./win";
import Score from "./score";
import BothScore from "./bothScore";
import GoalNumber from "./goalNumber";
import { matchPredicted } from "@/api/analysis";
// import json from "./matchpredicted.json";
export default {
    props: ["matchData"],
    components: { Ai, Session, Win, Score, BothScore, GoalNumber },
    watch: {
        matchData: {
            immediate: true,
            handler(newData) {
                this.predictedList = newData;
            },
            deep: true,
        },
    },
    mounted() {
        // this.predictedList = json;
        // this.getMatchPredicted();
    },
    data() {
        return {
            predictedList: {},
        };
    },
    methods: {
        // 比赛预测
        getMatchPredicted() {
            // const { matchId } = this.$route.query;
            const data = {
                matchId: "ak5kkxvpxf1url15gci42ly7e",
            };
            matchPredicted(data).then((res) => {
                this.predictedList = res;
            });
        },
    },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
@media screen and (max-device-width: 600px) {
  .forecast {
    height: 100%;
    // padding: 0 vw(32);

    .is-pay {
      position: relative;
      .pay {
        position: absolute;
        width: calc(100% + #{vw(64)});
        height: 100%;
        top: 0;
        left: vw(-32);
        background: rgba(0, 0, 0, 0.04);
        backdrop-filter: blur(vw(5));
        z-index: 22;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: vw(40);
        .lock {
          background: #0c0e11;
          border: vw(1) solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          display: inline-block;
          padding: vw(8);
          margin-bottom: vw(8);
          .lock-icon {
            height: vw(16);
            width: vw(16);
            background: url("~@/assets/images/lock.svg") no-repeat
            center/contain;
          }
        }
        .pay-text {
          font-weight: 400;
          font-size: vw(12);
          line-height: vw(13);
        }
      }
    }
  }
}
@media screen and (min-device-width: 600px) {
  .forecast {
    height: 100%;
    // padding: 0 vw(32);
    padding: 0 calc((100% - #{vwPad(1024)})/2);
    .is-pay {
      position: relative;
      .pay {
        position: absolute;
        width: calc(100% + #{vwPad(64)});
        height: 100%;
        top: 0;
        left: vwPad(-32);
        background: rgba(0, 0, 0, 0.04);
        backdrop-filter: blur(vwPad(5));
        z-index: 22;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: vwPad(40);
        .lock {
          background: #0c0e11;
          border: vwPad(1) solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          display: inline-block;
          padding: vwPad(8);
          margin-bottom: vwPad(8);
          .lock-icon {
            height: vwPad(16);
            width: vwPad(16);
            background: url("~@/assets/images/lock.svg") no-repeat
            center/contain;
          }
        }
        .pay-text {
          font-weight: 400;
          font-size: vwPad(12);
          line-height: vwPad(13);
        }
      }
    }
  }
}
</style>
