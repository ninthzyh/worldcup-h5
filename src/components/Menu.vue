<template>
  <div>
    <div class="menu-container">
      <div class="menu-header">
        <div class="back" @click="onBack"></div>
        <div class="world-cup-logo"></div>
      </div>
      <div class="container">
        <div :class="`menu-item ${index === selectIndex ? 'menu-item-selected' : ''}`" v-for="(item,index) in menuList"
          :key="index" @click="jumpTo(index,item)">
          <div class="menu-title">{{item.text}}</div>
          <div :class="`menu-underline ${index === selectIndex ? 'menu-underline-selected' : ''}`"></div>
        </div>
      </div>
<!--      <div class="bg-line"></div>-->
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menuList: [
        {
          text: this.$lang.common.schedule,
          route: "/catalogue/schedule",
        },
        {
          text: this.$lang.common.rank,
          route: "/catalogue/rank",
        },
        {
          text: this.$lang.common.groups,
          route: "/catalogue/groups",
        },
        {
          text: this.$lang.common.rise,
          route: "/catalogue/rise",
        },
      ],
      selectIndex: 0,
    };
  },
  mounted() {
    this.selectIndex = this.menuList.findIndex((item) => {
      return item.route === this.$route.fullPath;
    });
  },
  methods: {
    onBack() {
        this.$router.push('/home')
    },
    jumpTo(index, menu) {
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
    height: vw(116);
    background: linear-gradient(180deg, #96263a 12.77%, #0c0e11 88.3%);
    .menu-header {
      display: flex;
      align-items: center;
      padding: vw(23) vw(34) vw(32) vw(10);
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
    .container {
      display: flex;
      justify-content: center;
      // font-family: "PingFang SC";
      .menu-item {
        font-size: vw(14);
        line-height: vw(24);
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
          width: vw(28);
          height: vw(2);
          border-radius: vw(2);
          margin: vw(5) ;
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
      margin-top: vw(-6);
    }
  }
}
@media screen and (min-device-width: 600px) {
  .menu-container {
    height: vwPad(80);
    background: #000000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 vwPad(80);
    .menu-header {
      display: flex;
      align-items: center;
      padding: vwPad(23) vwPad(34) vwPad(32) vwPad(10);
      .back {
        height: vwPad(24);
        width: vwPad(24);
        margin-right: vwPad(24);
        background: url("~@/assets/images/back.svg") no-repeat center/contain;
      }
      .world-cup-logo {
        width: vwPad(90);
        height: vwPad(33);
        background-image: url("~@/assets/images/logo.svg");
        background-size: 100% 100%;
        margin: 0 auto;
      }
    }
    .container {
      display: flex;
      justify-content: center;
      // font-family: "PingFang SC";
      .menu-item {
        font-size: vwPad(14);
        height: vwPad(80);
        line-height: vwPad(78);
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
          width: vwPad(28);
          height: vwPad(2);
          border-radius: vwPad(2);
          //margin: vwPad(5) ;
          &-selected {
            background: #ffffff;
            transform: matrix(1, 0, 0, -1, 0, 0);
          }
        }
      }
    }
    .bg-line {
      display: none;
    }
  }
}
</style>
