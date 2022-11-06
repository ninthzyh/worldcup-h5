<template>
  <img :src="`${img?'':defaultFlag}`" alt="" class="national-flag" :style="{
        width: computedWidth,
        height: computedHeight,
        border: computedBorder,
        margin: computedMargin,
        padding:computedPadding,
  }" />
</template>
<script>
import defaultFlag from "../assets/images/default-flag.svg";

export default {
  props: ["width", "height", "border", "margin", "img", "padding"],
  data() {
    return {
      defaultFlag,
    };
  },
  computed: {
    computedWidth() {
      return this.width || "100%";
    },
    computedHeight() {
      return this.height || "100%";
    },
    computedBorder() {
      return this.border || "0 solid #ffffff";
    },
    computedMargin() {
      return this.margin || "0 0 0 0";
    },
    computedPadding() {
      return this.padding || "0 0 0 0";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.national-flag {
  //background-blend-mode: lighten;
  border-radius: 50%;
  // background-color: #ffffff;
  background-color: transparent;
}
</style>
