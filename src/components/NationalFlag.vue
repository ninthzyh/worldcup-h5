<template>
  <div class="national-flag" :style="{
        width: computedWidth,
        height: computedHeight,
        border: computedBorder
  }">
  </div>
</template>
<script>
export default {
  props: ['width','height','border'],
  computed:{
    computedWidth(){
      return this.width || '100%'
    },
    computedHeight(){
      return this.height || '100%'
    },
    computedBorder(){
      return this.border || '0 solid #ffffff'
    },
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.national-flag {
  background-blend-mode: lighten;
  border-radius: 50%;
  background-color: #ffffff;
  // border: vw(1) solid #ffffff;
}
</style>
