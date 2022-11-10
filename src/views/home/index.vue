<template>
    <div class="home">
        <div class="home-logo">
            <div class="logo"></div>
        </div>
        <div class="content">
            <div class="home-screen">
                <div class="screen-label">
                    <div class="screen-live">
                        <div :class="`${true?'live-icon':'hot-icon'}`"></div>
                        <div class="today">
                            <span>{{$lang.home.today}}</span>
                            <span>{{bannerData&&bannerData.matchDatetime}}</span>
                        </div>
                    </div>
                    <div class="vs">
                        <div class="vs-team-name"><span>{{bannerData&&bannerData.homeName}}</span><span class="line">-</span></div>

                        <div class="vs-team-name">{{bannerData&&bannerData.awayName}}</div>
                    </div>
                    <div class="flag">
                        <national-flag :width="`${innerWidth<600?$vw(28):$vw(48)}`" :height="`${innerWidth<600?$vw(28):$vw(48)}`" :margin="`0 ${innerWidth<600?$vw(12):$vw(16)} 0 0`" :img="bannerData&&bannerData.homeFlag" />
                        <national-flag :width="`${innerWidth<600?$vw(28):$vw(48)}`" :height="`${innerWidth<600?$vw(28):$vw(48)}`" :img="bannerData&&bannerData.awayFlag" />
                    </div>
                    <div class="watching" @click="onWatch">{{$lang.home.watch}}</div>
                    <div class="des">
                        <div class="des-item">
                            <div class="position"></div>
                            <div class="des-laguage">
                                <div class="des-en">Al Thumama Stadium</div>
                                <div class="des-cn">{{$lang.home.stadium}}</div>
                            </div>
                        </div>
                        <div class="des-item">
                            <div class="people"></div>
                            <div class="des-laguage">
                                <div class="des-en">120,000</div>
                                <div class="des-cn">{{$lang.home.capacity}}</div>
                            </div>
                        </div>
                        <div class="des-item">
                            <div class="lawn"></div>
                            <div class="des-laguage">
                                <div class="des-en">{{$lang.home.grass}}</div>
                                <div class="des-cn">{{$lang.home.surface}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-wrap">
                <div class="title">{{$lang.home.fifaWorldCup}}</div>
                <div class="nav">
                    <div class="nav-item" v-for="(item,index) in navList" :key="index" @click="()=>onNavClick(item.url)">
                        <div class="icon-wrap">
                            <div :class="item.class"></div>
                        </div>
                        <div class="nav-item-label">{{item.label}}</div>
                    </div>
                </div>
            </div>
            <div class="today-schedule">
                <div class="title"><span>{{$lang.home.todayMatches}}</span><span class="check-all" @click="jumpTo">{{$lang.home.seeAll}}</span></div>
                <schedule-list :dataList="matchList" />
            </div>
        </div>
    </div>
</template>
<script>
import ScheduleList from "../../components/ScheduleList";
import NationalFlag from "../../components/NationalFlag";
// import bannerData from "./scheduleplaying.json";
// import schedulelist from './schedulelist.json';
import { scheduleList } from "@/api/home";
export default {
    components: {
        ScheduleList,
        NationalFlag,
    },
    mounted() {
        this.getScheduleList();
    },
    unmounted() {
        clearInterval(this.timer);
    },
    data() {
        return {
            innerWidth: window.innerWidth, //窗口尺寸
            navList: [
                {
                    label: this.$lang.home.schedule,
                    class: "schedule",
                    url: "/catalogue/schedule",
                },
                {
                    label: this.$lang.home.ranking,
                    class: "rank",
                    url: "/catalogue/rank",
                },
                {
                    label: this.$lang.home.group,
                    class: "groups",
                    url: "/catalogue/groups",
                },
                {
                    label: this.$lang.home.playoff,
                    class: "rise",
                    url: "/catalogue/rise",
                },
            ], //导航
            // matchList: scheduleList.matchList,
            // bannerData: bannerData[0],
            matchList: [], // 今日赛程列表
            bannerData: [], //头部banner数据
            timer: null, //定时器
            date: null, //今日日期
            bannerMatchId: null, //立即观看matchId
        };
    },
    methods: {
        // 立即观看
        onWatch() {
            console.log(this.bannerMatchId);
            this.$router.push({
                path: "/analysis",
                query: {
                    matchId: this.bannerMatchId,
                    type: "matchData",
                },
            });
        },
        // 首页日期赛程&轮播图
        getScheduleList() {
            // 30s 刷新
            let homeDataList = () => {
                scheduleList().then((res) => {
                    this.matchList = res.matchList;
                    this.bannerData = res.playingList[0];
                    this.bannerMatchId = res.playingList[0].matchId;
                    this.date = res.date;
                });
            };
            // 调用接口立即执行第一次
            homeDataList();
            this.timer && clearInterval(this.timer);
            this.timer = setInterval(homeDataList, 30000);
        },
        onNavClick(url) {
            this.$router.push(url);
        },
        // 赛程查看全部
        jumpTo() {
            this.$router.push({
                path: "/catalogue/schedule",
                query: {
                    date: this.date,
                },
            });
        },
    },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
@media screen and (max-device-width: 600px) {
    .home {
        color: #ffffff;
        font-size: vw(14);
        height: 100%;
        overflow: auto;
        .home-logo {
            height: vw(56);
            background: #0c0e11;
            position: fixed;
            min-width: 100%;
            width: max-content;
            z-index: 9;
            .logo {
                position: absolute;
                margin-top: vw(16);
                width: 100%;
                height: vw(24);
                background: url("~@/assets/images/logo.svg") no-repeat
                    center/contain;
            }
        }
        .content {
            margin-top: vw(56);
            .home-screen {
                width: 100%;
                height: vw(194);
                background: url("~@/assets/images/home-header.svg") no-repeat
                    center/contain;
                border-top: vw(1) solid rgba(255, 255, 255, 0.12);
                border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
                .screen-label {
                    padding: vw(16);
                    font-family: "Inter";
                    font-weight: 600;
                    line-height: vw(24);
                    height: 100%;
                    box-sizing: border-box;
                    .screen-live {
                        display: flex;
                        height: vw(12);
                        margin-bottom: vw(7);
                        .common-status {
                            width: vw(23);
                            height: vw(12);
                            margin-right: vw(8);
                        }
                        .live-icon {
                            @extend .common-status;
                            background: url("~@/assets/images/live.svg")
                                no-repeat center/contain;
                        }
                        .hot-icon {
                            @extend .common-status;
                            background: url("~@/assets/images/hot.svg")
                                no-repeat center/contain;
                        }
                        .today {
                            transform: scale(0.5);
                            transform-origin: 0 0;
                            font-size: vw(17);
                            color: rgba(255, 255, 255, 0.7);
                            font-weight: 600;
                            line-height: vw(24);
                        }
                    }
                    .vs {
                        font-family: "Inter";
                        font-size: vw(24);
                        padding-bottom: vw(7);
                        line-height: vw(29);
                        height: vw(56);
                        .line {
                            padding: vw(8);
                        }
                    }
                    .flag {
                        display: flex;
                        padding-bottom: vw(12);
                        > div:not(:last-child) {
                            margin-right: vw(12);
                        }
                    }
                    .watching {
                        // width: vw(44);
                        height: vw(16);
                        display: inline-block;
                        // background: url("~@/assets/images/watching.svg") no-repeat
                        //     center/contain;
                        background: rgba(255, 255, 255, 0.87);
                        border-radius: vw(2);
                        margin-bottom: vw(1);
                        color: #000000;
                        transform: scale(0.6666);
                        transform-origin: 0 50%;
                        font-size: vw(8);
                        line-height: vw(16);
                        padding: vw(4) vw(9);
                    }
                    .des {
                        display: flex;
                        justify-content: end;
                        transform: scale(0.65306);
                        transform-origin: 100% 50%;
                        @mixin des-icon($url) {
                            margin-right: vw(4);
                            width: vw(12);
                            height: vw(12);
                            background: url($url) no-repeat center/contain;
                        }
                        .des-item {
                            display: flex;
                            .position {
                                @include des-icon(
                                    "~@/assets/images/position.svg"
                                );
                            }
                            .people {
                                @include des-icon(
                                    "~@/assets/images/people.svg"
                                );
                            }
                            .lawn {
                                @include des-icon("~@/assets/images/lawn.svg");
                            }
                            .des-laguage {
                                font-style: normal;
                                font-size: vw(8);
                                .des-en {
                                    line-height: vw(10);
                                    font-family: "Inter";
                                    font-weight: 500;
                                    color: rgba(255, 255, 255, 0.7);
                                    margin-bottom: vw(4);
                                }
                                .des-cn {
                                    line-height: vw(10);
                                    // font-family: "PingFang SC";
                                    font-weight: 400;
                                    color: rgba(255, 255, 255, 0.32);
                                }
                            }
                            &:not(:last-child) {
                                margin-right: vw(16);
                            }
                        }
                    }
                }
            }
            .today-schedule {
                padding: 0 vw(16);
            }
            .title {
                font-weight: 500;
                line-height: vw(28);
                padding: vw(16) vw(18) vw(8) vw(18);
                .check-all {
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
                        border-radius: vw(8);
                        width: vw(70);
                        height: vw(70);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        .icon-wrap {
                            background: #8d2537;
                            border-radius: vw(2);
                            width: vw(24);
                            height: vw(24);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            @mixin nav-item-icon($url) {
                                height: vw(16);
                                width: vw(16);
                                background: url($url) no-repeat center/contain;
                            }
                            .schedule {
                                @include nav-item-icon(
                                    "~@/assets/images/schedule.svg"
                                );
                            }
                            .rank {
                                @include nav-item-icon(
                                    "~@/assets/images/rank.svg"
                                );
                            }
                            .groups {
                                @include nav-item-icon(
                                    "~@/assets/images/groups.svg"
                                );
                            }
                            .rise {
                                @include nav-item-icon(
                                    "~@/assets/images/rise.svg"
                                );
                            }
                        }
                        .nav-item-label {
                            font-weight: 400;
                            line-height: vw(24);
                        }
                    }
                }
            }
        }
    }
}
@media screen and(min-device-width:600px) {
    .home {
        background: #000000;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        padding: 0 calc((100% - #{vwPad(1024)}) / 2);
        .home-logo {
            padding: vwPad(29) 0 vwPad(28) 0;
            .logo {
                width: vwPad(88);
                height: vwPad(24);
                background-image: url("~@/assets/images/logo.svg");
                background-size: 100% 100%;
                margin: 0 auto;
            }
        }
        .content {
            .home-screen {
                width: 100%;
                height: vwPad(268);
                background-color: #010101 !important;
                background: url("~@/assets/images/home-header-pad.svg")
                    no-repeat right/contain;
                // background: #010101;
                border: vwPad(1) solid rgba(255, 255, 255, 0.12);
                border-radius: vwPad(16);
                .screen-label {
                    padding: vwPad(24);
                    font-family: "Inter";
                    font-weight: 600;
                    line-height: vwPad(24);
                    height: 100%;
                    box-sizing: border-box;
                    .screen-live {
                        display: flex;
                        height: vwPad(18);
                        margin-bottom: vwPad(24);
                        %common-status {
                            width: vwPad(30);
                            height: vwPad(18);
                            margin-right: vwPad(16);
                        }
                        .live-icon {
                            @extend %common-status;
                            background: url("~@/assets/images/live.svg")
                                no-repeat center/contain;
                        }
                        .hot-icon {
                            @extend %common-status;
                            background: url("~@/assets/images/hot.svg")
                                no-repeat center/contain;
                        }
                        .today {
                            transform: scale(0.6664);
                            transform-origin: 0 0;
                            font-size: vwPad(17);
                            color: rgba(255, 255, 255, 0.7);
                            font-weight: 600;
                            line-height: vwPad(24);
                        }
                    }
                    .vs {
                        font-family: "Inter";
                        font-size: vwPad(24);
                        padding-bottom: vwPad(24);
                        height: vwPad(32);
                        display: flex;
                        align-items: center;
                        width: vwPad(248);
                        .vs-team-name {
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            display: block;
                            line-height: vwPad(32);
                        }
                        .line {
                            padding: vwPad(8);
                        }
                    }
                    .flag {
                        display: flex;
                        padding-bottom: vwPad(22);
                        > div:not(:last-child) {
                            margin-right: vwPad(12);
                        }
                    }
                    .watching {
                        // width: vwPad(44);
                        // height: vwPad(16);
                        display: inline-block;
                        // background: url("~@/assets/images/watching.svg") no-repeat
                        //     center/contain;
                        background: rgba(255, 255, 255, 0.87);
                        border-radius: vwPad(2);
                        margin-bottom: vwPad(1);
                        color: #000000;
                        // transform: scale(0.6666);
                        // transform-origin: 0 50%;
                        font-size: vwPad(12);
                        line-height: vwPad(12);
                        padding: vwPad(8) vwPad(12);
                    }
                    .des {
                        display: flex;
                        justify-content: end;
                        transform: scale(0.74);
                        transform-origin: 100% 50%;
                        @mixin des-icon($url) {
                            margin-right: vwPad(4);
                            width: vwPad(12);
                            height: vwPad(12);
                            background: url($url) no-repeat center/contain;
                        }
                        .des-item {
                            display: flex;
                            .position {
                                @include des-icon(
                                    "~@/assets/images/position.svg"
                                );
                            }
                            .people {
                                @include des-icon(
                                    "~@/assets/images/people.svg"
                                );
                            }
                            .lawn {
                                @include des-icon("~@/assets/images/lawn.svg");
                            }
                            .des-laguage {
                                font-style: normal;
                                font-size: vwPad(8);
                                .des-en {
                                    line-height: vwPad(10);
                                    font-family: "Inter";
                                    font-weight: 500;
                                    color: rgba(255, 255, 255, 0.7);
                                    margin-bottom: vwPad(4);
                                }
                                .des-cn {
                                    line-height: vwPad(10);
                                    // font-family: "PingFang SC";
                                    font-weight: 400;
                                    color: rgba(255, 255, 255, 0.32);
                                }
                            }
                            &:not(:last-child) {
                                margin-right: vwPad(16);
                            }
                        }
                    }
                }
            }
            .today-schedule {
                // padding: 0 vwPad(16);
            }
            .title {
                font-weight: 500;
                line-height: vwPad(14);
                font-size: vwPad(16);
                padding: vwPad(32) 0 vwPad(24) 0;
                .check-all {
                    float: right;
                    font-weight: 500;
                    font-size: vwPad(12);
                    line-height: vwPad(28);
                    color: rgba(255, 255, 255, 0.54);
                }
            }

            .nav-wrap {
                .nav {
                    padding: 0 vwPad(18);
                    display: flex;
                    justify-content: space-evenly;
                    .nav-item {
                        background: rgba(255, 255, 255, 0.04);
                        border: vwPad(1) solid rgba(255, 255, 255, 0.12);
                        border-radius: vwPad(8);
                        width: vwPad(76);
                        height: vwPad(76);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        .icon-wrap {
                            background: #8d2537;
                            border-radius: vwPad(2);
                            width: vwPad(24);
                            height: vwPad(24);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            @mixin nav-item-icon($url) {
                                height: vwPad(16);
                                width: vwPad(16);
                                background: url($url) no-repeat center/contain;
                            }
                            .schedule {
                                @include nav-item-icon(
                                    "~@/assets/images/schedule.svg"
                                );
                            }
                            .rank {
                                @include nav-item-icon(
                                    "~@/assets/images/rank.svg"
                                );
                            }
                            .groups {
                                @include nav-item-icon(
                                    "~@/assets/images/groups.svg"
                                );
                            }
                            .rise {
                                @include nav-item-icon(
                                    "~@/assets/images/rise.svg"
                                );
                            }
                        }
                        .nav-item-label {
                            font-weight: 400;
                            line-height: vwPad(24);
                        }
                    }
                }
            }
        }
    }
}
</style>