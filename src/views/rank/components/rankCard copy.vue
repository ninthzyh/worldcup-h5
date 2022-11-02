<template>
  <div class="rank-card">
    <div class="rank-title">
      {{title}}
      <slot name="subtitle"></slot>
    </div>
    <div class="rank-content" ref="scroll">
      <div class="rank-content-item" v-for="(item,index) in list" :key="index">
        <div class="item-left">
          <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" :border="`${$vw(1)} solid #fff`"
            :img="item[config.flag]" />
          <div class="text">
            {{item[config.name]}}
            <div class="describe">{{item[config.position]}}</div>
          </div>
        </div>
        <div :class="`${(top&&index===0)?'first':''} score`">{{item[config.score]}}</div>
      </div>
    </div>
    <Loading v-if="loading" />
  </div>
</template>
<script>
import NationalFlag from "../../../components/NationalFlag";
import Loading from "../../../components/Loading";
export default {
  components: {
    NationalFlag,
    Loading,
  },
  props: {
    // 标题
    title: {
      type: String,
      default: "",
    },
    // 球员位置小标题
    describe: {
      type: Boolean,
      default: false,
    },
    // 卡片data
    cardData: {
      type: Array,
      default: [],
    },

    // top得分红点,不滚动加载
    top: {
      type: Boolean,
      default: false,
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 1,
    },
    config: {
      type: Object,
      default: {},
    },
  },
  watch: {
    cardData: {
      immediate: true,
      handler(newData, oldData) {
        this.getData();
      },
      deep: true,
    },
  },
  mounted() {
    this.getData();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  data() {
    return {
      pagination: {
        current: 1,
        total: 0,
      },
      list: [],
      loading: false,
    };
  },
  methods: {
    getData() {
      // 取列表中前pageSize条
      this.list = [...this.cardData].splice(0, this.pageSize);
      // top1得分红点，不滚动加载
      if (!this.top) {
        // 总条数
        this.pagination.total = this.cardData.length;
        window.addEventListener("scroll", this.handleScroll, true);
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
      if (
        Math.ceil(this.pagination.total / this.pageSize) >
        this.pagination.current
      ) {
        this.loading = true;
        // loading 0.5s
        let timer = setTimeout(() => {
          this.loading = false;
        }, 500);
        this.pagination.current++;
        // 列表数据=当前页数*每页多少个
        this.list = [...this.cardData].slice(
          0,
          this.pagination.current * this.pageSize
        );
      }
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
//   height: 0;
  .rank-title {
    font-weight: 600;
    font-size: vw(14);
    line-height: vw(24);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: vw(20);
  }
  .rank-content {
    // height: calc(100vh - #{vw(44)});
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
          .describe {
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