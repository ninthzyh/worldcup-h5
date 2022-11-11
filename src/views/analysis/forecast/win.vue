<template>
    <div class="win">
        <ForecastCard :width="$vw(500)" :title="`${$lang.forecast.trendPrognosis}`">
            <template v-slot:title-right>
                <div class="title-icon" @click="isShow=!isShow"></div>
            </template>
            <template v-slot:card-content>
                <div class="win-content">
                    <div class="win-describe">{{$lang.forecast.trendDescribe}}</div>
                    <div class="win-percent">
                        <div class="home-win">
                            <div class="percent"><span>{{cardList&&cardList.homeValue}}</span><span class="unit">%</span></div>
                            <div class="text">{{$lang.forecast.home}}</div>
                        </div>
                        <div class="draw">
                            <div class="percent"><span>{{cardList&&cardList.drawValue}}</span><span class="unit">%</span></div>
                            <div class="text">{{$lang.forecast.draw}}</div>
                        </div>
                        <div class="away-win">
                            <div class="away-win-content">
                                <div class="percent"><span>{{cardList&&cardList.awayValue}}</span><span class="unit">%</span></div>
                                <div class="text">{{$lang.forecast.away}}</div>
                            </div>
                            <div class="away-star">
                                <div class="start-icon"></div>
                            </div>
                        </div>
                    </div>
                    <info-dialog v-if="isShow"></info-dialog>
                </div>
            </template>
        </ForecastCard>
    </div>
</template>
<script>
import ForecastCard from "../components/forecastCard";
import InfoDialog from "../components/infoDialog";
export default {
    props: ["cardList"],
    components: {
        ForecastCard,
        InfoDialog
    },
    watch: {
        cardList: {
            immediate: true,
            handler(newData) {
                this.cardList = newData;
            },
        },
    },
    data() {
        return {
            isShow: false, //提示框
        };
    },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
@media screen and (max-device-width: 600px) {
  .win {
    font-style: normal;
    margin-bottom: vw(16);
    .title-icon {
      height: vw(16);
      width: vw(16);
      background: url("~@/assets/images/info-white.svg") no-repeat
      center/contain;
    }
    .win-content {
      padding: 0 vw(16);
      position: relative;
      .win-describe {
        padding-top: vw(13);
        border-top: vw(1) solid rgba(255, 255, 255, 0.12);
        font-weight: 300;
        font-size: vw(10);
        line-height: 110%;
        color: rgba(255, 255, 255, 0.7);
      }
      .win-percent {
        margin: vw(24) 0;
        display: flex;
        height: vw(120);
        .home-win,
        .draw {
          padding: 0 vw(16);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #111111;
          border: vw(1) solid rgba(255, 255, 255, 0.54);
          border-radius: vw(4);
          margin-right: vw(3);
          .percent {
            font-family: "Inter";
            line-height: vw(18);
            font-weight: 700;
            font-size: vw(16);
            display: flex;
            align-items: baseline;
            margin-bottom: vw(3);
            .unit {
              font-size: vw(12);
              display: block;
              transform: scale(0.8);
              transform-origin: 0 100%;
            }
          }
          .text {
            // font-family: "PingFang SC";
            font-weight: 500;
            font-size: vw(14);
            line-height: vw(15);
            text-align: center;
          }
        }
        .away-win {
          flex: 1 0 vw(142);
          margin-left: vw(2);
          padding: vw(1);
          border: none;
          box-sizing: border-box;
          background-image: linear-gradient(
                (90deg, #111111 0%, #111111 48.86%, #111111 100%)
          ),
          linear-gradient(
                (90deg, #8d3588 0%, #d1383b 48.86%, #e49640 100%)
          );
          border-radius: vw(4);
          background-clip: content-box, padding-box;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          .away-win-content {
            .percent {
              font-family: "Inter";
              line-height: vw(26);
              font-weight: 700;
              font-size: vw(24);
              display: flex;
              align-items: baseline;
              margin-bottom: vw(3);
              .unit {
                font-size: vw(12);
                display: block;
              }
            }
            .text {
              // font-family: "PingFang SC";
              font-weight: 500;
              font-size: vw(16);
              line-height: vw(18);
              text-align: center;
            }
          }
          .away-star {
            position: absolute;
            top: 0;
            right: 0;
            background: linear-gradient(
                to top right,
                transparent 0%,
                transparent 49.9%,
                #8d3588 0%,
                #d1383b 48.86%,
                #e49640 100%
            );
            padding: vw(3) vw(3) vw(11) vw(11);
            border-radius: vw(4);
            .start-icon {
              height: vw(8);
              width: vw(8);
              background: url("~@/assets/images/star.svg") no-repeat
              center/contain;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-device-width: 600px) {
  .win {
    display: inline-block;
    font-style: normal;
    margin-bottom: vwPad(16);
    margin-right: vwPad(18);
    .title-icon {
      height: vwPad(16);
      width: vwPad(16);
      background: url("~@/assets/images/info-white.svg") no-repeat
      center/contain;
    }
    .win-content {
      padding: 0 vwPad(16);
      position: relative;
      .win-describe {
        padding-top: vwPad(13);
        border-top: vwPad(1) solid rgba(255, 255, 255, 0.12);
        font-weight: 300;
        font-size: vwPad(10);
        line-height: 110%;
        color: rgba(255, 255, 255, 0.7);
      }
      .win-percent {
        margin: vwPad(24) 0;
        display: flex;
        height: vwPad(120);
        .home-win,
        .draw {
          padding: 0 vwPad(16);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #111111;
          border: vwPad(1) solid rgba(255, 255, 255, 0.54);
          border-radius: vwPad(4);
          margin-right: vwPad(3);
          .percent {
            font-family: "Inter";
            line-height: vwPad(18);
            font-weight: 700;
            font-size: vwPad(16);
            display: flex;
            align-items: baseline;
            margin-bottom: vwPad(3);
            .unit {
              font-size: vwPad(12);
              display: block;
              transform: scale(0.8);
              transform-origin: 0 100%;
            }
          }
          .text {
            // font-family: "PingFang SC";
            font-weight: 500;
            font-size: vwPad(14);
            line-height: vwPad(15);
            text-align: center;
          }
        }
        .away-win {
          flex: 1 0 vwPad(142);
          margin-left: vwPad(2);
          padding: vwPad(1);
          border: none;
          box-sizing: border-box;
          background-image: linear-gradient(
                (90deg, #111111 0%, #111111 48.86%, #111111 100%)
          ),
          linear-gradient(
                (90deg, #8d3588 0%, #d1383b 48.86%, #e49640 100%)
          );
          border-radius: vwPad(4);
          background-clip: content-box, padding-box;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          .away-win-content {
            .percent {
              font-family: "Inter";
              line-height: vwPad(26);
              font-weight: 700;
              font-size: vwPad(24);
              display: flex;
              align-items: baseline;
              margin-bottom: vwPad(3);
              .unit {
                font-size: vwPad(12);
                display: block;
              }
            }
            .text {
              // font-family: "PingFang SC";
              font-weight: 500;
              font-size: vwPad(16);
              line-height: vwPad(18);
              text-align: center;
            }
          }
          .away-star {
            position: absolute;
            top: 0;
            right: 0;
            background: linear-gradient(
                to top right,
                transparent 0%,
                transparent 49.9%,
                #8d3588 0%,
                #d1383b 48.86%,
                #e49640 100%
            );
            padding: vwPad(3) vwPad(3) vwPad(11) vwPad(11);
            border-radius: vwPad(4);
            .start-icon {
              height: vwPad(8);
              width: vwPad(8);
              background: url("~@/assets/images/star.svg") no-repeat
              center/contain;
            }
          }
        }
      }
    }
  }
}
</style>
