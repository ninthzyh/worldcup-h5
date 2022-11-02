<template>
  <div class="home">
    <div class="home-logo">
      <div class="logo"></div>
    </div>
    <div class="content">
      <div class="home-screen">
        <div class="screen-label">
          <div class="screen-live">
            <span class="live-icon">LIVE</span>
            <span class="today">今日 {{bannerData.matchDatetime}}</span>
          </div>
          <div class="vs">
            <div>{{bannerData.homeName}}<span class="line">-</span></div>
            <div>{{bannerData.awayName}}</div>
          </div>
          <div class="flag">
            <national-flag :width="`${$vw(28)}`" :height="`${$vw(28)}`" :margin="`0 ${$vw(12)} 0 0`" :img="''"/>
            <national-flag :width="`${$vw(28)}`" :height="`${$vw(28)}`" :img="bannerData.awayFlag" />
          </div>
          <div class="watching">立即观赛</div>
        </div>
      </div>
      <div class="nav-wrap">
        <div class="title">世界杯导航</div>
        <div class="nav">
          <div class="nav-item" v-for="(item,index) in navList" :key="index" @click="()=>onNavClick(item.url)">
            <div class="icon-wrap">
              <div :class="item.class"></div>
            </div>
            <div class="nav-item-label">{{item.label}}</div>
          </div>
        </div>
      </div>
      <!-- <div class="doing">
        <div class="title">进行中<span>查看所有</span></div>
        <div class="doing-card-wrap">
          <div :class="item.live?'live-bg':'wait-bg'" v-for="(item,index) in doingList" :key="index">
            <div class="status-wrap">
              <div :class="item.live?'is-live':'wait'">{{item.live?'LIVE':item.time}}</div>
              <div class="status-icon" v-if="item.live"></div>
            </div>
            <div class="team">
              <national-flag :width="`${$vw(40)}`" :height="`${$vw(40)}`"   />
              <national-flag :width="`${$vw(40)}`" :height="`${$vw(40)}`"   />
            </div>
            <div class="team-name">卡塔尔<span>0</span></div>
            <div class="team-name">卡塔尔<span>1</span></div>
          </div>
        </div>
      </div> -->
      <div class="title">今日赛程<span>查看所有</span></div>
      <schedule-list :dataList="matchList" />
    </div>
  </div>
</template>
<script>
import ScheduleList from "../../components/ScheduleList";
import NationalFlag from "../../components/NationalFlag";

// 编译后代码
export default {
  components: {
    ScheduleList,
    NationalFlag,
  },
  data() {
    return {
      navList: [
        {
          label: "赛程",
          class: "schedule",
          url: "/catalogue/schedule",
        },
        {
          label: "排名",
          class: "rank",
          url: "/catalogue/rank",
        },
        {
          label: "分组",
          class: "groups",
          url: "/catalogue/groups",
        },
        {
          label: "晋级",
          class: "rise",
          url: "/catalogue/rise",
        },
      ],
      matchList: [
        {
          matchId: "bzyh8uc9dcu6mnj4zpx9nh6hg",
          matchDate: "2022-11-21",
          matchDatetime: "13:00",
          homeId: "ck8m1cn23sukwsurgx5qakttk",
          homeCode: "ENG",
          homeName: "英格兰",
          homeShortName: "英格兰",
          homeOfficialName: null,
          homeFlag: null,
          awayId: "cubclbw5k5gdqdau95bnav0nn",
          awayCode: "IRN",
          awayName: "伊朗",
          awayShortName: "伊朗",
          awayOfficialName: null,
          awayFlag: null,
          stageId: "2awryriz2besyqksnv5o9db3e",
          stageName: "小组赛",
          seriesId: "2b1930z6tow4xzg7wtpoy47sa",
          seriesName: "B组",
          matchStatus: "Fixture",
          matchOutcome: null,
          homeScore: null,
          awayScore: null,
        },
        {
          matchId: "3f0123w3yjdwtargl0woxj5zo",
          matchDate: "2022-11-21",
          matchDatetime: "16:00",
          homeId: "2wk1549tkz80oet8226euj7jp",
          homeCode: "SEN",
          homeName: "塞内加尔",
          homeShortName: "塞内加尔",
          homeOfficialName: null,
          homeFlag: null,
          awayId: "657oha8nkne1ybba2bouzkbo7",
          awayCode: "NED",
          awayName: "荷兰",
          awayShortName: "荷兰",
          awayOfficialName: null,
          awayFlag: null,
          stageId: "2awryriz2besyqksnv5o9db3e",
          stageName: "小组赛",
          seriesId: "2b0dqo56ran2uw0m2lddm63qi",
          seriesName: "A组",
          matchStatus: "Fixture",
          matchOutcome: null,
          homeScore: null,
          awayScore: null,
        },
        {
          matchId: "cqjyb3x9pe0qo4c42e95hxgd0",
          matchDate: "2022-11-21",
          matchDatetime: "19:00",
          homeId: "9vh2u1p4ppm597tjfahst2m3n",
          homeCode: "USA",
          homeName: "美国",
          homeShortName: "United States",
          homeOfficialName: null,
          homeFlag: null,
          awayId: "eyhp0bgsz2deg91xaw4zotn5c",
          awayCode: "WAL",
          awayName: "威尔士",
          awayShortName: "威尔士",
          awayOfficialName: null,
          awayFlag: null,
          stageId: "2awryriz2besyqksnv5o9db3e",
          stageName: "小组赛",
          seriesId: "2b1930z6tow4xzg7wtpoy47sa",
          seriesName: "B组",
          matchStatus: "Fixture",
          matchOutcome: null,
          homeScore: null,
          awayScore: null,
        },
      ],
      bannerData: {
        matchId: "bzyh8uc9dcu6mnj4zpx9nh6hg",
        matchDate: "2022-11-21",
        matchDatetime: "13:00",
        homeId: "ck8m1cn23sukwsurgx5qakttk",
        homeCode: "ENG",
        homeName: "英格兰",
        homeShortName: "英格兰",
        homeOfficialName: null,
        homeFlag: null,
        awayId: "cubclbw5k5gdqdau95bnav0nn",
        awayCode: "IRN",
        awayName: "伊朗",
        awayShortName: "伊朗",
        awayOfficialName: null,
        awayFlag: null,
        stageId: "2awryriz2besyqksnv5o9db3e",
        stageName: "小组赛",
        seriesId: "2b1930z6tow4xzg7wtpoy47sa",
        seriesName: "B组",
        matchStatus: "Fixture",
        matchOutcome: null,
        homeScore: null,
        awayScore: null,
      },
      // doingList: [
      //   {
      //     live: true,
      //     teama: "卡塔尔",
      //     teamb: "卡塔尔",
      //     scorea: 0,
      //     scoreb: 1,
      //   },
      //   {
      //     live: false,
      //     time: "16:00",
      //     teama: "卡塔尔",
      //     teamb: "卡塔尔",
      //     scorea: 0,
      //     scoreb: 1,
      //   },
      //   {
      //     live: false,
      //     time: "16:00",
      //     teama: "卡塔尔",
      //     teamb: "卡塔尔",
      //     scorea: 0,
      //     scoreb: 1,
      //   },
      // ],
    };
  },
  methods: {
    onNavClick(url) {
      this.$router.push(url);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.home {
  color: #ffffff;
  font-family: "PingFang SC";
  font-size: vw(14);
  height: 100%;
  overflow: auto;
  .home-logo {
    height: vw(96);
    background: #0c0e11;
    position: fixed;
    min-width: 100%;
    width: max-content;
    z-index: 9;
    .logo {
      position: absolute;
      margin: vw(52) auto auto auto;
      width: 100%;
      height: vw(24);
      background: url("~@/assets/images/logo.svg") no-repeat center/contain;
    }
  }
  .content {
    margin-top: vw(96);
    .home-screen {
      width: 100%;
      height: vw(194);
      background: url("~@/assets/images/home-header.png") no-repeat
        center/contain;
      .screen-label {
        padding: vw(13) vw(16);
        font-family: "PingFang SC";
        font-weight: 600;
        line-height: vw(24);
        .screen-live {
          transform: scale(0.5);
          transform-origin: 0 0;
          .live-icon {
            background: #d81739;
            border-radius: vw(1);
            font-family: "Inter";
            font-size: vw(8);
            color: #000000;
            padding: vw(4);
            margin-right: vw(8);
          }
          .today {
            font-size: vw(8);
            color: rgba(255, 255, 255, 0.7);
          }
        }
        .vs {
          font-family: "Inter";
          font-size: vw(24);
          line-height: vw(29);
          padding-bottom: vw(7);
          margin-top: vw(-10);
          .line {
            padding: vw(8);
          }
        }
        .flag {
          display: flex;
          padding-bottom: vw(12);
          > div:not(:last-child) {
            margin-right: vw(12);
          }
        }
        .watching {
          color: #000000;
          background: rgba(255, 255, 255, 0.87);
          border-radius: 2px;
          padding: vw(4) vw(8);
          transform: scale(0.6);
          transform-origin: 0 0;
          width: vw(57);
        }
      }
    }
    .title {
      font-weight: 500;
      line-height: vw(28);
      padding: vw(16) vw(18) vw(8) vw(18);
      > span {
        float: right;
        font-weight: 500;
        font-size: vw(12);
        line-height: vw(28);
        color: rgba(255, 255, 255, 0.54);
      }
    }
    .nav-wrap {
      .nav {
        padding: 0 vw(18);
        display: flex;
        justify-content: space-between;
        .nav-item {
          background: rgba(255, 255, 255, 0.04);
          border: vw(1) solid rgba(255, 255, 255, 0.12);
          border-radius: vw(8);
          padding: vw(16) vw(24) vw(8) vw(24);
          .icon-wrap {
            background: #8d2537;
            border-radius: 2px;
            padding: vw(4);
            @mixin nav-item-icon($url) {
              height: vw(16);
              background: url($url) no-repeat center/contain;
            }
            .schedule {
              @include nav-item-icon("~@/assets/images/schedule.svg");
            }
            .rank {
              @include nav-item-icon("~@/assets/images/rank.svg");
            }
            .groups {
              @include nav-item-icon("~@/assets/images/groups.svg");
            }
            .rise {
              @include nav-item-icon("~@/assets/images/rise.svg");
            }
          }
          .nav-item-label {
            font-weight: 400;
            line-height: vw(28);
          }
        }
      }
    }
    // .doing {
    //   .doing-card-wrap {
    //     overflow-x: auto;
    //     white-space: nowrap;
    //     padding-left: vw(18);
    //     .live-bg {
    //       background: #872133;
    //       @extend .doing-card;
    //     }
    //     .wait-bg {
    //       background: rgba(255, 255, 255, 0.04);
    //       border: 1px solid rgba(255, 255, 255, 0.12);
    //       backdrop-filter: blur(8px);
    //       @extend .doing-card;
    //     }
    //     .doing-card {
    //       border-radius: 8px;
    //       width: vw(103);
    //       padding: vw(12) vw(15) vw(17) vw(16);
    //       display: inline-block;
    //       margin-right: vw(8);
    //       .status-wrap {
    //         display: flex;
    //         justify-content: space-between;
    //         align-items: center;
    //         padding-bottom: vw(16);
    //         .status {
    //           font-family: "Sahar";
    //           font-style: normal;
    //           font-weight: 700;
    //           font-size: vw(12);
    //           padding: vw(3) vw(10);
    //         }
    //         .is-live {
    //           background: #ffffff;
    //           border-radius: vw(25);
    //           color: #872133;
    //           @extend .status;
    //         }
    //         .wait {
    //           @extend .status;
    //         }
    //         .status-icon {
    //           width: vw(6);
    //           height: vw(6);
    //           background: #42c0af;
    //           border-radius: 50%;
    //         }
    //       }
    //       .team {
    //         display: flex;
    //         justify-content: space-between;
    //         padding-bottom: vw(16);
    //       }
    //       .team-name {
    //         line-height: vw(28);
    //         font-weight: 600;
    //         > span {
    //           float: right;
    //           font-family: "Sahar";
    //           font-weight: 700;
    //         }
    //       }
    //       .team-name:not(:last-child) {
    //         margin-bottom: vw(8);
    //       }
    //     }
    //   }
    // }
  }
}
</style>