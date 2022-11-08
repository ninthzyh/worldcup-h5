<template>
    <div class="rank">
        <div class="radio">
            <span :class="`${isSelect?'is-select':''}`" @click="onRadio">球队</span>
            <span :class="`${!isSelect?'is-select':''}`" @click="onRadio">球员</span>
        </div>
        <div class="rank-content">
            <template v-if="isSelect">
                <rank-card :config="teamConfig" :title="$lang.rank.teamAttack" :cardData="teamData" type="goalList" />
                <rank-card :config="teamConfig" :title="$lang.rank.teamAssists" :cardData="teamData" type="assistList" />
                <rank-card :config="teamConfig" :title="$lang.rank.averagePercentageOfPossession" :cardData="teamData" type="possessionList" />
            </template>
            <template v-else>
                <rank-card :config="playerConfig" :title="$lang.rank.playerAttack" :cardData="playerData" type="goalList" />
                <rank-card :config="playerConfig" :title="$lang.rank.playerAssists" :cardData="playerData" type="assistList" />
                <rank-card :config="playerConfig" :title="$lang.rank.attackAddAssists" :cardData="playerData" type="goalAndAssistList" />
            </template>
        </div>
    </div>
</template>
<script>
import RankCard from "./components/rankCard";
// import rankplayer from "./rankplayer.json";
// import rankteam from "./rankteam.json";
import { rankPlayer, rankTeam } from "@/api/rank.js";
export default {
    components: { RankCard },
    mounted() {
        this.getRankPlayer();
        this.getRankTeam();
    },
    data() {
        return {
            isSelect: true,
            // teamData: rankteam, //球队数据
            // playerData: rankplayer, //球员数据
            teamData: {}, //球队数据
            playerData: {}, //球员数据
            teamConfig: {
                type: "team",
                name: "teamName",
                flag: "teamFlag",
                score: "statValue",
            },
            playerConfig: {
                type: "player",
                name: "playerName",
                flag: "playerFlag",
                score: "statValue",
                position: "position",
            },
        };
    },
    methods: {
        // 球队|球员radio点击事件
        onRadio() {
            this.isSelect = !this.isSelect;
        },
        // 球员数据排行
        getRankPlayer() {
            rankPlayer().then((res) => {
                this.playerData = res;
            });
        },
        // 球队数据排行
        getRankTeam() {
            rankTeam().then((res) => {
                this.teamData = res;
            });
        },
    },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
@media screen and (max-device-width: 600px) {
  .rank {
    // font-family: "PingFang SC";
    font-style: normal;
    font-weight: 500;
    color: #ffffff;
    height: calc(100vh - #{vw(116)});
    background: url("~@/assets/images/bg.png") no-repeat center/contain;
    .radio {
      font-size: vw(12);
      line-height: vw(32);
      color: rgba(255, 255, 255, 0.54);
      padding: vw(24) vw(24) 0 vw(24);
      > span {
        padding: vw(8) vw(16);
      }
      .is-select {
        background: rgba(255, 255, 255, 0.12);
        border-radius: vw(36);
        color: #ffffff;
      }
    }
    .rank-content {
      padding: vw(24);
      overflow: auto;
      height: calc(100% - #{vw(104)});
    }
  }
}

@media screen and (min-device-width: 600px) {
  .rank {
    // font-family: "PingFang SC";
    font-style: normal;
    font-weight: 500;
    color: #ffffff;
    height: calc(100vh - #{vwPad(116)});
    background: url("~@/assets/images/bg.png") no-repeat center/contain;
    .radio {
      font-size: vwPad(12);
      line-height: vwPad(32);
      color: rgba(255, 255, 255, 0.54);
      padding: vwPad(24) vwPad(24) 0 vwPad(24);
      > span {
        padding: vwPad(8) vwPad(16);
      }
      .is-select {
        background: rgba(255, 255, 255, 0.12);
        border-radius: vwPad(36);
        color: #ffffff;
      }
    }
    .rank-content {
      padding: vwPad(24);
      overflow: auto;
      height: calc(100% - #{vwPad(104)});
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
}
</style>
