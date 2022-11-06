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
      <div>{{matchItem.homeName || '--'}}</div>
      <div>{{matchItem.awayName || '--'}}</div>
    </div>
    <div class="score">
      <span style="text-align: right">{{matchItem.homeScore}}</span>
      <span class="score-">-</span>
      <span>{{matchItem.awayScore}}</span>
    </div>
    <div v-if="tips" class="tips" :style="`left:calc(50% - ${$vw(tipsWidth/2,true)});width:${$vw(tipsWidth,true)};`">
      {{tips}}
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
    tips: {
      type: String,
      default: "",
    },
    tipsWidth: {
      type: Number,
      default: 80,
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
@media screen and (max-device-width: 600px) {
  .match-item {
    width: vw(80);
    height: vw(88);
    background: rgba(255, 255, 255, 0.06);
    border-radius: vw(4);
    padding-top: vw(8);
    box-sizing: border-box;
    position: relative;
    .logo-container{
      display: flex;
      justify-content: space-around;
      font-weight: 500;
      font-size: vw(12);
      line-height: vw(24);
      >div{
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
    .tips{
      position: absolute;
      bottom: vw(-14);
      text-align: center;
      height: vw(20);
      line-height: vw(20);
      font-size: vw(12);
      background: #8E2538;
      border-radius: vw(20);
    }
  }
}

@media screen and (min-device-width: 600px) {
  .match-item {
    width: vwPad(160);
    height: vwPad(88);
    background: rgba(255, 255, 255, 0.06);
    border-radius: vwPad(4);
    padding-top: vwPad(8);
    box-sizing: border-box;
    position: relative;
    .logo-container{
      display: flex;
      justify-content: space-around;
      font-weight: 500;
      font-size: vwPad(12);
      line-height: vwPad(24);
      >div{
        flex: 1;
        text-align: center;
      }
      .logo{
        display: inline-block;
        flex: 0 0 vwPad(24);
        height: vwPad(24);
        margin-bottom: vwPad(4);
      }
    }
    .score{
      height: vwPad(20);
      font-weight: 500;
      font-size: vwPad(12);
      line-height: vwPad(24);
      display: flex;
      justify-content: center;
      span{
        flex: 1;
      }
      .score-{
        flex: 0 0 vwPad(30);
        text-align: center;
      }
    }
    .tips{
      position: absolute;
      bottom: vwPad(-14);
      text-align: center;
      height: vwPad(20);
      line-height: vwPad(20);
      font-size: vwPad(12);
      background: #8E2538;
      border-radius: vwPad(20);
    }
  }
}
</style>
