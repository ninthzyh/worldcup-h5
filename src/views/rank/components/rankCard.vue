<template>
  <div class="rank-card">
    <div class="rank-title">
      {{title}}
      <div class="arrow-right" @click="jumpTo"></div>
    </div>
    <div class="rank-content" ref="scroll">
      <div class="rank-content-item" v-for="(item,index) in list" :key="index">
        <div class="item-left">
          <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`"  
            :img="item[config.flag]" />
          <div class="text">
            {{item[config.name]}}
            <div class="describe">{{item[config.position]}}</div>
          </div>
        </div>
        <div :class="`${(index===0)?'first':''} score`">{{item[config.score]}}</div>
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
      type: Object,
      default: {},
    },
    // 卡片类型
    type: {
      type: String,
      default: "",
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
  data() {
    return {
      list: [],
      loading: false,
    };
  },
  methods: {
    getData() {
      // 取列表中前pageSize条
      this.list = [...this.cardData[this.type]].splice(0, 3);
    },
    // > 跳转到卡片详情页
    jumpTo() {
      this.$router.push({
        name: "goalsList",
        params: { type: this.type, title: this.title, config: this.config },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.rank-card {
  background: rgba(0, 0, 0, 0.04);
  border: vw(1) solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(#{vw(8)});
  border-radius: vw(16);
  padding: vw(16);
  font-family: "PingFang SC";
  font-style: normal;
  color: #ffffff;
  .rank-title {
    font-weight: 600;
    font-size: vw(14);
    line-height: vw(16);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: vw(16);
    .arrow-right {
      height: vw(16);
      width: vw(16);
      background: url("~@/assets/images/arrow-right-small.svg") no-repeat
        center/contain;
    }
  }
  .rank-content {
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
          line-height: vw(16);
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
        font-family: 'Inter';
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