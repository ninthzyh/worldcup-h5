<template>
  <div class="national-flag" :style="{
        width,
        height,
        border
  }">
  </div>
</template>
<script>
export default {
  props: {
    width: {
      //默认宽
      type: Number,
      default: 0,
    },
    height: {
      //默认高
      type: Number,
      default: 0,
    },
    border: {
      //默认边框
      type: String,
      default: "0 solid #ffffff",
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.national-flag {
  background-blend-mode: lighten;
  border-radius: 50%;
  // border: vw(1) solid #ffffff;
}
</style>