<template>
  <div class="advertisement">
    广告位
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/vw";
@media screen and (max-device-width: 600px) {
  .advertisement {
    width: 100%;
    margin-bottom: vw(16);
    line-height: vw(64);
    background: #a4a4a4;
    font-weight: 500;
    font-size: vw(14);
    color: rgba(0, 0, 0, 0.32);
    text-align: center;
    box-sizing: border-box;
    border: 1px dashed #000000;
  }
}
@media screen and (min-device-width: 600px) {
  .advertisement {
    width: 100%;
    margin-bottom: vwPad(16);
    height: vwPad(120);
    line-height: vwPad(120);
    background: #a4a4a4;
    font-weight: 500;
    font-size: vwPad(14);
    color: rgba(0, 0, 0, 0.32);
    text-align: center;
    box-sizing: border-box;
    border: 1px dashed #000000;
  }
}
</style>
