<template>
  <div class="goals-list">
    <div class="menu-container">
      <div class="menu-header">
        <div class="back" @click="onBack"></div>
        <div class="world-cup-logo"></div>
      </div>
    </div>
    <div class="list-content">
      <div class="rank-card">
        <div class="rank-title">
          {{$route.params.title}}
          <div class="subtitle">进球</div>
        </div>
        <div class="rank-content" ref="scroll">
          <div class="rank-content-item" v-for="(item,index) in list" :key="index">
            <div class="item-left">
              <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" :border="`${$vw(1)} solid #fff`"
                :img="item[queryParams.config.flag]" />
              <div class="text">
                {{item[queryParams.config.name]}}
                <div class="describe">{{item[queryParams.config.position]}}</div>
              </div>
            </div>
            <div class="score">{{item[queryParams.config.score]}}</div>
          </div>
        </div>
        <Loading v-if="loading" />
      </div>
    </div>
  </div>
</template>
<script>
import NationalFlag from "../../components/NationalFlag";
import Loading from "../../components/Loading";
export default {
  components: {
    NationalFlag,
    Loading,
  },
  mounted() {
    this.queryParams = this.$route.params;
    // 球员|球队页面没有参数，刷新页面跳转到上一级排名页面
    if (!Object.keys(this.queryParams).length) {
      this.$router.push("/catalogue/rank");
    } else {
      let res;
      if (this.queryParams.config.type === "team") {
        res = {
          goalList: [
            {
              teamId: "4pz87gsel7183b7kcadw1dwzv",
              teamName: "法国",
              teamFlag: null,
              statValue: 14,
              statValueStr: "14",
            },
            {
              teamId: "4njsfszcgd9m765d6suktsz2a",
              teamName: "克罗地亚",
              teamFlag: null,
              statValue: 14,
              statValueStr: "14",
            },
            {
              teamId: "ck8m1cn23sukwsurgx5qakttk",
              teamName: "英格兰",
              teamFlag: null,
              statValue: 12,
              statValueStr: "12",
            },
            {
              teamId: "4pz87gsel7183b7kcadw1dwzv",
              teamName: "法国",
              teamFlag: null,
              statValue: 14,
              statValueStr: "14",
            },
            {
              teamId: "4njsfszcgd9m765d6suktsz2a",
              teamName: "克罗地亚",
              teamFlag: null,
              statValue: 14,
              statValueStr: "14",
            },
            {
              teamId: "ck8m1cn23sukwsurgx5qakttk",
              teamName: "英格兰",
              teamFlag: null,
              statValue: 12,
              statValueStr: "12",
            },
            {
              teamId: "4pz87gsel7183b7kcadw1dwzv",
              teamName: "法国",
              teamFlag: null,
              statValue: 14,
              statValueStr: "14",
            },
            {
              teamId: "4njsfszcgd9m765d6suktsz2a",
              teamName: "克罗地亚",
              teamFlag: null,
              statValue: 14,
              statValueStr: "14",
            },
            {
              teamId: "ck8m1cn23sukwsurgx5qakttk",
              teamName: "英格兰",
              teamFlag: null,
              statValue: 12,
              statValueStr: "12",
            },
            {
              teamId: "4pz87gsel7183b7kcadw1dwzv",
              teamName: "法国",
              teamFlag: null,
              statValue: 14,
              statValueStr: "14",
            },
            {
              teamId: "4njsfszcgd9m765d6suktsz2a",
              teamName: "克罗地亚",
              teamFlag: null,
              statValue: 14,
              statValueStr: "14",
            },
            {
              teamId: "ck8m1cn23sukwsurgx5qakttk",
              teamName: "英格兰",
              teamFlag: null,
              statValue: 12,
              statValueStr: "12",
            },
          ],
          assistList: [
            {
              teamId: "f0frccyrlq2jjihdraoie2e2d",
              teamName: "俄罗斯",
              teamFlag: null,
              statValue: 8,
              statValueStr: "8",
            },
            {
              teamId: "4njsfszcgd9m765d6suktsz2a",
              teamName: "克罗地亚",
              teamFlag: null,
              statValue: 8,
              statValueStr: "8",
            },
            {
              teamId: "ck8m1cn23sukwsurgx5qakttk",
              teamName: "英格兰",
              teamFlag: null,
              statValue: 6,
              statValueStr: "6",
            },
          ],
          possessionList: [
            {
              teamId: "3l2t2db0c5ow2f7s7bhr6mij4",
              teamName: "德国",
              teamFlag: null,
              statValue: 71,
              statValueStr: "71%",
            },
            {
              teamId: "ak48fkypnql8y4n69cvcq5ghc",
              teamName: "阿根廷",
              teamFlag: null,
              statValue: 65,
              statValueStr: "65%",
            },
            {
              teamId: "9l4imoomrnyceg5u3kdxf5l5r",
              teamName: "沙特阿拉伯",
              teamFlag: null,
              statValue: 59,
              statValueStr: "59%",
            },
          ],
        };
      } else {
        res = {
          goalList: [
            {
              playerId: "h17s3qts1dz1zqjw19jazzkl",
              playerName: "C·罗纳尔多",
              playerFlag: null,
              statValue: 54,
              position: "前锋",
            },
            {
              playerId: "8qgbxff7xlg0zjtyees7ljljp",
              playerName: "卢卡库",
              playerFlag: null,
              statValue: 4,
              position: "前锋",
            },
            {
              playerId: "7t9fp83ctywtk6mx94tipf7it",
              playerName: "切里舍夫",
              playerFlag: null,
              statValue: 4,
              position: "前锋",
            },
          ],
          assistList: [
            {
              playerId: "9w4e95xjhgvrlvq07rgij9cyd",
              playerName: "祖尤巴",
              playerFlag: null,
              statValue: 5,
              position: "前锋",
            },
            {
              playerId: "8qgbxff7xlg0zjtyees7ljljp",
              playerName: "卢卡库",
              playerFlag: null,
              statValue: 5,
              position: "前锋",
            },
            {
              playerId: "54h69199gtsavspwblux98dsl",
              playerName: "阿扎尔",
              playerFlag: null,
              statValue: 5,
              position: "前锋",
            },
          ],
          goalAndAssistList: [
            {
              playerId: "716n1970vi9rvw5b4w9qmjfth",
              playerName: "格列兹曼",
              playerFlag: null,
              statValue: 6,
              position: "前锋",
            },
            {
              playerId: "9w4e95xjhgvrlvq07rgij9cyd",
              playerName: "祖尤巴",
              playerFlag: null,
              statValue: 5,
              position: "前锋",
            },
            {
              playerId: "8qgbxff7xlg0zjtyees7ljljp",
              playerName: "卢卡库",
              playerFlag: null,
              statValue: 5,
              position: "前锋",
            },
          ],
        };
      }
      this.allList = res[this.queryParams.type];
      this.getList();
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  data() {
    return {
      list: [],
      allList: [],
      queryParams: {},
      loading: false,
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0,
      },
    };
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    getList() {
      // 取列表中前pageSize条
      this.list = [...this.allList].splice(0, this.pagination.pageSize);
      // top1得分红点，不滚动加载
      if (!this.top) {
        // 总条数
        this.pagination.total = this.allList.length;
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
        Math.ceil(this.pagination.total / this.pagination.pageSize) >
        this.pagination.current
      ) {
        this.loading = true;
        // loading 0.5s
        let timer = setTimeout(() => {
          this.loading = false;
        }, 500);
        this.pagination.current++;
        // 列表数据=当前页数*每页多少个
        this.list = [...this.allList].slice(
          0,
          this.pagination.current * this.pagination.pageSize
        );
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.goals-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  .menu-container {
    height: vw(136);
    background: linear-gradient(180deg, #96263a 12.77%, #0c0e11 88.3%);
    .menu-header {
      display: flex;
      align-items: center;
      padding: vw(55) vw(34) vw(20) vw(10);
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
  }
  .list-content {
    flex: 1;
    padding: vw(24) vw(22) vw(50) vw(26);
    border-top: vw(1) solid rgba(255, 255, 255, 0.12);
    .rank-card {
      background: rgba(0, 0, 0, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: vw(16);
      // padding: vw(16);
      font-family: "PingFang SC";
      font-style: normal;
      color: #ffffff;
      height: 100%;
      display: flex;
      flex-direction: column;
      .rank-title {
        font-weight: 600;
        font-size: vw(14);
        line-height: vw(24);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: vw(12) vw(16);
        border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);

        .subtitle {
          font-weight: 500;
          font-size: vw(12);
          line-height: vw(24);
        }
      }
      .rank-content {
        flex: 1 0 0;
        overflow: auto;
        .rank-content-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: vw(16);
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
        }
      }
      &:not(:last-child) {
        margin-bottom: vw(16);
      }
    }
  }
}
</style>
