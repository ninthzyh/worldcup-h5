<template>
    <div class="groups">
        <div class="groups-content">
            <div class="group-item" v-for="(item,index) in groupList" :key="index">
                <div class="group-title">{{item.groupName}}</div>
                <div class="table">
                    <div class="table-header">
                        <div class="label-first"><span class="icon">#</span><span>{{$lang.groups.team}}</span></div>
                        <div class="label">{{$lang.groups.PL}}</div>
                        <div class="label">{{$lang.groups.W}}</div>
                        <div class="label">{{$lang.groups.D}}</div>
                        <div class="label">{{$lang.groups.L}}</div>
                        <div class="label">{{$lang.groups.PTS}}</div>
                    </div>
                    <div class="table-content" v-for="(it,idx) in item.dataList" :key="idx">
                        <div :class="`${it.riseFlag?'line':''}`"></div>
                        <div class="rows-first">
                            <div class="index">{{idx+1}}</div>
                            <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" :margin="`0 ${$vw(13)}`" :img="it.teamFlag" />
                            <div class="team-name">{{it.teamName}}</div>
                        </div>
                        <div class="rows-other">{{it.matchesPlayed}}</div>
                        <div class="rows-other">{{it.matchesWon}}</div>
                        <div class="rows-other">{{it.matchesDrawn}}</div>
                        <div class="rows-other">{{it.matchesLost}}</div>
                        <div class="rows-other">{{it.points}}</div>
                    </div>
                </div>
            </div>
            <div class="group-logo"></div>
        </div>
        <div class="tips">
            <div class="legend"></div><span>{{$lang.groups.playOff}}</span>
        </div>
    </div>
</template>
<script>
import NationalFlag from "../../components/NationalFlag";
// import standinggroup from "./standinggroup.json";
import { standingGroup } from "@/api/groups.js";
export default {
    components: {
        NationalFlag,
    },
    mounted() {
        this.getStandingGroup();
    },
    data() {
        return {
            // groupList: standinggroup,
            groupList: [],
        };
    },
    methods: {
        // 分组积分榜
        getStandingGroup() {
            standingGroup().then((res) => {
                this.groupList = res;
            });
        },
    },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
@media screen and (max-device-width: 600px) {
    .groups {
        height: calc(100vh - #{vw(116)});
        font-style: normal;
        color: #fff;
        background: url("~@/assets/images/bg.png") no-repeat center/contain;
        .groups-content {
            padding: vw(56) vw(24) 0 vw(24);
            height: calc(100% - #{vw(116)});
            overflow: auto;
            position: relative;
            .group-logo {
                width: vw(56);
                height: vw(56);
                background: url("~@/assets/images/group-logo.svg") no-repeat
                    center/contain;
                position: absolute;
                top: vw(28);
                left: calc((100% - #{vw(56)}) / 2);
            }
            .group-item {
                background: rgba(0, 0, 0, 0.04);
                border: vw(1) solid rgba(255, 255, 255, 0.12);
                backdrop-filter: blur(vw(8));
                border-radius: vw(16);
                // font-family: "PingFang SC";
                font-style: normal;
                &:not(:last-child) {
                    margin-bottom: vw(16);
                }
                .group-title {
                    font-weight: 600;
                    font-size: vw(14);
                    line-height: vw(24);
                    padding: vw(12) vw(16);
                    border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
                }
                .table {
                    .table-header {
                        font-weight: 400;
                        font-size: vw(12);
                        line-height: vw(24);
                        display: flex;
                        align-items: center;
                        text-align: center;
                        padding: vw(12) vw(12) vw(12) vw(16);
                        border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
                        .label-first {
                            flex-basis: vw(125);
                            text-align: left;
                            .icon {
                                margin-right: vw(14);
                            }
                        }
                        .label {
                            flex: 1 0 vw(24);
                            text-align: center;
                            word-break: break-all;
                        }
                    }
                    .table-content {
                        display: flex;
                        align-items: center;
                        padding: vw(12) vw(12) vw(12) vw(16);
                        line-height: vw(24);
                        font-weight: 500;
                        font-family: "Formular";
                        font-size: vw(14);
                        &:not(:last-child) {
                            border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
                            position: relative;
                        }
                        .line {
                            width: vw(3);
                            height: vw(42);
                            position: absolute;
                            left: 0;
                            background: #bd223b;
                            border-radius: vw(2);
                        }
                        .rows-first {
                            flex-basis: vw(125);
                            display: flex;
                            align-items: center;
                            .index {
                                font-family: "Formular";
                            }
                            .team-name {
                                // font-family: "PingFang SC";
                                font-weight: 400;
                                font-size: vw(12);
                            }
                        }
                        .rows-other {
                            flex: 1 0 vw(24);
                            text-align: center;
                            word-break: break-all;
                        }
                    }
                }
            }
        }
        .tips {
            font-weight: 400;
            font-size: vw(10);
            line-height: vw(16);
            color: rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: center;
            padding: vw(16) vw(24) vw(28) vw(24);
            width: calc(100% - vw(48));
            background: #0c0e11;
            .legend {
                width: vw(8);
                height: vw(8);
                background: #bd223b;
                border-radius: 50%;
                margin-right: vw(4);
            }
        }
    }
}
@media screen and (min-device-width: 600px) {
    .groups {
        height: calc(100vh - #{vwPad(81)});
        font-style: normal;
        color: #fff;
        background: url("~@/assets/images/bg.png") no-repeat center/contain;
        padding: 0 calc((100% - #{vwPad(1024)}) / 2);

        .groups-content {
            padding: vwPad(56) vwPad(24) 0 vwPad(24);
            height: calc(100% - #{vwPad(116)});
            overflow: auto;
            position: relative;
            .group-logo {
                display: none;
            }
            .group-item {
                background: rgba(0, 0, 0, 0.04);
                border: vwPad(1) solid rgba(255, 255, 255, 0.12);
                backdrop-filter: blur(vwPad(8));
                border-radius: vwPad(16);
                // font-family: "PingFang SC";
                font-style: normal;
                &:not(:last-child) {
                    margin-bottom: vwPad(16);
                }
                .group-title {
                    font-weight: 600;
                    font-size: vwPad(14);
                    line-height: vwPad(24);
                    padding: vwPad(12) vwPad(16);
                    border-bottom: vwPad(1) solid rgba(255, 255, 255, 0.12);
                }
                .table {
                    .table-header {
                        font-weight: 400;
                        font-size: vwPad(12);
                        line-height: vwPad(24);
                        display: flex;
                        align-items: center;
                        text-align: center;
                        padding: vwPad(12) vwPad(12) vwPad(12) vwPad(16);
                        border-bottom: vwPad(1) solid rgba(255, 255, 255, 0.12);
                        .label-first {
                            flex: 1;
                            //flex-basis: vwPad(125);
                            text-align: left;
                            .icon {
                                margin-right: vwPad(14);
                            }
                        }
                        .label {
                            flex: 0 0 vwPad(50);
                            text-align: center;
                            word-break: break-all;
                        }
                    }
                    .table-content {
                        display: flex;
                        align-items: center;
                        padding: vwPad(12) vwPad(12) vwPad(12) vwPad(16);
                        line-height: vwPad(24);
                        font-weight: 500;
                        font-family: "Formular";
                        font-size: vwPad(14);
                        &:not(:last-child) {
                            border-bottom: vwPad(1) solid
                                rgba(255, 255, 255, 0.12);
                            position: relative;
                        }
                        .line {
                            width: vwPad(3);
                            height: vwPad(42);
                            position: absolute;
                            left: 0;
                            background: #bd223b;
                            border-radius: vwPad(2);
                        }
                        .rows-first {
                            flex: 1;
                            flex-basis: vwPad(125);
                            display: flex;
                            align-items: center;
                            .index {
                                font-family: "Formular";
                            }
                            .team-name {
                                // font-family: "PingFang SC";
                                font-weight: 400;
                                font-size: vwPad(12);
                            }
                        }
                        .rows-other {
                            flex: 0 0 vwPad(50);
                            text-align: center;
                            word-break: break-all;
                        }
                    }
                }
            }
        }
        .tips {
            font-weight: 400;
            font-size: vwPad(10);
            line-height: vwPad(16);
            color: rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: center;
            padding: vwPad(16) vwPad(24) vwPad(28) vwPad(24);
            width: calc(100% - vwPad(48));
            background: #0c0e11;
            .legend {
                width: vwPad(8);
                height: vwPad(8);
                background: #bd223b;
                border-radius: 50%;
                margin-right: vwPad(4);
            }
        }
    }
}
</style>
