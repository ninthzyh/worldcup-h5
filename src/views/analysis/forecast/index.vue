<template>
  <div class="forecast">
    <Ai></Ai>
    <Session></Session>
    <Win></Win>
    <Score></Score>
    <goal-number></goal-number>
    <both-score></both-score>
    <Hot></Hot>
  </div>
</template>
<script>
import Ai from "./ai";
import Session from "./session";
import { matchPredicted } from "../../../api/forecast";
import Win from "./win";
import Score from "./score";
import BothScore from "./bothScore";
import GoalNumber from './goalNumber';
import Hot from './hot';
export default {
  components: { Ai, Session, Win, Score,BothScore,GoalNumber,Hot },

  mounted() {
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
}
</style>