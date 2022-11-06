<template>
  <div class="advertisement">
    广告位
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/vw";
.advertisement {
  width: 100%;
  line-height: vw(64);
  background: #a4a4a4;
  font-weight: 500;
  font-size: vw(14);
  color: rgba(0, 0, 0, 0.32);
  text-align: center;
  box-sizing: border-box;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 50%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(
      to left,
      rgba(0, 0, 0, 1) 50%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 50%,
      rgba(255, 255, 255, 0) 0%
    );
  background-position: top, right, bottom, left;
  background-size: 30px 1px, 1px 30px, 30px 1px, 1px 30px;
  background-repeat: repeat-x, repeat-y, repeat-x, repeat-y;
}
</style>