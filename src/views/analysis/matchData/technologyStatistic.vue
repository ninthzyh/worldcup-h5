<template>
  <div class="technology-card">
    <div class="card-header">
      <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" border="0.5px solid rgba(255, 255, 255, 0.12)"
        padding="8px" :img="''" />
      <div class="card-title">技术统计</div>
      <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" border="0.5px solid rgba(255, 255, 255, 0.12)"
        padding="8px" :img="''" />
    </div>
    <div class="technology-content">
      <div class="card-subtitle">控球率</div>
      <div class="progress-bar-wrap">
        <div class="left-bar"></div>
        <div class="right-bar"></div>
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
.technology-card {
  background: rgba(0, 0, 0, 0.04);
  border: vw(1) solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(#{vw(8)});
  border-radius: vw(16);
  padding: vw(16);
  margin-bottom: vw(16);
  .card-header {
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: vw(16);
    .card-title {
      font-weight: 500;
      font-size: vw(14);
      line-height: 110%;
    }
    .bold {
      font-weight: 600;
      font-size: vw(16);
      line-height: vw(24);
    }
  }
  .technology-content {
    .card-subtitle {
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      padding-bottom: vw(12);
      text-align: center;
    }
    .progress-bar-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @mixin progress-bar($radius, $background) {
        border-radius: 4px;
        line-height: vw(24);
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        height: 12px;
        background: $background;
        border-radius: $radius;
      }
      .left-bar {
        @include progress-bar(4px 0px 0px 4px, #7a293f);
        margin-right: vw(4);
        width: 10%;
      }
      .right-bar {
        @include progress-bar(0px 4px 4px 0px, #7996bc);
        width: 10%;
      }
    }
  }
}
</style>