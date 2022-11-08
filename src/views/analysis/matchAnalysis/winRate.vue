<template>
    <div class="match-card">
        <div class="match-card-title">{{$lang.matchAnalysis.liveWinProbability}}</div>
        <div class="match-card-content">
            <div class="home-win">
                <div class="bar" :style="`height:${cardList&&cardList.homeValue?`${$vw(46/24*cardList.homeValue)}`:0}`">
                    <div>
                        <span>{{cardList&&cardList.homeValue}}</span>
                        <span class="unit">%</span>
                    </div>
                </div>
                <div class="label">{{$lang.matchAnalysis.home}}</div>
            </div>
            <div class="team-draw">
                <div class="bar" :style="`height:${cardList&&cardList.drawValue?`${$vw(46/24*cardList.drawValue)}`:0}`">
                    <div>
                        <span>{{cardList&&cardList.drawValue}}</span>
                        <span class="unit">%</span>{{cardList.drawValue}}
                    </div>
                </div>
                <div class="label">{{$lang.matchAnalysis.draw}}</div>
            </div>
            <div class="away-win">
                <div class="bar" :style="`height:${cardList&&cardList.awayValue?`${$vw(46/24*cardList.awayValue)}`:0}`">
                    <div>
                        <span>{{cardList&&cardList.awayValue}}</span>
                        <span class="unit">%</span>
                    </div>
                </div>
                <div class="label">{{$lang.matchAnalysis.away}}</div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    props: ["cardList"],
    watch: {
        cardList: {
            immediate: true,
            handler(newData) {
                this.cardList = newData;
            },
        },
    },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";

.match-card {
    background: rgba(0, 0, 0, 0.04);
    border: vw(1) solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(vw(8));
    border-radius: vw(16);
    padding: vw(16);
    margin-bottom: vw(16);
    .match-card-title {
        font-weight: 600;
        font-size: vw(14);
        line-height: vw(16);
        padding-bottom: vw(16);
        margin-bottom: vw(24);
        border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
    }
    .match-card-content {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        @mixin bar-common($background, $width, $color, $fSize) {
            text-align: center;
            width: $width;
            .bar {
                background: $background;
                color: $color;
                font-weight: 700;
                font-family: "Sahar";
                font-size: $fSize;
                > div {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .unit {
                    font-size: vw(13);
                }
            }
            .label {
                font-weight: 500;
                font-size: vw(12);
                line-height: vw(24);
                padding: vw(8) 0 vw(8) 0;
            }
        }
        .team-draw {
            @include bar-common(#fff, vw(98), #000, vw(32));
        }
        .home-win {
            @include bar-common(#7a293f, vw(72), #fff, vw(14));
        }
        .away-win {
            @include bar-common(#7996bc, vw(72), #fff, vw(14));
        }
    }
}
</style>