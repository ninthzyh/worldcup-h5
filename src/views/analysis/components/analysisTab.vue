<template>
  <div>
    <div class="menu-container">
      <div class="container">
        <div :class="`menu-item ${index === selectIndex ? 'menu-item-selected' : ''}`" v-for="(item,index) in menuList"
          :key="index" @click="jumpTo(index,item)">
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
  data() {
    return {
      menuList: [
        {
          text: "比赛数据",
        },
        {
          text: "赛事分析",
        },
        {
          text: "智能预测",
        },
      ],
      selectIndex: 0,
    };
  },
  methods: {
    jumpTo(index, menu) {
      this.selectIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/vw";
.menu-container {
  padding-top: vw(13);
  .container {
    display: flex;
    justify-content: center;
    font-family: "PingFang SC";
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
        width: vw(28);
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
</style>
