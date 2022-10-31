<template>
  <div class="home">
    <div class="home-logo">
      <div class="logo"></div>
    </div>
    <div class="content">
      <div class="home-screen"></div>
      <div class="nav-wrap">
        <div class="title">世界杯导航</div>
        <div class="nav">
          <div class="nav-item" v-for="(item,index) in navList" :key="index">
            <div class="icon-wrap">
              <div :class="item.class"></div>
            </div>
            <div class="nav-item-label">{{item.label}}</div>
          </div>
        </div>
      </div>
      <div class="doing">
        <div class="title">进行中<span>查看所有</span></div>
        <div class="doing-card-wrap">
          <div :class="item.live?'live-bg':'wait-bg'" v-for="(item,index) in doingList" :key="index">
            <div class="status-wrap">
              <div :class="item.live?'is-live':'wait'">{{item.live?'LIVE':item.time}}</div>
              <div class="status-icon" v-if="item.live"></div>
            </div>
            <div class="team">
              <div class="team-item"></div>
              <div class="team-item"></div>
            </div>
            <div class="team-name">卡塔尔<span>0</span></div>
            <div class="team-name">卡塔尔<span>1</span></div>
          </div>
        </div>
      </div>
      <div class="title">今日赛程<span>查看所有</span></div>
      <schedule-list />
    </div>
  </div>
</template>
<script>
import ScheduleList from "../../components/scheduleList";
export default {
  components: {
    ScheduleList,
  },
  data() {
    return {
      navList: [
        {
          label: "赛程",
          class: "schedule",
        },
        {
          label: "排名",
          class: "rank",
        },
        {
          label: "分组",
          class: "groups",
        },
        {
          label: "晋级",
          class: "rise",
        },
      ],
      doingList: [
        {
          live: true,
          teama: "卡塔尔",
          teamb: "卡塔尔",
          scorea: 0,
          scoreb: 1,
        },
        {
          live: false,
          time: "16:00",
          teama: "卡塔尔",
          teamb: "卡塔尔",
          scorea: 0,
          scoreb: 1,
        },
        {
          live: false,
          time: "16:00",
          teama: "卡塔尔",
          teamb: "卡塔尔",
          scorea: 0,
          scoreb: 1,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.home {
  color: #ffffff;
  background: #0c0e11;
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
          backdrop-filter: blur(vw(8));
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
    .doing {
      .doing-card-wrap {
        overflow-x: auto;
        white-space: nowrap;
        padding-left: vw(18);
        .live-bg {
          background: #872133;
          @extend .doing-card;
        }
        .wait-bg {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          @extend .doing-card;
        }
        .doing-card {
          border-radius: 8px;
          width: vw(103);
          padding: vw(12) vw(15) vw(17) vw(16);
          display: inline-block;
          margin-right: vw(8);
          .status-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: vw(16);
            .status {
              font-family: "Sahar";
              font-style: normal;
              font-weight: 700;
              font-size: vw(12);
              padding: vw(3) vw(10);
            }
            .is-live {
              background: #ffffff;
              border-radius: vw(25);
              color: #872133;
              @extend .status;
            }
            .wait {
              @extend .status;
            }
            .status-icon {
              width: vw(6);
              height: vw(6);
              background: #42c0af;
              border-radius: 50%;
            }
          }
          .team {
            display: flex;
            justify-content: space-between;
            padding-bottom: vw(16);
            .team-item {
              width: vw(40);
              height: vw(40);
              background-blend-mode: lighten;
              border-radius: 50%;
              border: vw(1) solid #ffffff;
            }
          }
          .team-name {
            line-height: vw(28);
            font-weight: 600;
            > span {
              float: right;
              font-family: "Sahar";
              font-weight: 700;
            }
          }
          .team-name:not(:last-child) {
            margin-bottom: vw(8);
          }
        }
      }
    }
  }
}
</style>