<template>
  <div class="home">
    <div class="home-logo">
      <div class="logo"></div>
    </div>
    <div class="content">
      <div class="home-screen">
        <div class="screen-label">
          <div class="screen-live">
            <div :class="`${true?'live-icon':'hot-icon'}`"></div>
            <div class="today">今日 {{bannerData.matchDatetime}}</div>
          </div>
          <div class="vs">
            <div>{{bannerData.homeName}}<span class="line">-</span></div>
            <div>{{bannerData.awayName}}</div>
          </div>
          <div class="flag">
            <national-flag :width="`${$vw(28)}`" :height="`${$vw(28)}`" :margin="`0 ${$vw(12)} 0 0`" :img="''" />
            <national-flag :width="`${$vw(28)}`" :height="`${$vw(28)}`" :img="bannerData.awayFlag" />
          </div>
          <div class="watching">立即观赛</div>
          <div class="des">
            <div class="des-item">
              <div class="position"></div>
              <div class="des-laguage">
                <div class="des-en">Al Thumama Stadium</div>
                <div class="des-cn">球场</div>
              </div>
            </div>

          </div>
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
      <div class="today-schedule">
        <div class="title">今日赛程<span>查看所有</span></div>
        <schedule-list :dataList="matchList" />
      </div>
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
    height: vw(56);
    background: #0c0e11;
    position: fixed;
    min-width: 100%;
    width: max-content;
    z-index: 9;
    .logo {
      position: absolute;
      margin-top: vw(16);
      width: 100%;
      height: vw(24);
      background: url("~@/assets/images/logo.svg") no-repeat center/contain;
    }
  }
  .content {
    margin-top: vw(56);
    .home-screen {
      width: 100%;
      height: vw(194);
      background: url("~@/assets/images/home-header.png") no-repeat
        center/contain;
      .screen-label {
        padding: vw(13) vw(16);
        font-family: "Inter";
        font-weight: 600;
        line-height: vw(24);
        .screen-live {
          display: flex;
          height: vw(12);
          margin-bottom: vw(12);
          .common-status {
            width: vw(23);
            height: vw(12);
            margin-right: vw(8);
          }
          .live-icon {
            @extend .common-status;
            background: url("~@/assets/images/live.svg") no-repeat
              center/contain;
          }
          .hot-icon {
            @extend .common-status;
            background: url("~@/assets/images/hot.svg") no-repeat center/contain;
          }
          .today {
            transform: scale(0.5);
            transform-origin: 0 0;
            font-size: vw(17);
            color: rgba(255, 255, 255, 0.7);
            font-family: "PingFang SC";
            font-weight: 600;
            line-height: vw(24);
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
          transform: scale(0.5);
          transform-origin: 0 0;
          width: 21%;
          text-align: center;
        }
        .des {
          display: flex;
          @mixin des-icon($url) {
            margin-right: vw(4);
            width: vw(12);
            height: vw(12);
            background: url($url) no-repeat center/contain;
          }
          .des-item {
            display: flex;
            .position {
              @include des-icon("~@/assets/images/position.svg");
            }
            .des-laguage {
              font-style: normal;
              font-size: vw(8);
              line-height: vw(10);
              .des-en {
                font-family: "Inter";
                font-weight: 500;
                color: rgba(255, 255, 255, 0.7);
                margin-bottom: vw(1);
                transform: scale(0.5);
          transform-origin: 0 0;
              }
              .des-cn {
                font-family: "PingFang SC";
                font-weight: 400;
                color: rgba(255, 255, 255, 0.32);
              }
            }
          }
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
          width: vw(70);
          height: vw(70);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .icon-wrap {
            background: #8d2537;
            border-radius: 2px;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            @mixin nav-item-icon($url) {
              height: vw(16);
              width: vw(16);
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
            line-height: vw(24);
          }
        }
      }
    }
    .today-schedule {
      padding: 0 vw(16);
    }
  }
}
</style>