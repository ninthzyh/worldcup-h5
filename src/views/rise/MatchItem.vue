<template>
  <div
    class="match-item"
    :class="[rowNum ? `child_${rowNum}` : '', type == 'bottom' ? type : '']"
  >
    <div class="logo-container">
      <div class="logo">
        <NationalFlag />
      </div>
      <div class="logo">
        <NationalFlag />
      </div>
    </div>
    <div class="logo-container">
      <div>{{matchItem.homeCountryName}}</div>
      <div>{{matchItem.awayCountryName}}</div>
    </div>
    <div class="score">
      <span style="text-align: right">{{matchItem.homeGoals}}</span>
      <span class="score-">-</span>
      <span>{{matchItem.awayGoals}}</span>
    </div>
  </div>
</template>

<script>
import NationalFlag from "../../components/NationalFlag";
export default {
  name: "matchItem",
  components: {NationalFlag},
  props:{
    rowNum: {
      type: Number,
      default: 2,
    },
    type: {
      type: String,
      default: "top",
    },
    matchItem: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  mounted() {
    console.log(this.matchItem)
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/vw";
.match-item {
  width: vw(80);
  height: vw(88);
  background: rgba(255, 255, 255, 0.06);
  border-radius: vw(4);
  padding-top: vw(8);
  .logo-container{
    display: flex;
    justify-content: space-around;
    font-weight: 500;
    font-size: vw(12);
    line-height: vw(24);
    >div{
      @extend .ellipsis;
      flex: 1;
      text-align: center;
    }
    .logo{
      display: inline-block;
      flex: 0 0 vw(24);
      height: vw(24);
      margin-bottom: vw(4);
    }
  }
  .score{
    height: vw(20);
    font-weight: 500;
    font-size: vw(12);
    line-height: vw(24);
    display: flex;
    justify-content: center;
    span{
      flex: 1;
    }
    .score-{
      flex: 0 0 vw(30);
      text-align: center;
    }
  }
}

</style>
