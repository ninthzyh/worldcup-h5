<template>
  <div class="info-wrap">
    <div class="info">
      The trend prognosis states the probability for a win, a draw or a loss from the home team’s perspective. At a
      glance
      it becomes visible whether there is a frontrunner or whether the teams face each other on equal footing.
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/vw.scss";

.info-wrap {
  position: absolute;
  top: 0;
  left: 0;
  background: #0c0e11;
  height: 100%;
  width: 100%;
  animation: fade 1s 1;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .info {
    background: #1b1c1f;
    border-radius: vw(8);
    font-weight: 400;
    font-size: vw(12);
    line-height: 160%;
    height: 100%;
    box-sizing: border-box;
    padding: vw(16);
    margin: 0 vw(16);
  }
}
</style>