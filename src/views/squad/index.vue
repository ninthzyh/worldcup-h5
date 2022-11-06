<template>
  <div class="squad-container">
    <div class="squad">
      <div class="title">
        <span class="text">预测首发阵容</span>
        <div class="tab">
          <SwitchTab :tabList="tabList" @tabChange="tabChange" />
        </div>
      </div>
      <span class="formation">
        {{formationUsed}}
      </span>
      <Squad
        :lineUpInfo="lineUpInfo"
        :formationUsed="formationUsed"
      ></Squad>
    </div>
  </div>
</template>

<script>
import Squad from "./squad";
import SwitchTab from "../../components/SwitchTab";
export default {
  name: "lineup",
  components: {
    Squad,
    SwitchTab
  },
  data() {
    return {
      resData: {},
      matchInfo: {},
      selectedTab:0,
    };
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
    },
    lineUpInfo(){
      console.log(this.resData.lineupMap && this.resData.lineupMap.home)
      return (this.resData.lineupMap ? this.resData.lineupMap[this.selectedTab === 0 ? 'home' : 'away'] : {});
    },
    formationUsed(){
      return this.lineUpInfo.formationUsed ? this.lineUpInfo.formationUsed.split('').join('-') : ''
    },
    teamInfors(){
      return this.resData
    }
  },
  mounted() {
    new Promise((resolve)=>(resolve(require('./data.json')))).then((res)=>{
      this.resData = res.data;
      this.matchInfo = res.data.matchInfo
    })
  },
  methods: {
    tabChange(index){
      this.selectedTab = index;
    }
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

  .formation{
    display: inline-block;
    height: vw(20);
    line-height: vw(20);
    padding: 0 vw(8);
    text-align: center;
    font-size: vw(12);
    border-radius: vw(10);
    color: rgba(255, 255, 255, 0.54);
    background: rgba(255, 255, 255, 0.12);
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
