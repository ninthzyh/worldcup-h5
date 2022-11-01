<template>
  <div class="rank-card">
    <div class="rank-title">
      {{title}}
      <div class="arrow-right" @click="jumpTo"></div>
    </div>
    <div class="rank-content" ref="scroll">
      <div class="rank-content-item" v-for="(item,index) in cardData" :key="index">
        <div class="item-left">
          <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" :border="`${$vw(1)} solid #fff`"
            :img="item[config[type]['flag']]" />
          <div class="text">
            {{item[config[type]['name']]}}
            <div v-if="subTitle" class="subtitle">{{item[config[type]['position']]}}</div>
          </div>
        </div>
        <!-- top&&列表中第一个加得分红色背景 -->
        <div :class="`${(top&&index===0)?'first':''} score`">{{item[config[type]['score']]}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import NationalFlag from "../../../components/NationalFlag";
export default {
  components: {
    NationalFlag,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  props: {
    //  类型：球队team|球员player
    type: {
      type: String,
      default: "team",
    },
    // 标题
    title: {
      type: String,
      default: "",
    },
    // 球员位置小标题
    subTitle: {
      type: Boolean,
      default: false,
    },
    // 卡片跳转路由
    url: {
      type: String,
      default: "",
    },
    // 卡片data
    cardData: {
      type: Array,
      default: [],
    },
    // top得分红点
    top: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      config: {
        team: {
          name: "teamName",
          flag: "teamFlag",
          score: "statValue",
        },
        player: {
          name: "playerName",
          flag: "playerFlag",
          score: "statValue",
          position: "position",
        },
      }, //映射
    };
  },
  methods: {
    // > 跳转到卡片详情页
    jumpTo() {
      if (this.url) {
        this.$router.push({
          name: "goalsList",
          params: {
            title: this.title,
          },
        });
      }
    },
    //滚动事件
    handleScroll() {
      let scroll = this.$refs.scroll;
      // 获取元素高度
      let height = scroll.offsetHeight;
      // 滚动区域到头部的距离
      let top = scroll.scrollTop;
      // 滚动条高度
      let scrollHeight = scroll.scrollHeight;
      // 滚动区域到头部的距离 + 屏幕高度 = 可滚动的总高度 //触底时自动加载
      if (top + height >= scrollHeight) {
        this.loadMore();
      }
    },
    //滚动刷新
    loadMore() {
      //Math.ceil()向上取整，小数部分直接舍去，并向正数部分进1
      //   if (
      //     Math.ceil(this.page.total / this.page.pageSize) > this.page.currentPage
      //   ) {
      //     this.page.currentPage++;
      //     this.getList();
      //   }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.rank-card {
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: vw(16);
  padding: vw(16);
  font-family: "PingFang SC";
  font-style: normal;
  color: #ffffff;
  .rank-title {
    font-weight: 600;
    font-size: vw(14);
    line-height: vw(24);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: vw(20);
    .arrow-right {
      height: vw(16);
      width: vw(16);
      background: url("~@/assets/images/arrow-right.svg") no-repeat
        center/contain;
    }
  }
  .rank-content {
    height: 100px;
    overflow: auto;
    .rank-content-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: vw(8) 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      .item-left {
        display: flex;
        align-items: center;
        .text {
          padding-left: vw(16);
          font-weight: 500;
          font-size: vw(12);
          line-height: vw(24);
          .subtitle {
            font-weight: 400;
            transform: scale(0.8);
            transform-origin: 0 0;
            line-height: vw(10);
            color: rgba(255, 255, 255, 0.54);
          }
        }
      }
      .score {
        font-weight: 600;
        font-size: vw(14);
        line-height: vw(16);
        height: vw(24);
        width: vw(26);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .first {
        background: #812334;
        border-radius: 50%;
      }
    }
  }
  &:not(:last-child) {
    margin-bottom: vw(16);
  }
}
</style>