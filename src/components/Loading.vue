<template>
  <div class="loading">
    <div class="loading-icon"></div>
    <div class="text">加载中...</div>
  </div>
</template>

<style lang="scss" scope>
@import "~@/assets/vw";
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  .loading-icon {
    width: vw(10);
    height: vw(10);
    border: vw(2) solid #fff;
    border-top-color: transparent;
    border-radius: 100%;

    animation: circle infinite 0.75s linear;
  }
  @keyframes circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .text {
    margin-left: vw(10);
    font-size: vw(12);
  }
}
</style>