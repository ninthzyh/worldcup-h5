<template>
<div class="match-line" :style="`width: ${$vw(width)}`">
  <div v-if="position === 'top'" class="top-two"></div>
  <div  class="one"></div>
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
@media screen and (max-device-width: 600px) {
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
}
@media screen and (min-device-width: 600px) {
  .match-line{
    width: vwPad(88);
    .top-two{
      height: vwPad(16);
      border: vwPad(2) solid rgba(255, 255, 255, 0.12);
      border-top: none;
    }
    .one{
      width: 50%;
      height: vwPad(16);
      border-right: vwPad(2) solid rgba(255, 255, 255, 0.12);
    }
    .bottom-two{
      height: vwPad(16);
      border: vwPad(2) solid rgba(255, 255, 255, 0.12);
      border-bottom: none;
    }
  }
}

</style>
