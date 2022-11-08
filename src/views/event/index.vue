<template>
  <div class="event-container">
    <div class="title">
      <span class="text">{{ $lang.eventList.title }}</span>
      <span class="icon-container">
        <span @click="onlyGoal = !onlyGoal" class="icon" :class="onlyGoal ? 'checked' : ''"></span>
        <span @click="onlyGoal = !onlyGoal" :style="`color:${onlyGoal ? '#ffffff' : 'rgba(255,255,255,0.54)'}`" class="font-10">{{ $lang.eventList.goalOnly }}</span>
      </span>
    </div>
    <div class="container">
      <template v-for="(event, index) in eventList">
        <div v-if="event.teamType === 'home'" :class="event.teamType" class="message">
          <span v-if="event.eventCode === 'SubsMade'" class="subs-made">
            <p>
              <span class="event-name">
                {{event.playerNameList && event.playerNameList[0]}}
              </span>
              <span class="icon up"></span>
            </p>
            <p>
              <span class="event-name">
                {{event.playerNameList && event.playerNameList[1]}}
              </span>
              <span class="icon down"></span>
            </p>
          </span>
          <span v-else-if="event.eventCode === 'Goal'" class="subs-made">
            {{event.playerNameList && event.playerNameList[0]}}
          </span>
          <span v-else-if="event.playerNameList && event.playerNameList[0]" class="subs-made">
            {{event.playerNameList && event.playerNameList[0]}}
          </span>
          <span v-else>
            {{ event.eventDes }}
          </span>
          <span class="time">
            {{ event.timeMin }}’
          </span>
          <span class="icon-container">
              <span class="icon" :class="getIcon(event.eventCode)"></span>
            </span>
        </div>
        <div v-if="event.teamType === 'away'" :class="event.teamType" class="message">
          <span class="icon-container">
            <span class="icon" :class="getIcon(event.eventCode)"></span>
          </span>
          <span class="time">
            {{ event.timeMin }}’
          </span>
          <span v-if="event.eventCode === 'SubsMade'" class="subs-made">
            <p>
              <span class="icon up"></span>
              <span class="event-name">
                {{event.playerNameList && event.playerNameList[0]}}
              </span>
            </p>
            <p>
              <span class="icon down"></span>
              <span class="event-name">
                {{event.playerNameList && event.playerNameList[1]}}
              </span>
            </p>
          </span>
          <span v-else-if="event.eventCode === 'Goal'" class="subs-made">
            {{event.playerNameList && event.playerNameList[0]}}
          </span>
          <span v-else-if="event.playerNameList && event.playerNameList[0]" class="subs-made">
            {{event.playerNameList && event.playerNameList[0]}}
          </span>
          <span v-else>
            {{ event.eventDes }}
          </span>
        </div>
        <div v-if="event.teamType === 'both'" :class="event.teamType" class="message">
          <span>
            {{ event.eventDes }}
          </span>
        </div>
        <span :style="
        event.teamType === 'both'
        || (eventList[index+1] && eventList[index+1].teamType === 'both')
        || index === eventList.length - 1
         ? 'border:none' : ''" class="line">
        </span>
      </template>
    </div>
    <div class="tag-container">
      <div v-for="item in bottomIconList">
        <span class="icon" :class="item.icon"></span>
        <span>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      resData: {},
      matchInfo: {},
      onlyGoal: false,
      bottomIconList:[
        {
          icon: 'goal',
          text: this.$lang.eventList.goal,
        },
        {
          icon: 'penalties',
          text: this.$lang.eventList.penalty,
        },
        {
          icon: 'penalties-not-in',
          text: this.$lang.eventList.penaltyNotInto,
        },
        {
          icon: 'own-goal',
          text: this.$lang.eventList.ownGoal,
        },
      ]
    };
  },
  computed:{
    eventList(){
      return (this.resData.eventList ? this.resData.eventList.filter(item=>{
        return !this.onlyGoal || item.goalsFlag
      }) : []);
    },
  },
  mounted() {
    new Promise((resolve)=>(resolve(require('../squad/data.json')))).then((res)=>{
      this.resData = res.data;
      this.matchInfo = res.data.matchInfo
    })
  },
  methods:{
    getIcon(type){
      switch (type){
        case 'Goal' : return 'goal';
        case 'PenaltyGoal' : return 'penalties-in';
        case 'PenaltyNotGoal' : return 'penalties-not-in';
        case 'OwnGoal' : return 'own-goal';
        case 'YellowCard' : return 'yellow-card';
        case 'RedCard' : return 'red-card';
        case 'DoubleYellow' : return 'yellow-2-card';
        case 'PlayerOn' : return 'up';
        case 'PlayerOff' : return 'down';
        case 'SubsMade' : return 'replace';
        default: return '';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/vw";
@media screen and (max-device-width: 600px) {
  .event-container{
    width: vw(311);
    background: rgba(0, 0, 0, 0.04);
    border: vw(1) solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(vw(8));
    border-radius: vw(16);
    margin: 0 auto;
    .title{
      height: vw(56);
      line-height: vw(56);
      display: flex;
      align-items: center;
      padding: 0 vw(16);
      .text{
        font-weight: 600;
        font-size: vw(16);
        line-height: vw(24);
      }

      .icon-container{
        flex: 1;
        display: inline-block;
        height: vw(24);
        font-size: vw(10);
        line-height: vw(16);
        text-align: right;
        .icon{
          vertical-align: middle;
          display: inline-block;
          width: vw(16);
          height: vw(16);
          background-image: url("../../assets/images/uncheck.svg");
          background-size: 100% 100%;
          &.checked{
            background-image: url("../../assets/images/check.svg");
          }
        }
      }
    }
    .container{
      height: vw(304);
      overflow-y: scroll;
      background: rgba(255, 255, 255, 0.04);
      box-sizing: border-box;
      padding: vw(12) 0;
      >div>span{
        display: inline-block;
      }
      .message{
        font-size: vw(12);
        height: vw(24);
        line-height: vw(16);
      }
      .home{
        width: calc(50% + #{vw(12)});
        text-align: right;
      }
      .away{
        padding-left: calc(50% - #{vw(12)});
      }
      .both{
        width: 100%;
        text-align: center;
        color: rgba(255, 255, 255, 0.54);
      }
      .event-name{
        display: inline-block;
        vertical-align: middle;
        width: vw(84);
      }
      .line{
        display: inline-block;
        width: 50%;
        height: vw(36);
        margin-bottom: vw(-4);
        border-right: vw(1) solid rgba(255, 255, 255, 0.12);;
      }
      .icon-container{
        display: inline-block;
        width: vw(24);
        height: vw(24);
        padding-top: vw(4);
        box-sizing: border-box;
        background: #33353A;
        border: vw(1) solid rgba(255, 255, 255, 0.12);
        border-radius: 50%;
        text-align: center;
        vertical-align: middle;
        .icon{
          display: inline-block;
          width: vw(16);
          height: vw(16);
          background-size: 100% 100%;
        }
      }
      .time{
        display: inline-block;
        width: vw(24);
        padding: 0 vw(2);
      }
      .subs-made{
        vertical-align: text-top;
        width: vw(106);
        >p{
          margin: 0;
        }
      }
    }

    .goal{
      background-image: url("../../assets/images/goal.svg");
    }
    .own-goal{
      background-image: url("../../assets/images/own-goal.svg");
    }
    .penalties{
      background-image: url("../../assets/images/penalties.svg");
    }
    .penalties-not-in{
      background-image: url("../../assets/images/penalties-not-in.svg");
    }
    .yellow-card{
      background-image: url("../../assets/images/yellow-card.svg");
    }
    .red-card{
      background-image: url("../../assets/images/red-card.svg");
    }
    .yellow-2-card{
      background-image: url("../../assets/images/yellow-2-card.svg");
    }
    .up{
      display: inline-block;
      width: vw(12);
      height: vw(12);
      background-size: 100% 100%;
      background-image: url("../../assets/images/up.svg");
    }
    .down{
      display: inline-block;
      width: vw(12);
      height: vw(12);
      background-size: 100% 100%;
      background-image: url("../../assets/images/down.svg");
    }
    .replace{
      background-image: url("../../assets/images/replace.svg");
    }
    .tag-container{
      height: vw(48);
      line-height: vw(48);
      display: flex;
      font-size: vw(12);
      text-align: center;
      >div{
        flex: 1;
      }
      .icon{
        vertical-align: middle;
        display: inline-block;
        width: vw(16);
        height: vw(16);
        background-size: 100% 100%;
      }
    }
  }
}

@media screen and (min-device-width: 600px) {
  .event-container{
    width: vwPad(1024);
    background: rgba(0, 0, 0, 0.04);
    border: vwPad(1) solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(vwPad(8));
    border-radius: vwPad(16);
    margin: 0 auto;
    .title{
      height: vwPad(56);
      line-height: vwPad(56);
      display: flex;
      align-items: center;
      padding: 0 vwPad(16);
      .text{
        font-weight: 600;
        font-size: vwPad(16);
        line-height: vwPad(24);
      }

      .icon-container{
        display: inline-block;
        height: vwPad(24);
        font-size: vwPad(10);
        line-height: vwPad(16);
        flex: 1;
        text-align: right;
        .icon{
          vertical-align: middle;
          display: inline-block;
          width: vwPad(16);
          height: vwPad(16);
          background-image: url("../../assets/images/uncheck.svg");
          background-size: 100% 100%;
          &.checked{
            background-image: url("../../assets/images/check.svg");
          }
        }
      }
    }
    .container{
      height: vwPad(581);
      overflow-y: scroll;
      background: rgba(255, 255, 255, 0.04);
      box-sizing: border-box;
      padding: vwPad(12) 0;
      >div>span{
        display: inline-block;
      }
      .message{
        font-size: vwPad(12);
        height: vwPad(24);
        line-height: vwPad(16);
      }
      .home{
        width: calc(50% + #{vwPad(12)});
        text-align: right;
      }
      .away{
        padding-left: calc(50% - #{vwPad(12)});
      }
      .both{
        width: 100%;
        text-align: center;
        color: rgba(255, 255, 255, 0.54);
      }
      .event-name{
        display: inline-block;
        vertical-align: middle;
        width: vwPad(384);
      }
      .line{
        display: inline-block;
        width: 50%;
        height: vwPad(36);
        margin-bottom: vwPad(-4);
        border-right: vwPad(1) solid rgba(255, 255, 255, 0.12);;
      }
      .icon-container{
        display: inline-block;
        width: vwPad(24);
        height: vwPad(24);
        padding-top: vwPad(4);
        box-sizing: border-box;
        background: #33353A;
        border: vwPad(1) solid rgba(255, 255, 255, 0.12);
        border-radius: 50%;
        text-align: center;
        vertical-align: middle;
        .icon{
          display: inline-block;
          width: vwPad(16);
          height: vwPad(16);
          background-size: 100% 100%;
        }
      }
      .time{
        display: inline-block;
        width: vwPad(24);
        padding: 0 vwPad(2);
      }
      .subs-made{
        vertical-align: text-top;
        width: vwPad(406);
        >p{
          margin: 0;
        }
      }
    }

    .goal{
      background-image: url("../../assets/images/goal.svg");
    }
    .own-goal{
      background-image: url("../../assets/images/own-goal.svg");
    }
    .penalties{
      background-image: url("../../assets/images/penalties.svg");
    }
    .penalties-not-in{
      background-image: url("../../assets/images/penalties-not-in.svg");
    }
    .yellow-card{
      background-image: url("../../assets/images/yellow-card.svg");
    }
    .red-card{
      background-image: url("../../assets/images/red-card.svg");
    }
    .yellow-2-card{
      background-image: url("../../assets/images/yellow-2-card.svg");
    }
    .up{
      display: inline-block;
      width: vwPad(12);
      height: vwPad(12);
      background-size: 100% 100%;
      background-image: url("../../assets/images/up.svg");
    }
    .down{
      display: inline-block;
      width: vwPad(12);
      height: vwPad(12);
      background-size: 100% 100%;
      background-image: url("../../assets/images/down.svg");
    }
    .replace{
      background-image: url("../../assets/images/replace.svg");
    }
    .tag-container{
      height: vwPad(48);
      line-height: vwPad(48);
      display: flex;
      justify-content: flex-start;
      font-size: vwPad(12);
      text-align: center;
      >div{
        margin-right: vw(16);
      }
      .icon{
        vertical-align: middle;
        display: inline-block;
        width: vwPad(16);
        height: vwPad(16);
        background-size: 100% 100%;
      }
    }
  }
}
</style>
