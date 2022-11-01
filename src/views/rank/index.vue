<template>
  <div class="rank">
    <div class="radio">
      <span :class="`${type==='team'?'is-select':''}`" @click="()=>onRadio('team')">球队</span>
      <span :class="`${type==='player'?'is-select':''}`" @click="()=>onRadio('player')">球员</span>
    </div>
    <div class="rank-content">
      <template v-if="type==='team'">
        <rank-card :title="goal.title" :pageSize="3" :top="true" :config="teamConfig" :cardData="teamData.goalList">
          <template v-slot:subtitle>
            <div class="arrow-right" @click="()=>jumpTo(goal)"></div>
          </template>
        </rank-card>
        <rank-card :title="assist.title" :pageSize="3" :top="true" :config="teamConfig" :cardData="teamData.assistList">
          <template v-slot:subtitle>
            <div class="arrow-right" @click="()=>jumpTo(assist)"></div>
          </template>
        </rank-card>
        <rank-card :title="possession.title" :pageSize="3" :top="true" :config="teamConfig"
          :cardData="teamData.possessionList">
          <template v-slot:subtitle>
            <div class="arrow-right" @click="()=>jumpTo(possession)"></div>
          </template>
        </rank-card>
      </template>
      <template v-else>
        <rank-card :title="goal.title" :pageSize="3" :top="true" :config="playerConfig" :cardData="playerData.goalList">
          <template v-slot:subtitle>
            <div class="arrow-right" @click="()=>jumpTo(goal)"></div>
          </template>
        </rank-card>
        <rank-card :title="assist.title" :pageSize="3" :top="true" :config="playerConfig" :cardData="playerData.assistList">
          <template v-slot:subtitle>
            <div class="arrow-right" @click="()=>jumpTo(assist)"></div>
          </template>
        </rank-card>
        <rank-card :title="goalAndAssist.title" :pageSize="3" :top="true" :config="playerConfig" :cardData="playerData.goalAndAssistList">
          <template v-slot:subtitle>
            <div class="arrow-right" @click="()=>jumpTo(goalAndAssist)"></div>
          </template>
        </rank-card>
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
      type: "team", //球队team|球员player
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
        name: "teamName",
        flag: "teamFlag",
        score: "statValue",
      },
      playerConfig: {
        name: "playerName",
        flag: "playerFlag",
        score: "statValue",
        position: "position",
      },
      goal: {
        key: "goalList",
        title: "进球榜",
        subtitle: "进球",
      },
      assist: {
        key: "assistList",
        title: "助攻榜",
        subtitle: "进球",
      },
      possession: {
        key: "possessionList",
        title: "平均控球率",
        subtitle: "进球",
      },
      goalAndAssist: {
        key: "goalAndAssistList",
        title: "进球+助攻",
        subtitle: "进球",
      },
    };
  },
  methods: {
    // 球队|球员radio点击事件
    onRadio(type) {
      this.type = type;
    },
    // > 跳转到卡片详情页
    jumpTo(item) {
      this.$router.push({
        name: "goalsList",
        params: { ...item, config: this.teamConfig },
      });
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
  height: calc(100vh - #{vw(156)});
  overflow: auto;
  .radio {
    font-size: vw(12);
    line-height: vw(32);
    color: rgba(255, 255, 255, 0.54);
    padding: vw(16) vw(24) 0 vw(24);
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
    padding: vw(16) vw(24);
    .arrow-right {
      height: vw(16);
      width: vw(16);
      background: url("~@/assets/images/arrow-right.svg") no-repeat
        center/contain;
    }
  }
}
</style>