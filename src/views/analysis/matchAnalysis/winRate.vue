<template>
  <div class="match-card">
    <div class="match-card-title">{{$lang.matchAnalysis.liveWinProbability}}</div>
    <div class="match-card-content">
      <div class="home-win">
        <div class="bar"
          :style="`height:${cardList&&cardList.homeValue>(24*100/86)?`${$vw(86/100*cardList.homeValue)}`:`${$vw(24)}`}`">
          <div>
            <span>{{cardList&&cardList.homeValue}}</span>
            <span class="unit">%</span>
          </div>
        </div>
        <div class="label">{{$lang.matchAnalysis.home}}</div>
      </div>
      <div class="team-draw">
        <div class="bar"
          :style="`height:${cardList&&cardList.drawValue>(24*100/86)?`${$vw(86/100*cardList.drawValue)}`:`${$vw(24)}`}`">
          <div>
            <span>{{cardList&&cardList.drawValue}}</span>
            <span class="unit">%</span>
          </div>
        </div>
        <div class="label">{{$lang.matchAnalysis.draw}}</div>
      </div>
      <div class="away-win">
        <div class="bar"
          :style="`height:${cardList&&cardList.awayValue>(24*100/86)?`${$vw(86/100*cardList.awayValue)}`:`${$vw(24)}`}`">
          <div>
            <span>{{cardList&&cardList.awayValue}}</span>
            <span class="unit">%</span>
          </div>
        </div>
        <div class="label">{{$lang.matchAnalysis.away}}</div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: ["cardList"],
  watch: {
    cardList: {
      immediate: true,
      handler(newData) {
        this.cardList = newData;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";

.match-card {
  background: rgba(0, 0, 0, 0.04);
  border: vw(1) solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(vw(8));
  border-radius: vw(16);
  padding: vw(16);
  margin-bottom: vw(16);
  .match-card-title {
    font-weight: 600;
    font-size: vw(14);
    line-height: vw(16);
    padding-bottom: vw(16);
    margin-bottom: vw(24);
    border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
  }
  .match-card-content {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: vw(126);
    @mixin bar-common($background, $width, $color, $fSize) {
      text-align: center;
      width: $width;
      .bar {
        max-height: vw(86);
        min-height: vw(24);
        background: $background;
        color: $color;
        font-weight: 700;
        font-family: "Sahar";
        font-size: $fSize;
        > div {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .unit {
          font-size: vw(13);
        }
      }
      .label {
        font-weight: 500;
        font-size: vw(12);
        line-height: vw(24);
        padding: vw(8) 0 vw(8) 0;
      }
    }
    .team-draw {
      @include bar-common(#fff, vw(98), #000, vw(32));
      .unit {
          font-size: vw(20) !important;
          transform: scale(0.8);
          transform-origin: 0 150%;
        }
    }
    .home-win {
      @include bar-common(#7a293f, vw(72), #fff, vw(14));
    }
    .away-win {
      @include bar-common(#7996bc, vw(72), #fff, vw(14));
    }
  }
}
</style>