<template>
  <div class="rank">
    <div class="radio">
      <span :class="`${isSelect?'is-select':''}`" @click="onRadio">球队</span>
      <span :class="`${!isSelect?'is-select':''}`" @click="onRadio">球员</span>
    </div>
    <div class="rank-content">
      <template v-if="isSelect">
        <rank-card :config="teamConfig" title="进球榜" :cardData="teamData" type="goalList" />
        <rank-card :config="teamConfig" title="助攻榜" :cardData="teamData" type="assistList" />
        <rank-card :config="teamConfig" title="平均控球率" :cardData="teamData" type="possessionList" />
      </template>
      <template v-else>
        <rank-card :config="playerConfig" title="进球榜" :cardData="playerData" type="goalList" />
        <rank-card :config="playerConfig" title="助攻榜" :cardData="playerData" type="assistList" />
        <rank-card :config="playerConfig" title="进球+助攻" :cardData="playerData" type="goalAndAssistList" />
      </template>
    </div>
  </div>
</template>
<script>
import RankCard from "./components/rankCard";
export default {
  components: { RankCard },
  data() {
    return {
      isSelect: true,
      teamData: {
        goalList: [
          {
            teamId: "4pz87gsel7183b7kcadw1dwzv",
            teamName: "法国",
            teamFlag: null,
            statValue: 14,
            statValueStr: "14",
          },
          {
            teamId: "4njsfszcgd9m765d6suktsz2a",
            teamName: "克罗地亚",
            teamFlag: null,
            statValue: 14,
            statValueStr: "14",
          },
          {
            teamId: "ck8m1cn23sukwsurgx5qakttk",
            teamName: "英格兰",
            teamFlag: null,
            statValue: 12,
            statValueStr: "12",
          },
        ],
        assistList: [
          {
            teamId: "f0frccyrlq2jjihdraoie2e2d",
            teamName: "俄罗斯",
            teamFlag: null,
            statValue: 8,
            statValueStr: "8",
          },
          {
            teamId: "4njsfszcgd9m765d6suktsz2a",
            teamName: "克罗地亚",
            teamFlag: null,
            statValue: 8,
            statValueStr: "8",
          },
          {
            teamId: "ck8m1cn23sukwsurgx5qakttk",
            teamName: "英格兰",
            teamFlag: null,
            statValue: 6,
            statValueStr: "6",
          },
        ],
        possessionList: [
          {
            teamId: "3l2t2db0c5ow2f7s7bhr6mij4",
            teamName: "德国",
            teamFlag: null,
            statValue: 71,
            statValueStr: "71%",
          },
          {
            teamId: "ak48fkypnql8y4n69cvcq5ghc",
            teamName: "阿根廷",
            teamFlag: null,
            statValue: 65,
            statValueStr: "65%",
          },
          {
            teamId: "9l4imoomrnyceg5u3kdxf5l5r",
            teamName: "沙特阿拉伯",
            teamFlag: null,
            statValue: 59,
            statValueStr: "59%",
          },
        ],
      }, //球队数据
      playerData: {
        goalList: [
          {
            playerId: "h17s3qts1dz1zqjw19jazzkl",
            playerName: "C·罗纳尔多",
            playerFlag: null,
            statValue: 54,
            position: "前锋",
          },
          {
            playerId: "8qgbxff7xlg0zjtyees7ljljp",
            playerName: "卢卡库",
            playerFlag: null,
            statValue: 4,
            position: "前锋",
          },
          {
            playerId: "7t9fp83ctywtk6mx94tipf7it",
            playerName: "切里舍夫",
            playerFlag: null,
            statValue: 4,
            position: "前锋",
          },
        ],
        assistList: [
          {
            playerId: "9w4e95xjhgvrlvq07rgij9cyd",
            playerName: "祖尤巴",
            playerFlag: null,
            statValue: 5,
            position: "前锋",
          },
          {
            playerId: "8qgbxff7xlg0zjtyees7ljljp",
            playerName: "卢卡库",
            playerFlag: null,
            statValue: 5,
            position: "前锋",
          },
          {
            playerId: "54h69199gtsavspwblux98dsl",
            playerName: "阿扎尔",
            playerFlag: null,
            statValue: 5,
            position: "前锋",
          },
        ],
        goalAndAssistList: [
          {
            playerId: "716n1970vi9rvw5b4w9qmjfth",
            playerName: "格列兹曼",
            playerFlag: null,
            statValue: 6,
            position: "前锋",
          },
          {
            playerId: "9w4e95xjhgvrlvq07rgij9cyd",
            playerName: "祖尤巴",
            playerFlag: null,
            statValue: 5,
            position: "前锋",
          },
          {
            playerId: "8qgbxff7xlg0zjtyees7ljljp",
            playerName: "卢卡库",
            playerFlag: null,
            statValue: 5,
            position: "前锋",
          },
        ],
      }, //球员数据
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
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.rank {
  font-family: "PingFang SC";
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
</style>