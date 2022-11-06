<template>
  <div>
    <win-rate></win-rate>
    <advertisement></advertisement>
  </div>
</template>
<script>
import Advertisement from "../components/advertisement";
import WinRate from "./winRate";
export default {
  components: { Advertisement, WinRate },
};
</script>