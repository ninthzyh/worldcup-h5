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
            <div><span>{{bannerData.homeName}}</span><span class="line">-</span></div>
            <div>{{bannerData.awayName}}</div>
          </div>
          <div class="flag">
            <national-flag :width="`${$vw(28)}`" :height="`${$vw(28)}`" :margin="`0 ${$vw(12)} 0 0`" :img="''" />
            <national-flag :width="`${$vw(28)}`" :height="`${$vw(28)}`" :img="bannerData.awayFlag" />
          </div>
          <div class="watching"></div>
          <div class="des">
            <div class="des-item">
              <div class="position"></div>
              <div class="des-laguage">
                <div class="des-en">Al Thumama Stadium</div>
                <div class="des-cn">球场</div>
              </div>
            </div>
            <div class="des-item">
              <div class="people"></div>
              <div class="des-laguage">
                <div class="des-en">120,000</div>
                <div class="des-cn">容纳人数</div>
              </div>
            </div>
            <div class="des-item">
              <div class="lawn"></div>
              <div class="des-laguage">
                <div class="des-en">草地</div>
                <div class="des-cn">场地表面</div>
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
        <div class="title"><span>今日赛程</span><span class="check-all" @click="jumpTo">查看所有</span></div>
        <schedule-list :dataList="matchList" />
      </div>
    </div>
  </div>
</template>
<script>
import ScheduleList from "../../components/ScheduleList";
import NationalFlag from "../../components/NationalFlag";
import bannerData from './scheduleplaying.json';
import scheduleList from './schedulelist.json';

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
      matchList: scheduleList.matchList,
      bannerData: bannerData[0],
    };
  },
  methods: {
    onNavClick(url) {
      this.$router.push(url);
    },
    // 赛程查看全部
    jumpTo(){
      this.$router.push('/catalogue/schedule')
    }
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.home {
  color: #ffffff;
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
      background: url("~@/assets/images/home-header.svg") no-repeat
        center/contain;
      border-top: vw(1) solid rgba(255, 255, 255, 0.12);
      border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
      .screen-label {
        padding: vw(16);
        font-family: "Inter";
        font-weight: 600;
        line-height: vw(24);
        height: 100%;
        box-sizing: border-box;
        .screen-live {
          display: flex;
          height: vw(12);
          margin-bottom: vw(7);
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
            // font-family: "PingFang SC";
            font-weight: 600;
            line-height: vw(24);
          }
        }
        .vs {
          font-family: "Inter";
          font-size: vw(24);
          line-height: vw(29);
          padding-bottom: vw(7);
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
          width: vw(44);
          height: vw(16);
          background: url("~@/assets/images/watching.svg") no-repeat
            center/contain;
          margin-bottom: vw(1);
        }
        .des {
          display: flex;
          justify-content: end;
          transform: scale(0.65306);
          transform-origin: 100% 50%;
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
            .people {
              @include des-icon("~@/assets/images/people.svg");
            }
            .lawn {
              @include des-icon("~@/assets/images/lawn.svg");
            }
            .des-laguage {
              font-style: normal;
              font-size: vw(8);
              .des-en {
                line-height: vw(10);
                font-family: "Inter";
                font-weight: 500;
                color: rgba(255, 255, 255, 0.7);
                margin-bottom: vw(4);
              }
              .des-cn {
                line-height: vw(10);
                // font-family: "PingFang SC";
                font-weight: 400;
                color: rgba(255, 255, 255, 0.32);
              }
            }
            &:not(:last-child) {
              margin-right: vw(16);
            }
          }
        }
      }
    }
    .title {
      font-weight: 500;
      line-height: vw(28);
      padding: vw(16) vw(18) vw(8) vw(18);
      .check-all {
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
            border-radius: vw(2);
            width: vw(24);
            height: vw(24);
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