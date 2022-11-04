<template>
  <div class="squad-container">
    <div class="squad">
      <div class="title">
        <span class="text">预测首发阵容</span>
        <div class="tab">
          <SwitchTab :tabList="tabList" />
        </div>
      </div>
      <StartLineup
        :list="startLineup"
        :teamInfors="[teamInfors[0]]"
      ></StartLineup>
    </div>
  </div>
</template>

<script>
import StartLineup from "./squadComponent";
import SwitchTab from "../../components/SwitchTab";
export default {
  name: "lineup",
  components: {
    StartLineup,
    SwitchTab
  },
  props: {
    // resData: {
    //   type: Object,
    //   default: () => {
    //     return {};
    //   },
    // },
  },
  data() {
    return {
      resData: {},
      matchInfo: {},
      type: "startLineup",
      teamInfors: null,
      startLineup: null,
      visible: false,
      popPlayerId: null,
      matchId: null,
    };
  },
  watch: {
    resData: {
      handler(newVal) {
        let homeStartLineup = [],
          awayStartLineup = [];
        if (newVal.homeMatchLineup) {
          homeStartLineup = newVal.homeMatchLineup.startingLineUp
            ? newVal.homeMatchLineup.startingLineUp
            : [];
        }
        if (newVal.guestMatchLineup) {
          awayStartLineup = newVal.guestMatchLineup.startingLineUp
            ? newVal.guestMatchLineup.startingLineUp
            : [];
        }
        this.teamInfors = this.teamInforsFormatHandler(
          newVal.homeMatchLineup,
          newVal.guestMatchLineup
        ); //函数中处理了没有数据的情况
        this.startLineup = [homeStartLineup, awayStartLineup];
      },
      immediate: true,
    },
  },
  computed:{
    tabList(){
      return [{
        text: this.matchInfo.homeName || '',
        logo: this.matchInfo.homeFlag || ''
      },{
        text: this.matchInfo.awayName || '',
        logo: this.matchInfo.awayFlag || ''
      }]
    }
  },
  mounted() {
    new Promise((resolve)=>(resolve(require('./lineup.json')))).then((res)=>{
      console.log(res)
      this.resData = res.data
    })
    new Promise((resolve)=>(resolve(require('./data.json')))).then((res)=>{
      this.matchInfo = res.data.matchInfo
    })
  },
  methods: {
    teamInforsFormatHandler(home, away) {
      const arr = [];
      const teamInforKey_origin = [
        "teamName",
        "teamId",
        "teamLogo",
        "coachName",
        "formation",
      ];
      const teamInforKey_new = [
        "teamName",
        "teamId",
        "teamLogo",
        "coach",
        "lineup",
      ];
      const defaultObj = {
        teamName: "",
        teamId: null,
        teamLogo: "",
        coach: "",
        lineup: null,
      };
      if (home && home.teamId) {
        let obj = {};
        teamInforKey_origin.forEach((key, index) => {
          obj[teamInforKey_new[index]] = home[key] ? home[key] : null;
        });
        arr.push(obj);
      } else {
        arr.push(defaultObj);
      }
      if (away && away.teamId) {
        let obj = {};
        teamInforKey_origin.forEach((key, index) => {
          obj[teamInforKey_new[index]] = away[key] ? away[key] : null;
        });
        arr.push(obj);
      } else {
        arr.push(defaultObj);
      }
      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/vw";
.squad-container{
  padding-top: vw(24);
}
.squad {
  width: vw(310);
  margin: auto;
  background: rgba(0, 0, 0, 0.04);
  border: vw(1) solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(vw(8));
  border-radius: vw(16);
  padding: vw(16) vw(10);
  box-sizing: border-box;
  .title{
    font-weight: 600;
    font-size: vw(14);
    margin-bottom: vw(16);
    border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
    .tab{
      margin-bottom: vw(20);
      width: vw(180);
      display: inline-block;
    }
  }

  .tabItem {
    .tabItem_row {
      width: 100%;
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      align-items: baseline;
    }
    .tabRow_infor {
      font-size: vw(10);
      padding-right: vw(2);
    }
  }
  .lineup-container {
    position: relative;
    width: vw(355);
    padding: vw(10) vw(5);
    margin-top: vw(-30);
    box-sizing: border-box;
  }
}
.container {
  margin-bottom: vw(20);
}
</style>
