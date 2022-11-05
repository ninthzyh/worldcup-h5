<template>
  <div class="forecast">
    <Ai></Ai>
    <Session></Session>
    <Win></Win>
    <Score></Score>
    <both-score></both-score>
  </div>
</template>
<script>
import Ai from "./ai";
import Session from "./session";
import { matchPredicted } from "../../../api/forecast";
import Win from "./win";
import Score from "./score";
import BothScore from "./bothScore";
export default {
  components: { Ai, Session, Win, Score,BothScore },

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