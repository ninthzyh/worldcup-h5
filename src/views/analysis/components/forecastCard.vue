<template>
  <div class="card">
    <div class="card-header">
      <div :class="`card-title ${cusClass}`">{{title}}</div>
      <slot name="title-right"></slot>
    </div>
    <slot name="card-content"></slot>
    <div class="card-transparent"></div>
  </div>
</template>
<script>
export default {
  props: ["title", "cus-class"],
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";

.card {
  padding: 1px;
  border: none;
  background-color: transparent;
  box-sizing: border-box;
  /* 这里需要设置两个背景，第一个背景是内容区域的背景，另一个是实现渐变边框的背景 */
  background-image: linear-gradient(
      (90deg, #0c0e11 0%, #0c0e11 48.86%, #0c0e11 100%)
    ),
    linear-gradient((90deg, #8d3588 0%, #d1383b 48.86%, #e49640 100%));
  border-radius: vw(16);
  /* 背景裁切的时候，第一个背景需要从内容区域开始裁切，因此设置为content-box；
        第二个背景需要作为渐变边框，因此需要从边框处开始裁切 */
  background-clip: content-box, padding-box;
  backdrop-filter: blur(#{vw(32)});
  z-index: 0;
  .card-header {
    padding: vw(16) vw(16) vw(15) vw(16);
    font-family: "PingFang SC";
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .card-title {
      font-weight: 500;
      font-size: vw(14);
      line-height: 110%;
    }
    .bold {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .card-transparent {
    border-radius: vw(16);
    position: absolute;
    width: calc(100% - #{vw(2)});
    height: calc(100% - #{vw(2)});
    top: 0;
    background: rgba(0, 0, 0, 0.04);
    backdrop-filter: blur(32px);
    z-index: -1;
  }
}
</style>