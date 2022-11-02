<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style  lang="scss">
@import "./assets/common.scss";
#app {
  height: 100vh;
  color: #ffffff;
  background: #0c0e11;
}
</style>
