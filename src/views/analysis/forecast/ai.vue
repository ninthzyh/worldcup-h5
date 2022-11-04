<template>
  <div class="card">
    1
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/vw";

.card {
  background: rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(#{vw(32)});
  border-radius: vw(16);
  border: vw(1) solid;
  height: 100px;
  border-image: linear-gradient(90deg, #8d3588 0%, #d1383b 48.86%, #e49640 100%)
    1;
  clip-path: inset(0 round 10px);
}
</style>