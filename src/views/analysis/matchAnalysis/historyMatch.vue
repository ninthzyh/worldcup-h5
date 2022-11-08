<template>
    <div class="match-card">
        <div class="card-header">
            <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" :border="`${$vw(0.5)} solid rgba(255, 255, 255, 0.12)`" :padding="`${$vw(8)}`" :img="cardList&&cardList.relateMatchList[0].homeFlag" />
            <div class="card-title">{{$lang.matchAnalysis.H2H}}</div>
            <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" :border="`${$vw(0.5)} solid rgba(255, 255, 255, 0.12)`" :padding="`${$vw(8)}`" :img="cardList&&cardList.relateMatchList[0].awayFlag" />
        </div>
        <div class="history-session">
            <div class="session-item">
                <div class="home-bg">{{cardList&&cardList.homeValue}}</div>
                <div class="item-text-wrap">
                    <div class="item-text">{{$lang.matchAnalysis.homeWins}}</div>
                    <div class="item-percent">{{cardList&&cardList.homeRatio}}</div>
                </div>
            </div>
            <div class="session-item">
                <div class="draw-bg">{{cardList&&cardList.drawValue}}</div>
                <div class="item-text-wrap">
                    <div class="item-text">{{$lang.matchAnalysis.draws}}</div>
                    <div class="item-percent">{{cardList&&cardList.drawRatio}}</div>
                </div>
            </div>
            <div class="session-item">
                <div class="away-bg">{{cardList&&cardList.awayValue}}</div>
                <div class="item-text-wrap">
                    <div class="item-text">{{$lang.matchAnalysis.awayWins}}</div>
                    <div class="item-percent">{{cardList&&cardList.awayRatio}}</div>
                </div>
            </div>
        </div>
        <div class="match-card-item" v-for="(item,index) in (cardList&&cardList.relateMatchList)" :key="index">
            <div class="match-card-header">
                <div class="time">{{item.matchDate}}</div>
                <div class="status">{{item.competitionName}}</div>
            </div>
            <div class="team-match">
                <div class="team-name left">{{item.homeName}}</div>
                <national-flag :width="`${$vw(16)}`" :height="`${$vw(16)}`" :img="item.homeFlag" :margin="`0 ${$vw(8)}`" />
                <div class="team-score">{{item.homeScore}}</div>
                <div class="team-score">-</div>
                <div class="team-score">{{item.awayScore}}</div>
                <national-flag :width="`${$vw(16)}`" :height="`${$vw(16)}`" :img="item.awayFlag" :margin="`0 ${$vw(8)}`" />
                <div class="team-name">{{item.awayName}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import NationalFlag from "../../../components/NationalFlag";

export default {
    props: ["cardList"],
    components: {
        NationalFlag,
    },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.match-card {
    background: rgba(0, 0, 0, 0.04);
    border: vw(1) solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(#{vw(8)});
    border-radius: vw(16);
    padding: vw(16);
    margin-bottom: vw(16);
    .card-header {
        font-style: normal;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: vw(16);
        .card-title {
            font-weight: 500;
            font-size: vw(14);
            line-height: 110%;
        }
        .bold {
            font-weight: 600;
            font-size: vw(16);
            line-height: vw(24);
        }
    }
    .history-session {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: vw(24);
        .session-item {
            display: flex;
            align-items: center;
            .item-number {
                width: vw(32);
                height: vw(32);
                border-radius: vw(4);
                margin-right: vw(8);
                line-height: vw(32);
                text-align: center;
            }
            .home-bg {
                @extend .item-number;
                background: #7a293f;
            }
            .draw-bg {
                @extend .item-number;
                background: #323232;
            }
            .away-bg {
                @extend .item-number;
                background: #7996bc;
            }
            .item-text-wrap {
                .item-text {
                    font-weight: 500;
                    font-size: vw(12);
                    line-height: vw(16);
                }
                .item-percent {
                    font-weight: 400;
                    font-size: vw(12);
                    line-height: vw(16);
                    color: rgba(255, 255, 255, 0.54);
                }
            }
        }
    }
    .match-card-item {
        border-top: vw(1) solid rgba(255, 255, 255, 0.12);
        padding-bottom: vw(12);

        .match-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: vw(2.5) 0;
            .time {
                font-family: "Inter";
                font-weight: 400;
                font-size: vw(10);
                line-height: vw(12);
                color: rgba(255, 255, 255, 0.7);
            }
            .status {
                padding: vw(2) vw(11);
                border-radius: vw(58);
                font-weight: 400;
                font-size: vw(10);
                transform: scale(0.75);
                transform-origin: 100% 50%;
                background: rgba(255, 255, 255, 0.12);
                color: rgba(255, 255, 255, 0.7);
            }
        }
        .team-match {
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: vw(20);
            .team-name {
                flex: 0 0 vw(60);
                font-weight: 400;
                font-size: vw(12);
            }
            .left {
                text-align: right;
            }
            .team-score {
                font-family: "Inter";
                font-weight: 600;
                font-size: vw(14);
            }
        }
    }
}
</style>