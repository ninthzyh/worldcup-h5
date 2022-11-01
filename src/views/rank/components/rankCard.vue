<template>
  <div class="rank-card">
    <div class="rank-title">
      {{title}}
      <div class="arrow-right" @click="jumpTo"></div>
    </div>
    <div class="rank-content">
      <div class="rank-content-item">
        <div class="item-left">
          <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" :border="`${$vw(1)} solid #fff`" />
          <div class="text">
            法国
            <div v-if="subTitle" class="subtitle">前锋</div>
          </div>
        </div>
        <div class="score first">6</div>
        <!-- <div class="score">6</div> -->
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
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: "",
    },
  },
  methods: {
    // > 跳转到卡片详情页
    jumpTo() {
      if (this.url) {
        this.$router.push({
            name:'goalsList',
            params:{
                title:this.title
            }
        });
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