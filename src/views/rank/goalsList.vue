<template>
  <div class="goals-list">
    <div class="menu-container">
      <div class="menu-header">
        <div class="back" @click="onBack"></div>
        <div class="world-cup-logo"></div>
      </div>
    </div>
    <div class="list-content">
      <rank-card title="进球榜" :cardData="teamData.goalList" type="team" />

    </div>
  </div>
</template>
<script>
import RankCard from "./components/rankCard";
export default {
  components: { RankCard },
  mounted() {
    console.log(this.$route);
  },
  data(){
    return{
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
    }
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.goals-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  .menu-container {
    height: vw(136);
    background: linear-gradient(180deg, #96263a 12.77%, #0c0e11 88.3%);
    .menu-header {
      display: flex;
      align-items: center;
      padding: vw(55) vw(34) vw(20) vw(10);
      .back {
        height: vw(24);
        width: vw(24);
        background: url("~@/assets/images/back.svg") no-repeat center/contain;
      }
      .world-cup-logo {
        width: vw(112);
        height: vw(33);
        background: url("~@/assets/images/world-cup-logo.svg") no-repeat
          center/contain;
        margin: 0 auto;
      }
    }
  }
  .list-content {
    flex: 1;
    padding: vw(24) vw(22) vw(80) vw(26);
    border-top: vw(1) solid rgba(255, 255, 255, 0.12);
  }
}
</style>
