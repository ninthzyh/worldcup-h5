<template>
  <div>
    <div class="menu-container">
      <div class="container">
        <div :class="`menu-item ${index === selectIndex ? 'menu-item-selected' : ''}`" v-for="(item,index) in menuList"
          :key="index" @click="onClick(index,item)">
          <div class="menu-title">{{item.text}}</div>
          <div :class="`menu-underline ${index === selectIndex ? 'menu-underline-selected' : ''}`"></div>
        </div>
      </div>
      <div class="bg-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.selectIndex = this.menuList.findIndex((item) => {
      return item.route === this.$route.fullPath;
    });
  },
  data() {
    return {
      menuList: [
        {
          text: "比赛数据",
          route: "/analysis/match-data",
        },
        {
          text: "赛事分析",
          route: "/analysis/match-analysis",
        },
        {
          text: "智能预测",
          route: "/analysis/forecast",
        },
      ],
      selectIndex: 0,
    };
  },
  methods: {
    onClick(index, menu) {
      this.selectIndex = index;
      if (menu.route) {
        this.$router.push({ path: menu.route });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/vw";
@media screen and (max-device-width: 600px) {
  .menu-container {
    padding-top: vw(13);
    .container {
      display: flex;
      padding: 0 vw(24);
      .menu-item {
        font-size: vw(14);
        line-height: vw(15);
        font-weight: 500;
        color: rgba(255, 255, 255, 0.7);
        flex-direction: column;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &-selected {
          color: #fff;
        }
        &:not(:last-child) {
          margin-right: vw(24);
        }
        .menu-underline {
          display: inline-block;
          width: vw(58);
          height: vw(2);
          border-radius: vw(2);
          margin-top: vw(9);
          &-selected {
            background: #ffffff;
            transform: matrix(1, 0, 0, -1, 0, 0);
          }
        }
      }
    }
    .bg-line {
      width: 100%;
      height: vw(1);
      background: rgba(255, 255, 255, 0.12);
      // margin-top: vw(-6);
    }
  }
}
@media screen and (min-device-width: 600px) {
  .menu-container {
    padding-top: vwPad(13);
    .container {
      display: flex;
      padding: 0 vwPad(24);
      .menu-item {
        font-size: vwPad(14);
        line-height: vwPad(15);
        font-weight: 500;
        color: rgba(255, 255, 255, 0.7);
        flex-direction: column;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &-selected {
          color: #fff;
        }
        &:not(:last-child) {
          margin-right: vwPad(24);
        }
        .menu-underline {
          display: inline-block;
          width: vwPad(58);
          height: vwPad(2);
          border-radius: vwPad(2);
          margin-top: vwPad(9);
          &-selected {
            background: #ffffff;
            transform: matrix(1, 0, 0, -1, 0, 0);
          }
        }
      }
    }
    .bg-line {
      width: 100%;
      height: vwPad(1);
      background: rgba(255, 255, 255, 0.12);
      // margin-top: vw(-6);
    }
  }
}
</style>
