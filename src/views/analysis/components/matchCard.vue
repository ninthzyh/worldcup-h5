<template>
  <div class="match-card">
    <div class="match-card-item" v-for="(item,index) in 3" :key="index">
      <div class="match-card-header">
        <div class="time">2022年11月20日 18:00</div>
        <div class="status-hot">热门</div>
        <!-- <div class="status-not-hot">热门</div> -->
      </div>
      <div class="team-match">
        <div class="team-name left">葡萄牙</div>
        <national-flag :width="`${$vw(16)}`" :height="`${$vw(16)}`" :img="''" :margin="`0 ${$vw(8)}`" />
        <div class="team-score">1</div>
        <div class="team-score">-</div>
        <div class="team-score">1</div>
        <national-flag :width="`${$vw(16)}`" :height="`${$vw(16)}`" :img="''" :margin="`0 ${$vw(8)}`" />
        <div class="team-name">葡萄牙</div>
      </div>
    </div>
  </div>
</template>
<script>
import NationalFlag from "../../../components/NationalFlag";

export default {
  props: ["cardList"],
  components: {
    NationalFlag,
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.match-card {
  .match-card-item {
    border-top: vw(1) solid rgba(255, 255, 255, 0.12);
    border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
    padding-bottom: vw(12);

    .match-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: vw(2.5) 0;
      .time {
        font-family: "Inter";
        font-weight: 400;
        font-size: vw(10);
        line-height: vw(12);
        color: rgba(255, 255, 255, 0.7);
      }
      .status {
        padding: vw(2) vw(8);
        border-radius: vw(58);
        font-weight: 400;
        transform: scale(0.5455);
        transform-origin: 100% 50%;
        background: #bd3853;
      }
      .status-hot {
        @extend .status;
        background: #bd3853;
      }
      .status-not-hot {
        @extend .status;
        background: rgba(255, 255, 255, 0.12);
        color: rgba(255, 255, 255, 0.7);
      }
    }
    .team-match {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: vw(20);
      .team-name {
        flex: 0 0 vw(60);
        font-weight: 400;
        font-size: vw(12);
      }
      .left {
        text-align: right;
      }
      .team-score {
        font-family: "Inter";
        font-weight: 600;
        font-size: vw(14);
      }
    }
  }
}
</style>