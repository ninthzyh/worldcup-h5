<template>
    <div class="goal-number">
        <ForecastCard :width="$vw(500)" :title="`${$lang.forecast.overUnder}`">
            <template v-slot:title-right>
                <div class="title-icon" @click="isShow=!isShow"></div>
            </template>
            <template v-slot:card-content>
                <div class="goal-number-content">
                    <div class="line"></div>
                    <div class="goal-number-item" v-for="(item,index) in cardList" :key="index">
                        <div class="more-card-item">
                            <div class="more-than-card">
                                <div class="more-than-star">
                                    <div class="start-icon"></div>
                                </div>
                                <div class="percent">
                                    <div>{{item.moreValue}}</div>
                                    <div class="unit">%</div>
                                </div>
                            </div>
                            <div class="tip"><span>{{$lang.forecast.over}}</span> {{item.goals}} <span>个</span></div>
                        </div>
                        <div class="less-card-item">
                            <div class="less-than-card">
                                <div class="percent">
                                    <div>{{item.lessValue}}</div>
                                    <div class="unit">%</div>
                                </div>
                            </div>
                            <div class="tip"><span>{{$lang.forecast.under}}</span> {{item.goals}} <span>个</span></div>
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
  .goal-number {
    margin-bottom: vw(16);
    .title-icon {
      height: vw(16);
      width: vw(16);
      background: url("~@/assets/images/info-white.svg") no-repeat
      center/contain;
    }
    .goal-number-content {
      margin-bottom: vw(16);
      padding: 0 vw(16);
      position: relative;
      .line {
        border-top: vw(1) solid rgba(255, 255, 255, 0.12);
        margin-bottom: vw(24);
      }
      .goal-number-item {
        display: flex;
        justify-content: space-between;
        %card-item {
          background: #111111;
          border-radius: vw(4);
          .percent {
            font-family: "Inter";
            font-style: normal;
            font-weight: 700;
            font-size: vw(16);
            line-height: vw(18);
            height: vw(18);
            padding: vw(4) 0;
            display: flex;
            align-items: center;
            justify-content: center;
            .unit {
              transform: scale(0.7);
              transform-origin: 0 100%;
            }
          }
          .tip {
            font-weight: 500;
            font-size: vw(10);
            line-height: vw(11);
            color: rgba(255, 255, 255, 0.7);
            padding: vw(4) 0 vw(9) 0;
          }
        }
        .more-card-item {
          @extend %card-item;
          flex: 2 0 vw(178);
          margin-right: vw(4);
          .more-than-card {
            padding: vw(1);
            border: none;
            background-image: linear-gradient(
                  (90deg, #111111 0%, #111111 48.86%, #111111 100%)
            ),
            linear-gradient(
                  (90deg, #8d3588 0%, #d1383b 48.86%, #e49640 100%)
            );
            border-radius: vw(4);
            background-clip: content-box, padding-box;
            position: relative;
            .more-than-star {
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
                background: url("~@/assets/images/star.svg")
                no-repeat center/contain;
              }
            }
          }
        }
        .less-card-item {
          @extend %card-item;
          flex: 1 0 vw(96);
          .less-than-card {
            border-radius: vw(4);
            border: vw(1) solid rgba(255, 255, 255, 0.54);
          }
        }
      }
    }
  }
}
@media screen and (min-device-width: 600px) {
  .goal-number {
    margin-bottom: vwPad(16);
    display: inline-block;
    margin-right: vwPad(18);
    .title-icon {
      height: vwPad(16);
      width: vwPad(16);
      background: url("~@/assets/images/info-white.svg") no-repeat
      center/contain;
    }
    .goal-number-content {
      margin-bottom: vwPad(16);
      padding: 0 vwPad(16);
      position: relative;
      .line {
        border-top: vwPad(1) solid rgba(255, 255, 255, 0.12);
        margin-bottom: vwPad(24);
      }
      .goal-number-item {
        display: flex;
        justify-content: space-between;
        %card-item-1 {
          background: #111111;
          border-radius: vwPad(4);
          .percent {
            font-family: "Inter";
            font-style: normal;
            font-weight: 700;
            font-size: vwPad(16);
            line-height: vwPad(18);
            height: vwPad(18);
            padding: vwPad(4) 0;
            display: flex;
            align-items: center;
            justify-content: center;
            .unit {
              transform: scale(0.7);
              transform-origin: 0 100%;
            }
          }
          .tip {
            font-weight: 500;
            font-size: vwPad(10);
            line-height: vwPad(11);
            color: rgba(255, 255, 255, 0.7);
            padding: vwPad(4) 0 vwPad(9) 0;
          }
        }
        .more-card-item {
          @extend %card-item-1;
          flex: 2 0 vwPad(178);
          margin-right: vwPad(4);
          .more-than-card {
            padding: vwPad(1);
            border: none;
            background-image: linear-gradient(
                  (90deg, #111111 0%, #111111 48.86%, #111111 100%)
            ),
            linear-gradient(
                  (90deg, #8d3588 0%, #d1383b 48.86%, #e49640 100%)
            );
            border-radius: vwPad(4);
            background-clip: content-box, padding-box;
            position: relative;
            .more-than-star {
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
                background: url("~@/assets/images/star.svg")
                no-repeat center/contain;
              }
            }
          }
        }
        .less-card-item {
          @extend %card-item-1;
          flex: 1 0 vwPad(96);
          .less-than-card {
            border-radius: vwPad(4);
            border: vwPad(1) solid rgba(255, 255, 255, 0.54);
          }
        }
      }
    }
  }
}
</style>
