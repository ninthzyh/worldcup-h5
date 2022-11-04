<template>
  <div class="forecast">
    <Ai></Ai>
  </div>
</template>
<script>
import Ai from './ai';
export default {
  components:{Ai,}
}
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.forecast {
  height: 100%;
}
</style>