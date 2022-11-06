<template>
  <div class="forecast">
    <Ai :cardList="predictedList.starPredicted"></Ai>
    <Session :cardList="predictedList.matchInfo"></Session>
    <div class="is-pay">
      <Win :cardList="predictedList.outcomePredicted"></Win>
      <Score :cardList="predictedList.scorePredicted"></Score>
      <goal-number :cardList="predictedList.goalPredicted"></goal-number>
      <both-score :cardList="predictedList.bothGoal"></both-score>
      <div class="pay" v-if="isPaid">
        <div class="lock">
          <div class="lock-icon"></div>
        </div>
        <div class="pay-text">购买后可查看</div>
      </div>
    </div>
  </div>
</template>
<script>
import Ai from "./ai";
import Session from "./session";
import { matchPredicted } from "../../../api/forecast";
import Win from "./win";
import Score from "./score";
import BothScore from "./bothScore";
import GoalNumber from "./goalNumber";
import json from "./matchpredicted.json";
export default {
  components: { Ai, Session, Win, Score, BothScore, GoalNumber },
  data() {
    return {
      predictedList: {},
      isPaid:false,//显示付费内容
    };
  },
  mounted() {
    this.predictedList = json;
    // const data = {
    //   matchId: "a5bn20ladyztuqtjzv2l57bvt",
    // };
    // matchPredicted(data).then((res) => {
    //   console.log(res);
    // });
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
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
          background: url("~@/assets/images/lock.svg") no-repeat center/contain;
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
</style>