<template>
    <div class="both-score">
        <ForecastCard :width="$vw(500)" :title="`${$lang.forecast.bothScore}`">
            <template v-slot:title-right>
                <div class="title-icon" @click="isShow=!isShow"></div>
            </template>
            <template v-slot:card-content>
                <div class="both-score-content">
                    <div class="both-score-describe">{{$lang.forecast.bothScoreDescribe}}</div>
                    <div class="both-score-percent">
                        <div class="has-score">
                            <div class="has-score-content">
                                <div class="percent"><span>{{cardList&&cardList.agreeValue}}</span><span class="unit">%</span></div>
                                <div class="text">{{$lang.forecast.yes}}</div>
                            </div>
                            <div class="has-score-star">
                                <div class="start-icon"></div>
                            </div>
                        </div>
                        <div class="no-score">
                            <div class="percent"><span>{{cardList&&cardList.disagreeValue}}</span><span class="unit">%</span></div>
                            <div class="text">{{$lang.forecast.no}}</div>
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
  .both-score {
    font-style: normal;
    margin-bottom: vw(16);
    .title-icon {
      height: vw(16);
      width: vw(16);
      background: url("~@/assets/images/info-white.svg") no-repeat
      center/contain;
    }
    .both-score-content {
      padding: 0 vw(16);
      position: relative;
      .both-score-describe {
        padding-top: vw(13);
        border-top: vw(1) solid rgba(255, 255, 255, 0.12);
        font-weight: 300;
        font-size: vw(10);
        line-height: 110%;
        color: rgba(255, 255, 255, 0.7);
      }
      .both-score-percent {
        margin: vw(24) 0;
        display: flex;
        height: vw(120);
        .has-score {
          flex: 1 0 vw(170);
          margin-right: vw(5);
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
          .has-score-content {
            .percent {
              font-family: "Inter";
              line-height: vw(35);
              height: vw(35);
              font-weight: 700;
              font-size: vw(32);
              margin-bottom: vw(3);
              display: flex;
              align-items: baseline;
              .unit {
                font-size: vw(12);
                display: block;
              }
            }
            .text {
              // font-family: "PingFang SC";
              font-weight: 500;
              font-size: vw(12);
              line-height: vw(13);
              display: flex;
              justify-content: center;
            }
          }
          .has-score-star {
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
        .no-score {
          padding: vw(40) vw(18);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #111111;
          border: vw(1) solid rgba(255, 255, 255, 0.54);
          border-radius: vw(4);

          .percent {
            font-family: "Inter";
            line-height: vw(22);
            height: vw(22);
            font-weight: 700;
            font-size: vw(20);
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
            font-size: vw(12);
            line-height: vw(13);
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}
@media screen and (min-device-width: 600px) {
  .both-score {
    font-style: normal;
    margin-bottom: vwPad(16);
    display: inline-block;
    vertical-align: top;
    .title-icon {
      height: vwPad(16);
      width: vwPad(16);
      background: url("~@/assets/images/info-white.svg") no-repeat
      center/contain;
    }
    .both-score-content {
      padding: 0 vwPad(16);
      position: relative;
      .both-score-describe {
        padding-top: vwPad(13);
        border-top: vwPad(1) solid rgba(255, 255, 255, 0.12);
        font-weight: 300;
        font-size: vwPad(10);
        line-height: 110%;
        color: rgba(255, 255, 255, 0.7);
      }
      .both-score-percent {
        margin: vwPad(24) 0;
        display: flex;
        height: vwPad(120);
        .has-score {
          flex: 1 0 vwPad(170);
          margin-right: vwPad(5);
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
          .has-score-content {
            .percent {
              font-family: "Inter";
              line-height: vwPad(35);
              height: vwPad(35);
              font-weight: 700;
              font-size: vwPad(32);
              margin-bottom: vwPad(3);
              display: flex;
              align-items: baseline;
              .unit {
                font-size: vwPad(12);
                display: block;
              }
            }
            .text {
              // font-family: "PingFang SC";
              font-weight: 500;
              font-size: vwPad(12);
              line-height: vwPad(13);
              display: flex;
              justify-content: center;
            }
          }
          .has-score-star {
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
        .no-score {
          padding: vwPad(40) vwPad(18);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #111111;
          border: vwPad(1) solid rgba(255, 255, 255, 0.54);
          border-radius: vwPad(4);

          .percent {
            font-family: "Inter";
            line-height: vwPad(22);
            height: vwPad(22);
            font-weight: 700;
            font-size: vwPad(20);
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
            font-size: vwPad(12);
            line-height: vwPad(13);
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
