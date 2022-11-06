<template>
  <div class=squadComponent>
    <div class="playerPos">
      <span
        :class="`lineupType${formationUsed}`"
      >
        <span
          class="playerItem"
          v-for="player in lineUpInfo.startingList"
          :key="player.playerId"
        >
          <span class="playerItem_res">
            <span
              class="playerNum"
            >
              {{player.shirtNumber}}
            </span>
            <span
              class="playerName"
            >
              {{player.playerName}}
            </span>
            <template  v-if="player.eventList && player.eventList.length" >
              <template v-for="event in player.eventList">
                <!--右下角显示进球-->
                <span v-if="event.eventName === 'Goal'" class="rightBottomEvent">
                  <span
                    class="eventItem goal"
                  ></span>
                </span>
                  <!--左下角显示牌子-->
                <span v-if="event.eventName === 'YellowCard'" class="leftBottomEvent">
                  <span
                    class="eventItem yellow-card"
                  ></span>
                </span>
                <span v-if="event.eventName === 'RedCard'" class="leftBottomEvent">
                  <span
                    class="eventItem red-card"
                  ></span>
                </span>
                <span v-if="event.eventName === 'DoubleYellow'" class="leftBottomEvent">
                  <span
                    class="eventItem yellow-2-card"
                  ></span>
                </span>
                  <!--左上角显示离场-->
                <span class="leftTopEvent">
                  <span
                    class="eventItem out"
                  ></span>
                </span>
              </template>
            </template>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "squad",
  props:{
    lineUpInfo:{
      type: Object,
      default: ()=>({})
    },
    formationUsed:{
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/vw";

.squadComponent{
  position: relative;
  width: 100%;
  height: vw(277);
  background-image: url('../../assets/images/half.svg');
  background-size: 100% 100%;
  background-position: left top;
  background-repeat: no-repeat;
  .playerPos {
    position: absolute;
    top: vw(12);
    left: vw(13);
    z-index: 10;
    width: calc(100% - #{vw(26)});
    height: vw(265);
    .playerItem {
      position: absolute;
      z-index: 20;
      width: vw(24);
      height: vw(24);
      background-size: 100% auto;
      background-position: left top;
      text-align: center;
      .playerNum {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        width: vw(24);
        height: vw(24);
        font-size: vw(9);
        line-height: vw(24);
        text-align: center;
        background-color: #7A293F;
        border-radius: 50%;
      }
      .playerName {
        @extend .ellipsis;
        position: absolute;
        top: vw(20);
        left: 50%;
        transform: translateX(-50%);
        width: vw(60);
        padding-top: vw(5);
        font-size: vw(9);
        line-height: vw(12);
        text-align: center;
      }
      .rightBottomEvent{
        position: absolute;
        top: vw(10);
        right: vw(-5);
        .goal{
          display: inline-block;
          width: vw(10);
          height: vw(10);
          background-repeat: no-repeat;
          background-position: right top;
          background-image: url('../../assets/images/goal.svg');
          background-size: auto 100%;
        }
      }
      .leftTopEvent{
        position: absolute;
        top: vw(-10);
        left: vw(-5);
        .out{
          display: inline-block;
          width: vw(10);
          height: vw(10);
          background-repeat: no-repeat;
          background-position: right top;
          background-image: url('../../assets/images/out.svg');
          background-size: auto 100%;
        }
      }
      .leftBottomEvent{
        position: absolute;
        top: vw(10);
        left: vw(-5);
        .red-card{
          display: inline-block;
          width: vw(10);
          height: vw(10);
          background-repeat: no-repeat;
          background-position: right top;
          background-image: url('../../assets/images/red-card.svg');
          background-size: auto 100%;
        }
        .yellow-card{
          display: inline-block;
          width: vw(10);
          height: vw(10);
          background-repeat: no-repeat;
          background-position: right top;
          background-image: url('../../assets/images/yellow-card.svg');
          background-size: auto 100%;
        }
        .yellow-2-card{
          display: inline-block;
          width: vw(10);
          height: vw(10);
          background-repeat: no-repeat;
          background-position: right top;
          background-image: url('../../assets/images/yellow-2-card.svg');
          background-size: auto 100%;
        }
      }
    }
    & .lineupType4-4-2 .playerItem {
        &:first-child {
          top: 6%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 30%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 30%;
          left: 32%;
        }
        &:nth-child(4) {
          top: 30%;
          right: 32%;
        }
        &:nth-child(5) {
          top: 30%;
          right: 8.25%;
        }
        &:nth-child(6) {
          top: 54%;
          left: 8.25%;
        }
        &:nth-child(7) {
          top: 54%;
          left: 32%;
        }
        &:nth-child(8) {
          top: 54%;
          right: 32%;
        }
        &:nth-child(9) {
          top: 54%;
          right: 8.25%;
        }
        &:nth-child(10) {
          top: 78%;
          left: 26%;
        }
        &:nth-child(11) {
          top: 78%;
          right: 26%;
        }
      }
    & .lineupType4-3-3 .playerItem {
      &:first-child {
        top: 6%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 30%;
        left: 8.25%;
      }
      &:nth-child(3) {
        top: 30%;
        left: 32%;
      }
      &:nth-child(4) {
        top: 30%;
        right: 32%;
      }
      &:nth-child(5) {
        top: 30%;
        right: 8.25%;
      }
      &:nth-child(6) {
        top: 54%;
        left: 12%;
      }
      &:nth-child(7) {
        top: 54%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(8) {
        top: 54%;
        right: 12%;
      }
      &:nth-child(9) {
        top: 78%;
        left: 12%;
      }
      &:nth-child(10) {
        top: 78%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(11) {
        top: 78%;
        right: 12%;
      }
    }
    & .lineupType4-5-1 .playerItem {
      &:first-child {
        top: 6%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 26%;
        left: 8.25%;
      }
      &:nth-child(3) {
        top: 26%;
        left: 32%;
      }
      &:nth-child(4) {
        top: 26%;
        right: 32%;
      }
      &:nth-child(5) {
        top: 26%;
        right: 8.25%;
      }
      &:nth-child(6) {
        top: 64%;
        left: 6%;
      }
      &:nth-child(7) {
        top: 47%;
        left: 20%;
      }
      &:nth-child(8) {
        top: 47%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(9) {
        top: 47%;
        right: 20%;
      }
      &:nth-child(10) {
        top: 64%;
        right: 6%;
      }
      &:nth-child(11) {
        top: 78%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & .lineupType5-3-2 .playerItem {
      &:first-child {
        top: 6%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 24%;
        left: 3.25%;
      }
      &:nth-child(3) {
        top: 28%;
        left: 23.25%;
      }
      &:nth-child(4) {
        top: 32%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(5) {
        top: 28%;
        right: 23.25%;
      }
      &:nth-child(6) {
        top: 24%;
        right: 3.25%;
      }
      &:nth-child(7) {
        top: 54%;
        left: 14%;
      }
      &:nth-child(8) {
        top: 54%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(9) {
        top: 54%;
        right: 14%;
      }
      &:nth-child(10) {
        top: 78%;
        left: 26%;
      }
      &:nth-child(11) {
        top: 78%;
        right: 26%;
      }
    }
    & .lineupType5-4-1 .playerItem {
      &:first-child {
        top: 6%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 24%;
        left: 3.25%;
      }
      &:nth-child(3) {
        top: 28%;
        left: 23.25%;
      }
      &:nth-child(4) {
        top: 32%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(5) {
        top: 28%;
        right: 23.25%;
      }
      &:nth-child(6) {
        top: 24%;
        right: 3.25%;
      }
      &:nth-child(7) {
        top: 54%;
        left: 8.25%;
      }
      &:nth-child(8) {
        top: 54%;
        left: 32%;
      }
      &:nth-child(9) {
        top: 54%;
        right: 32%;
      }
      &:nth-child(10) {
        top: 54%;
        right: 8.25%;
      }
      &:nth-child(11) {
        top: 78%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & .lineupType3-5-2 .playerItem {
      &:first-child {
        top: 6%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 30%;
        left: 14%;
      }
      &:nth-child(3) {
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(4) {
        top: 30%;
        right: 14%;
      }
      &:nth-child(5) {
        top: 60%;
        left: 3.25%;
      }
      &:nth-child(6) {
        top: 52%;
        left: 24.45%;
      }
      &:nth-child(7) {
        top: 52%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(8) {
        top: 52%;
        right: 24.45%;
      }
      &:nth-child(9) {
        top: 60%;
        right: 3.25%;
      }

      &:nth-child(10) {
        top: 78%;
        left: 26%;
      }
      &:nth-child(11) {
        top: 78%;
        right: 26%;
      }
    }
    & .lineupType3-4-3 .playerItem {
      &:first-child {
        top: 6%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 30%;
        left: 20%;
      }
      &:nth-child(3) {
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(4) {
        top: 30%;
        right: 20%;
      }
      &:nth-child(5) {
        top: 54%;
        left: 8.25%;
      }
      &:nth-child(6) {
        top: 54%;
        left: 32%;
      }
      &:nth-child(7) {
        top: 54%;
        right: 32%;
      }
      &:nth-child(8) {
        top: 54%;
        right: 8.25%;
      }
      &:nth-child(9) {
        top: 78%;
        left: 12%;
      }
      &:nth-child(10) {
        top: 78%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(11) {
        top: 78%;
        right: 12%;
      }
    }
    & .lineupType3-4-3d .playerItem {
      &:first-child {
        top: 2%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 22%;
        left: 20%;
      }
      &:nth-child(3) {
        top: 22%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(4) {
        top: 22%;
        right: 20%;
      }
      &:nth-child(5) {
        top: 52%;
        left: 10%;
      }
      &:nth-child(6) {
        top: 41%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(7) {
        top: 60%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(8) {
        top: 52%;
        right: 10%;
      }
      &:nth-child(9) {
        top: 79%;
        left: 12%;
      }
      &:nth-child(10) {
        top: 79%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(11) {
        top: 79%;
        right: 12%;
      }
    }
    & .lineupType4-2-4-0 .playerItem {
      &:first-child {
        top: 6%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 30%;
        left: 8.25%;
      }
      &:nth-child(3) {
        top: 30%;
        left: 32%;
      }
      &:nth-child(4) {
        top: 30%;
        right: 32%;
      }
      &:nth-child(5) {
        top: 30%;
        right: 8.25%;
      }
      &:nth-child(6) {
        top: 54%;
        left: 26%;
      }
      &:nth-child(7) {
        top: 54%;
        right: 26%;
      }
      &:nth-child(8) {
        top: 78%;
        left: 8.25%;
      }
      &:nth-child(9) {
        top: 78%;
        left: 32%;
      }
      &:nth-child(10) {
        top: 78%;
        right: 32%;
      }
      &:nth-child(11) {
        top: 78%;
        right: 8.25%;
      }
    }
    & .lineupType4-4-1-1 .playerItem {
      &:first-child {
        top: 4%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 22%;
        left: 8.25%;
      }
      &:nth-child(3) {
        top: 22%;
        left: 32%;
      }
      &:nth-child(4) {
        top: 22%;
        right: 32%;
      }
      &:nth-child(5) {
        top: 22%;
        right: 8.25%;
      }
      &:nth-child(6) {
        top: 42%;
        left: 8.25%;
      }
      &:nth-child(7) {
        top: 42%;
        left: 32%;
      }
      &:nth-child(8) {
        top: 42%;
        right: 32%;
      }
      &:nth-child(9) {
        top: 42%;
        right: 8.25%;
      }
      &:nth-child(10) {
        top: 58%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(11) {
        top: 78%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & .lineupType4-1-4-1 .playerItem {
      &:first-child {
        top: 4%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 22%;
        left: 8.25%;
      }
      &:nth-child(3) {
        top: 22%;
        left: 32%;
      }
      &:nth-child(4) {
        top: 22%;
        right: 32%;
      }
      &:nth-child(5) {
        top: 22%;
        right: 8.25%;
      }
      &:nth-child(6) {
        top: 40%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(7) {
        top: 58%;
        left: 8.25%;
      }
      &:nth-child(8) {
        top: 58%;
        left: 32%;
      }
      &:nth-child(9) {
        top: 58%;
        right: 32%;
      }
      &:nth-child(10) {
        top: 58%;
        right: 8.25%;
      }

      &:nth-child(11) {
        top: 78%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & .lineupType4-2-3-1 .playerItem {
      &:first-child {
        top: 4%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 22%;
        left: 8.25%;
      }
      &:nth-child(3) {
        top: 22%;
        left: 32%;
      }
      &:nth-child(4) {
        top: 22%;
        right: 32%;
      }
      &:nth-child(5) {
        top: 22%;
        right: 8.25%;
      }
      &:nth-child(6) {
        top: 41%;
        left: 27%;
      }
      &:nth-child(7) {
        top: 41%;
        right: 27%;
      }
      &:nth-child(8) {
        top: 58%;
        left: 14%;
      }
      &:nth-child(9) {
        top: 58%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(10) {
        top: 58%;
        right: 14%;
      }

      &:nth-child(11) {
        top: 78%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & .lineupType4-3-2-1 .playerItem {
      &:first-child {
        top: 4%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 22%;
        left: 8.25%;
      }
      &:nth-child(3) {
        top: 22%;
        left: 32%;
      }
      &:nth-child(4) {
        top: 22%;
        right: 32%;
      }
      &:nth-child(5) {
        top: 22%;
        right: 8.25%;
      }

      &:nth-child(6) {
        top: 42%;
        left: 14%;
      }
      &:nth-child(7) {
        top: 42%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(8) {
        top: 42%;
        right: 14%;
      }
      &:nth-child(9) {
        top: 60%;
        left: 27%;
      }
      &:nth-child(10) {
        top: 60%;
        right: 27%;
      }
      &:nth-child(11) {
        top: 78%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & .lineupType4-2-2-2 .playerItem {
      &:first-child {
        top: 4%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 22%;
        left: 8.25%;
      }
      &:nth-child(3) {
        top: 22%;
        left: 32%;
      }
      &:nth-child(4) {
        top: 22%;
        right: 32%;
      }
      &:nth-child(5) {
        top: 22%;
        right: 8.25%;
      }
      &:nth-child(6) {
        top: 42%;
        left: 23%;
      }
      &:nth-child(7) {
        top: 42%;
        right: 23%;
      }
      &:nth-child(8) {
        top: 60%;
        left: 32%;
      }
      &:nth-child(9) {
        top: 60%;
        right: 32%;
      }
      &:nth-child(10) {
        top: 78%;
        left: 23%;
      }
      &:nth-child(11) {
        top: 78%;
        right: 23%;
      }
    }
    & .lineupType3-5-1-1 .playerItem {
      &:first-child {
        top: 3%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 22%;
        left: 14%;
      }
      &:nth-child(3) {
        top: 22%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(4) {
        top: 22%;
        right: 14%;
      }
      &:nth-child(5) {
        top: 48%;
        left: 3.25%;
      }
      &:nth-child(6) {
        top: 42%;
        left: 20%;
      }
      &:nth-child(7) {
        top: 42%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(8) {
        top: 42%;
        right: 20%;
      }
      &:nth-child(9) {
        top: 48%;
        right: 3.25%;
      }

      &:nth-child(10) {
        top: 62%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(11) {
        top: 80%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & .lineupType3-4-2-1 .playerItem {
      &:first-child {
        top: 3%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 24%;
        left: 14%;
      }
      &:nth-child(3) {
        top: 24%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(4) {
        top: 24%;
        right: 14%;
      }
      &:nth-child(5) {
        top: 44%;
        left: 8.25%;
      }
      &:nth-child(6) {
        top: 44%;
        left: 32%;
      }
      &:nth-child(7) {
        top: 44%;
        right: 32%;
      }
      &:nth-child(8) {
        top: 44%;
        right: 8.25%;
      }
      &:nth-child(9) {
        top: 64%;
        left: 26%;
      }
      &:nth-child(10) {
        top: 64%;
        right: 26%;
      }
      &:nth-child(11) {
        top: 78%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & .lineupType3-4-1-2 .playerItem {
      &:first-child {
        top: 3%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 24%;
        left: 14%;
      }
      &:nth-child(3) {
        top: 24%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(4) {
        top: 24%;
        right: 14%;
      }
      &:nth-child(5) {
        top: 44%;
        left: 8.25%;
      }
      &:nth-child(6) {
        top: 44%;
        left: 32%;
      }
      &:nth-child(7) {
        top: 44%;
        right: 32%;
      }
      &:nth-child(8) {
        top: 44%;
        right: 8.25%;
      }
      &:nth-child(9) {
        top: 64%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(10) {
        top: 78%;
        left: 26%;
      }
      &:nth-child(11) {
        top: 78%;
        right: 26%;
      }
    }
    & .lineupType3-1-4-2 .playerItem {
      &:first-child {
        top: 3%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 23%;
        left: 14%;
      }
      &:nth-child(3) {
        top: 23%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(4) {
        top: 23%;
        right: 14%;
      }
      &:nth-child(5) {
        top: 42%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(6) {
        top: 58%;
        left: 8.25%;
      }
      &:nth-child(7) {
        top: 58%;
        left: 32%;
      }
      &:nth-child(8) {
        top: 58%;
        right: 32%;
      }
      &:nth-child(9) {
        top: 58%;
        right: 8.25%;
      }

      &:nth-child(10) {
        top: 78%;
        left: 26%;
      }
      &:nth-child(11) {
        top: 78%;
        right: 26%;
      }
    }
    & .lineupType4-1-3-2 .playerItem {
      &:first-child {
        top: 3%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 23%;
        left: 8.25%;
      }
      &:nth-child(3) {
        top: 23%;
        left: 32%;
      }
      &:nth-child(4) {
        top: 23%;
        right: 32%;
      }
      &:nth-child(5) {
        top: 23%;
        right: 8.25%;
      }

      &:nth-child(6) {
        top: 40%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(7) {
        top: 60%;
        left: 14%;
      }
      &:nth-child(8) {
        top: 60%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(9) {
        top: 60%;
        right: 14%;
      }
      &:nth-child(10) {
        top: 78%;
        left: 26%;
      }
      &:nth-child(11) {
        top: 78%;
        right: 26%;
      }
    }
    & .lineupType4-3-1-2 .playerItem {
      &:first-child {
        top: 3%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 23%;
        left: 8.25%;
      }
      &:nth-child(3) {
        top: 23%;
        left: 32%;
      }
      &:nth-child(4) {
        top: 23%;
        right: 32%;
      }
      &:nth-child(5) {
        top: 23%;
        right: 8.25%;
      }
      &:nth-child(6) {
        top: 42%;
        left: 14%;
      }
      &:nth-child(7) {
        top: 42%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(8) {
        top: 42%;
        right: 14%;
      }
      &:nth-child(9) {
        top: 62%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(10) {
        top: 78%;
        left: 26%;
      }
      &:nth-child(11) {
        top: 78%;
        right: 26%;
      }
    }
    & .lineupType3-2-4-1 .playerItem {
      &:first-child {
        top: 3%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 24%;
        left: 14%;
      }
      &:nth-child(3) {
        top: 24%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(4) {
        top: 24%;
        right: 14%;
      }
      &:nth-child(5) {
        top: 41%;
        left: 26%;
      }
      &:nth-child(6) {
        top: 41%;
        right: 26%;
      }
      &:nth-child(7) {
        top: 61%;
        left: 8.25%;
      }
      &:nth-child(8) {
        top: 61%;
        left: 32%;
      }
      &:nth-child(9) {
        top: 61%;
        right: 32%;
      }
      &:nth-child(10) {
        top: 61%;
        right: 8.25%;
      }
      &:nth-child(11) {
        top: 78%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & .lineupType3-3-3-1 .playerItem {
      &:first-child {
        top: 1%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(2) {
        top: 20%;
        left: 16%;
      }
      &:nth-child(3) {
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(4) {
        top: 20%;
        right: 16%;
      }
      &:nth-child(5) {
        top: 40%;
        left: 16%;
      }
      &:nth-child(6) {
        top: 40%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(7) {
        top: 40%;
        right: 16%;
      }
      &:nth-child(8) {
        top: 60%;
        left: 6%;
      }
      &:nth-child(9) {
        top: 60%;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(10) {
        top: 60%;
        right: 6%;
      }
      &:nth-child(11) {
        top: 79%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & .lineupType4-1-2-1-2 .playerItem {
        &:first-child {
          top: 2%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 22%;
          left: 8.25%;
        }
        &:nth-child(3) {
          top: 22%;
          left: 30%;
        }
        &:nth-child(4) {
          top: 22%;
          right: 30%;
        }
        &:nth-child(5) {
          top: 22%;
          right: 8.25%;
        }
        &:nth-child(6) {
          top: 40%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(7) {
          top: 50%;
          left: 12%;
        }
        &:nth-child(8) {
          top: 50%;
          right: 12%;
        }
        &:nth-child(9) {
          top: 64%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          top: 76%;
          left: 20%;
        }
        &:nth-child(11) {
          top: 76%;
          right: 20%;
        }
      }
    & .lineupType3-1-3-1-2 .playerItem {
        &:first-child {
          top: 0.6%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2) {
          top: 18%;
          left: 20%;
        }
        &:nth-child(3) {
          top: 18%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(4) {
          top: 18%;
          right: 20%;
        }
        &:nth-child(5) {
          top: 36%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(6) {
          top: 54%;
          left: 6%;
        }
        &:nth-child(7) {
          top: 54%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(8) {
          top: 54%;
          right: 6%;
        }
        &:nth-child(9) {
          top: 72%;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(10) {
          top: 81%;
          left: 26%;
        }
        &:nth-child(11) {
          top: 81%;
          right: 26%;
        }
      }
  }
}
</style>
