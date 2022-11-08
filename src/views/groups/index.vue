<template>
    <div class="groups">
        <div class="groups-content">
            <div class="group-item" v-for="(item,index) in groupList" :key="index">
                <div class="group-title">{{item.groupName}}</div>
                <div class="table">
                    <div class="table-header">
                        <div class="label-first"><span class="icon">#</span><span>球队</span></div>
                        <div class="label">场次</div>
                        <div class="label">胜</div>
                        <div class="label">平</div>
                        <div class="label">负</div>
                        <div class="label">积分</div>
                    </div>
                    <div class="table-content" v-for="(it,idx) in item.dataList" :key="idx">
                        <div :class="`${idx<2?'line':''}`"></div>
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
            <div class="legend"></div><span>晋级淘汰赛资格</span>
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
</style>