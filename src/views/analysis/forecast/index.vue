<template>
  <div class="forecast">
    <Ai></Ai>
    <Session></Session>
    <Win></Win>
    <Score></Score>
  </div>
</template>
<script>
import Ai from "./ai";
import Session from "./session";
import { matchPredicted } from "../../../api/forecast";
import Win from "./win.vue";
import Score from "./score.vue";
export default {
  components: { Ai, Session, Win, Score },

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