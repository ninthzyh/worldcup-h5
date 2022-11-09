<template>
    <div class="overview-stat-list">
        <div class="team-name">
            <div>{{matchInfo&&matchInfo.homeName}}</div>
            <div>{{matchInfo&&matchInfo.awayName}}</div>
        </div>
        <div class="overview-stat" v-for="(item,index) in cardList" :key="index">
            <div :class="`${item.statType}`"></div>
            <div>{{item.homeValue}}</div>
            <div>{{item.awayValue}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["cardList", "matchInfo"],
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
@media screen and (max-device-width: 600px) {
  .overview-stat-list {
    margin-bottom: vw(16);
    padding: vw(16) vw(20);
    border-width: vw(1) 0;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.12);
    display: flex;
    align-items: flex-end;
    font-weight: 500;
    font-size: vw(12);
    .team-name {
      line-height: vw(23);
      flex: 0 0 vw(36);
      text-align: center;
      > div:not(:last-child) {
        margin-bottom: vw(2);
      }
    }
    .overview-stat {
      font-family: "SF Pro Text";
      line-height: vw(23);
      color: #f9fafa;
      > div {
        text-align: center;
        width: vw(48);
        margin: 0px -6px;
      }
      > div:not(:last-child) {
        margin-bottom: vw(2);
      }
      @mixin stat-icon($url) {
        width: 100%;
        margin: 0 auto;
        height: vw(13);
        margin-bottom: vw(8);
        background: url($url) no-repeat center/contain;
      }
      .cornerTaken {
        @include stat-icon("~@/assets/images/coner-kick.svg");
      }
      .totalYellowCard {
        @include stat-icon("~@/assets/images/yellow-card.svg");
      }
      .totalRedCard {
        @include stat-icon("~@/assets/images/red-2-card.svg");
      }
      .subsMade {
        @include stat-icon("~@/assets/images/replace.svg");
      }
      .ontargetScoringAtt {
        @include stat-icon("~@/assets/images/penalties.svg");
      }
      .goals {
        @include stat-icon("~@/assets/images/goal-2.svg");
      }
    }
  }
}
@media screen and (min-device-width: 600px) {
  .overview-stat-list {
    margin-bottom: vwPad(16);
    padding: vwPad(16) vwPad(20);
    border-top: vwPad(1) solid rgba(255, 255, 255, 0.12);
    border-bottom: vwPad(1) solid rgba(255, 255, 255, 0.12);
    display: flex;
    align-items: flex-end;
    font-weight: 500;
    font-size: vwPad(12);
    .team-name {
      line-height: vwPad(23);
      flex: 0 0 vwPad(36);
      text-align: center;
      > div:not(:last-child) {
        margin-bottom: vwPad(2);
      }
    }
    .overview-stat {
      line-height: vwPad(23);
      color: #f9fafa;
      > div {
        text-align: center;
        width: vwPad(48);
        margin: 0px -6px;
      }
      > div:not(:last-child) {
        margin-bottom: vwPad(2);
      }
      @mixin stat-icon($url) {
        width: 100%;
        margin: 0 auto vwPad(8) auto;
        height: vwPad(13);
        background: url($url) no-repeat center/contain;
      }
      .cornerTaken {
        @include stat-icon("~@/assets/images/coner-kick.svg");
      }
      .totalYellowCard {
        @include stat-icon("~@/assets/images/yellow-card.svg");
      }
      .totalRedCard {
        @include stat-icon("~@/assets/images/red-2-card.svg");
      }
      .subsMade {
        @include stat-icon("~@/assets/images/replace.svg");
      }
      .ontargetScoringAtt {
        @include stat-icon("~@/assets/images/penalties.svg");
      }
      .goals {
        @include stat-icon("~@/assets/images/goal-2.svg");
      }
    }
  }
}
</style>
