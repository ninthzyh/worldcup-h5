<template>
  <div class="switch-container">
    <div class="show-item">
      <div v-for="(tab, index) in tabList" :key="index" class="switch-item" @click="change(index)">
        <slot name="tab1" :tab="tab">
          <div class="logo">
            <NationalFlag />
          </div>
          <span class="font-10" style="width: auto">{{ tab.text }}</span>
        </slot>
      </div>
    </div>
    <div class="select-item" :class="position">
      <div class="logo">
        <NationalFlag />
      </div>
      <span class="font-10" style="width: auto">
        {{ selected.text }}
      </span>
    </div>
  </div>
</template>

<script>
import NationalFlag from "./NationalFlag";
export default {
  name: "SwitchTab",
  components: {NationalFlag},
  props: {
    tabList:{
      type: Array,
      default: ()=>[{
        text: 'tab1'
      },{
        text: 'tab2'
      }]
    }
  },
  data(){
    return{
      position: 'left',
      selected: this.tabList[0]
    }
  },
  watch:{
    tabList(newVal){
      this.selected = newVal[0]
    }
  },
  methods:{
    change(index){
      this.position = index ? 'right' : 'left';
      this.selected = this.tabList[index];
      this.$emit('tabChange',index);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/vw";

@media screen and (max-device-width: 600px) {
  .switch-container {
    height: vw(24);
    line-height: vw(24);
    background: rgba(255, 255, 255, 0.12);
    border-radius: vw(20);
    position: relative;
    text-align: center;

    .show-item {
      display: flex;
      .switch-item {
        border-radius: vw(20);
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
      }
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: vw(12);
      height: vw(12);
    }

    .select-item {
      position: absolute;
      top: vw(2);
      left: 0;
      width: 55%;
      height: vw(20);
      background: #FFFFFF;
      color: rgba(0, 0, 0, 0.87);
      border-radius: vw(12);
      display: flex;
      justify-content: center;
      align-items: center;

      &.left {
        right: unset;
        left: 0;
        animation-name: left;
        animation-duration: 0.3s;
      }

      &.right {
        left: unset;
        right: 0;
        animation-name: right;
        animation-duration: 0.3s;
      }
    }
  }
  @keyframes left {
    0% {
      left: 45%;
    }
    100% {
      left: 0;
    }
  }
  @keyframes right {
    0% {
      right: 45%;
    }
    100% {
      right: 0;
    }
  }
}

@media screen and (min-device-width: 600px) {
  .switch-container {
    height: vwPad(24);
    line-height: vwPad(24);
    background: rgba(255, 255, 255, 0.12);
    border-radius: vwPad(20);
    position: relative;
    text-align: center;

    .show-item {
      display: flex;
      .switch-item {
        border-radius: vwPad(20);
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
      }
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: vwPad(12);
      height: vwPad(12);
    }

    .select-item {
      position: absolute;
      top: vwPad(2);
      left: 0;
      width: 55%;
      height: vwPad(20);
      background: #FFFFFF;
      color: rgba(0, 0, 0, 0.87);
      border-radius: vwPad(12);
      display: flex;
      justify-content: center;
      align-items: center;

      &.left {
        right: unset;
        left: 0;
        animation-name: left;
        animation-duration: 0.3s;
      }

      &.right {
        left: unset;
        right: 0;
        animation-name: right;
        animation-duration: 0.3s;
      }
    }
  }
  @keyframes left {
    0% {
      left: 45%;
    }
    100% {
      left: 0;
    }
  }
  @keyframes right {
    0% {
      right: 45%;
    }
    100% {
      right: 0;
    }
  }
}
</style>
