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
import SwitchTab from "../../../../components/SwitchTab";
export default {
  name: "lineup",
  components: {
    Squad,
    SwitchTab
  },
  props: {
    lineupMap:{
      type: Object,
      default:()=>({})
    },
    matchInfo:{
      type: Object,
      default:()=>({})
    },
  },
  data() {
    return {
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
      return (this.lineupMap ? this.lineupMap[this.selectedTab === 0 ? 'home' : 'away'] : {});
    },
    formationUsed(){
      if(this.lineUpInfo.formationUsed){
        if(this.lineUpInfo.formationUsed.indexOf('d') !== -1){
          return '3-4-3d';
        }
        return this.lineUpInfo.formationUsed.split('').join('-')
      }
      return ''
    },
  },
  methods: {
    tabChange(index){
      this.selectedTab = index;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/vw";
@media screen and (max-device-width: 600px) {
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
}

@media screen and (min-device-width: 600px) {
  .squad-container{
    padding-top: vwPad(24);
  }
  .squad {
    width: vwPad(1024);
    margin: auto;
    background: rgba(0, 0, 0, 0.04);
    border: vwPad(1) solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(vwPad(8));
    border-radius: vwPad(16);
    padding: vwPad(16) vwPad(10);
    box-sizing: border-box;
    .title{
      font-weight: 600;
      font-size: vwPad(14);
      margin-bottom: vwPad(16);
      border-bottom: vwPad(1) solid rgba(255, 255, 255, 0.12);
      .tab{
        margin-bottom: vwPad(20);
        width: vwPad(180);
        display: inline-block;
      }
    }

    .formation{
      display: inline-block;
      height: vwPad(20);
      line-height: vwPad(20);
      padding: 0 vwPad(8);
      text-align: center;
      font-size: vwPad(12);
      border-radius: vwPad(10);
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
        font-size: vwPad(10);
        padding-right: vwPad(2);
      }
    }
    .lineup-container {
      position: relative;
      width: vwPad(355);
      padding: vwPad(10) vwPad(5);
      margin-top: vwPad(-30);
      box-sizing: border-box;
    }
  }
  .container {
    margin-bottom: vwPad(20);
  }
}

</style>
