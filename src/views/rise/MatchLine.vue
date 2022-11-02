<template>
<div class="match-line" :style="`width: ${$vw(width)}`">
  <div v-if="position === 'top'" class="top-two"></div>
  <div :style="position === 'middle' ? `height:${$vw(32)}` : ''" class="one"></div>
  <div v-if="position === 'bottom'" class="bottom-two"></div>
</div>
</template>

<script>
export default {
  name: "MatchLine",
  props: ['width', 'position']
}
</script>

<style lang="scss" scoped>
@import "../../assets/vw";
.match-line{
  width: vw(88);
  .top-two{
    height: vw(16);
    border: vw(2) solid rgba(255, 255, 255, 0.12);
    border-top: none;
  }
  .one{
    width: 50%;
    height: vw(16);
    border-right: vw(2) solid rgba(255, 255, 255, 0.12);
  }
  .bottom-two{
    height: vw(16);
    border: vw(2) solid rgba(255, 255, 255, 0.12);
    border-bottom: none;
  }
}
</style>
