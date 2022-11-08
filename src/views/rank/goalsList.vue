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
                    <span>{{$route.params.title}}</span>
                    <div class="subtitle">进球</div>
                </div>
                <div class="rank-content" ref="scroll">
                    <div class="rank-content-item" v-for="(item,index) in list" :key="index">
                        <div class="item-left">
                            <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" :img="item[queryParams.config.flag]" />
                            <div class="text">
                                <span>{{item[queryParams.config.name]}}</span>
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
// import rankplayer from "./rankplayer.json";
// import rankteam from "./rankteam.json";
import { rankPlayer, rankTeam } from "@/api/rank.js";
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
            // let res;
            if (this.queryParams.config.type === "team") {
                // res = rankteam;
                this.getRankTeam();
            } else {
                // res = rankplayer;
                this.getRankPlayer();
            }
            // this.allList = res[this.queryParams.type];
            // this.getList();
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
        // 球员数据排行
        getRankPlayer() {
            rankPlayer().then((res) => {
                this.allList = res[this.queryParams.type];
                this.getList();
            });
        },
        // 球队数据排行
        getRankTeam() {
            rankTeam().then((res) => {
                this.allList = res[this.queryParams.type];
                this.getList();
            });
        },
        onBack() {
            this.$router.push("/catalogue/rank");
        },
        getList() {
            // 取列表中前pageSize条
            this.list = [...this.allList].splice(0, this.pagination.pageSize);
            // 总条数
            this.pagination.total = this.allList.length;
            window.addEventListener("scroll", this.handleScroll, true);
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
    background: url("~@/assets/images/bg.png") no-repeat center/contain;

    .menu-container {
        height: vw(76);
        background: linear-gradient(180deg, #96263a 12.77%, #0c0e11 88.3%);
        .menu-header {
            display: flex;
            align-items: center;
            padding: vw(23) vw(34) vw(20) vw(10);
            .back {
                height: vw(24);
                width: vw(24);
                background: url("~@/assets/images/back.svg") no-repeat
                    center/contain;
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
        flex: 1 0;
        border-top: vw(1) solid rgba(255, 255, 255, 0.12);
        padding: vw(24) vw(22) vw(40) vw(26);
        .rank-card {
            background: rgba(0, 0, 0, 0.04);
            border: vw(1) solid rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(#{vw(8)});
            border-radius: vw(16);
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
                padding: 0 vw(16);
                .rank-content-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: vw(16) 0;
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
                                line-height: vw(16);
                                color: rgba(255, 255, 255, 0.54);
                            }
                        }
                    }
                    .score {
                        font-weight: 600;
                        font-size: vw(12);
                        line-height: vw(16);
                        width: vw(26);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-family: "Inter";
                    }
                    &:not(:last-child) {
                        border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
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
